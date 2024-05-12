variable "aws_region" {
    description = "AWS region"
    default     = "us-west-2"
}

provider "aws" {
    version = "~> 3.0"
    region  = var.aws_region
}

provider "local" {
    version = "~> 2.1"
    # Configuration for the local provider goes here
}
