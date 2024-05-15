# Terraform lesson

## About this lesson

> Terraform is an open-source infrastructure as code software tool that allows users to define and provision a datacenter infrastructure using a high-level configuration language. It enables developers to use code to manage and automate the configuration of cloud services, servers, and other infrastructure elements.

## Commands used

### Setup

We use [direnv](https://direnv.net/) to setup AWS credentials as environment variables. Check the [.envrc.example](.envrc.example).

```shell
export AWS_ACCESS_KEY_ID=""
export AWS_SECRET_ACCESS_KEY=""
```

Below is the terraform cli commands used.

```shell
# Start terraform
terraform init

# Validate code
terraform validate

# Verify changes
terraform plan

# Deploy changes
terraform apply -auto-approve

# Destroy all resources
terraform destroy -auto-approve
```

### Working with k8s

We generate the [kubeconfig file with our terraform code](output.tf), AWS has another security layer on EKS to validate if our IAM user is allowed to access the cluster. To use it we need to install AWS IAM Authenticator. I used the brew formula `brew install aws-iam-authenticator`

Also, I changed my `$KUBECONFIG` to use the generated file `export=KUBECONFIG=./kubeconfig.yaml`, this command is added to the .envrc file, check [.envrc.example](.envrc.example)

## References

[terraform local provider](https://registry.terraform.io/providers/hashicorp/local/latest)
[terraform aws provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
[ip calculator](https://jodies.de/ipcalc)