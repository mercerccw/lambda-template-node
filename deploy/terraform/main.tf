variable "aws_region" {
  default = "us-east-2"
}

provider "aws" {
  region                  = "${var.aws_region}"
  profile                 = "ccmercer"
}