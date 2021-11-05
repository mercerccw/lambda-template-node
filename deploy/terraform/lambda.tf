variable "aws_region" {
  default = "us-east-2"
}

variable "lambda_name" {
  default = "lambda_template_node"
}

provider "aws" {
  region                  = "${var.aws_region}"
  profile                 = "ccmercer"
}

data "archive_file" "lambda_zip" {
  type        = "zip"
  output_path = "${var.lambda_name}.zip"

  source_dir = "build/lambda/"
}

resource "aws_lambda_function" "lambda_template_node" {
  filename         = "${var.lambda_name}.zip"
  function_name    = "${var.lambda_name}"
  role             = "${aws_iam_role.iam_for_lambda_tf.arn}"
  handler          = "index.handler"
  source_code_hash = "${data.archive_file.lambda_zip.output_base64sha256}"
  runtime          = "nodejs14.x"
}

resource "aws_iam_role" "iam_for_lambda_tf" {
  name = "iam_for_lambda_tf"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}