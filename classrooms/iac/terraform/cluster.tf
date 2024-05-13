resource "aws_security_group" "eks_sg" {
  vpc_id = aws_vpc.eks_vpc.id
  tags = {
    Name    = "eks-sg"
    project = var.project
  }
  egress = {
    from_port       = 0
    to_port         = 0
    protocol        = "-1" #every protocol
    cidr_blocks     = ["10.0.0.0/0"]
    prefix_list_ids = []
  }

}