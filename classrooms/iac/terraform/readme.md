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
```

## References

[terraform local provider](https://registry.terraform.io/providers/hashicorp/local/latest)
[terraform aws provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
[ip calculator](https://jodies.de/ipcalc)