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

resource "aws_cloudwatch_log_group" "cluster_log_group" {
  name              = "/aws/eks/${var.cluster_name}"
  retention_in_days = var.retention_days

}

resource "aws_eks_cluster" "cluster" {
  depends_on = [
    aws_cloudwatch_log_group.cluster_log_group,
    aws_iam_role_policy_attachment.cluster-AmazonEKSSClusterPolicy,
    aws_iam_role_policy_attachment.cluster-AmazonEKSVPCResourceController
  ]

  name                      = var.cluster_name
  role_arn                  = aws_iam_role.cluster_role.arn
  enabled_cluster_log_types = ["api", "audit", "authenticator", "controllerManager", "scheduler"]
  vpc_config {
    subnet_ids         = aws_subnet.eks_subnets[*].id
    security_group_ids = [aws_security_group.eks_sg.id]
  }

}