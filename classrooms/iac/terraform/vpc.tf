
data "aws_availability_zones" "available_zones" {}

resource "aws_vpc" "eks_vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "eks-vpc"
    project = "fullcycle-3.0"
  }
}

resource "aws_subnet" "eks_sub_1" {
    vpc_id = aws_vpc.eks_vpc.id
    cidr_block = "10.0.1.0/24"
    availability_zone = "us-east-1a"
    tags = {
        Name = "eks-subnet-1"
        project = "fullcycle-3.0"
  }
}

resource "aws_subnet" "eks_sub_2" {
    vpc_id = aws_vpc.eks_vpc.id
    cidr_block = "10.0.2.0/24"
    availability_zone = "us-east-1b"
    tags = {
        Name = "eks-subnet-2"
        project = "fullcycle-3.0"
  }
}