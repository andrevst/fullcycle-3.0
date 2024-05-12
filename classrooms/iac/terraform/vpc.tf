
data "aws_availability_zones" "available_zones" {}

resource "aws_vpc" "eks_vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name    = "eks-vpc"
    project = var.project
  }
}

resource "aws_subnet" "eks_subnets" {
  count                   = var.subnet_count
  vpc_id                  = aws_vpc.eks_vpc.id
  cidr_block              = "10.0.${count.index}.0/24"
  availability_zone       = data.aws_availability_zones.available_zones.names[count.index]
  map_public_ip_on_launch = true
  tags = {
    Name    = "eks-subnet-${count.index}"
    project = var.project
  }
}