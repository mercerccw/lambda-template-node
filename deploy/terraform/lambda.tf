variable "lambda_name" {
  default = "lambda_template_node"
}

resource "aws_lambda_function" "lambda_template_node" {
  function_name    = "${var.lambda_name}"
  role             = "${aws_iam_role.iam_for_lambda_tf.arn}"
  handler          = "index.handler"
  source_code_hash = "${data.archive_file.lambda_template_node_zip.output_base64sha256}"
  s3_bucket        = "${aws_s3_bucket.lambda_template_node_archive.bucket}"
  s3_key           = "${aws_s3_bucket_object.file_upload.key}"
  runtime          = "nodejs14.x"

  environment {
    variables = {
      isLambda = true
    }
  }
}
