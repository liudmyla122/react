variable "bucket_name" {
  description = "Имя S3 бакета (должно быть глобально уникальным в AWS)"
  type        = string
  # ВАЖНО: Замените на ваше имя в формате "group-name-bucket"
  # где group - ваша группа, name - ваше имя
  default     = "mygroup-myname-bucket"
}

variable "environment" {
  description = "Окружение (environment tag)"
  type        = string
  default     = "dev"
}
