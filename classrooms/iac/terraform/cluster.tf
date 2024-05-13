resource "aws_security_group" "eks_sg" {
  vpc_id = aws_vpc.eks_vpc.id
  tags = {
    Name    = "eks-sg"
    project = var.project
  }
  egress {
    from_port       = 0
    to_port         = 0
    protocol        = "-1" #every protocol
    cidr_blocks     = ["0.0.0.0/0"]
    prefix_list_ids = []
  }
}

resource "aws_iam_role" "cluster_role" {
  name               = "${var.cluster_name}-role"
  assume_role_policy = <<POLICY
    {
        "Version": "2012-10-17",
        "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
            "Service": "eks.amazonaws.com"
            },
            "Action": "sts:AssumeRole"
        }
        ]
    } 
POLICY
}

resource "aws_iam_role_policy_attachment" "cluster-AmazonEKSVPCResourceController" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSVPCResourceController"
  role       = aws_iam_role.cluster_role.name
}

resource "aws_iam_role_policy_attachment" "cluster-AmazonEKSSClusterPolicy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
  role       = aws_iam_role.cluster_role.name
}