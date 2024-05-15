provider "aws" {
  region = "us-east-1"
}

module "network" {
  source       = "./modules/network"
  project      = var.project
  subnet_count = var.subnet_count
  cidr_block   = var.cidr_block
}