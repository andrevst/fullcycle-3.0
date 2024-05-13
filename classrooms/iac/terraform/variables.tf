variable "project" {
  description = "Project name"
}

variable "subnet_count" {
  description = "Number of subnets"
}

variable "cluster_name" {
  description = "Name of the EKS cluster"
}

variable "retention_days" {
  description = "Cloudwatch log retention in days"
  default     = 7
}