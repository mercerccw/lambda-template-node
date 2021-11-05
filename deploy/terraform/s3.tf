data "archive_file" "lambda_template_node_zip" {
  type        = "zip"
  output_path = "${var.lambda_name}.zip"
  source_dir = "build/lambda/"
}

resource "aws_s3_bucket" "lambda_template_node_archive" {
  bucket = "lambda-template-node-archive"
  acl    = "private"

  tags = {
    Name        = "Lambda Node Template"
  }
}

resource "aws_s3_bucket_object" "file_upload" {
  bucket = "${aws_s3_bucket.lambda_template_node_archive.id}"
  key    = "lambda-functions/${var.lambda_name}.zip"
  source = "${data.archive_file.lambda_template_node_zip.output_path}" # its mean it depended on zip
}