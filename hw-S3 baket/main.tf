resource "aws_s3_bucket" "main" {
  bucket = var.bucket_Liudmyla

  tags = {
    Name        = var.bucket_Liudmyla
    Environment = var.environment
  }
}
