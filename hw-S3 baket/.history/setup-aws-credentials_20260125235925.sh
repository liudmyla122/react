#!/bin/bash

# Скрипт для настройки AWS credentials

echo "=== Настройка AWS Credentials ==="
echo ""
echo "Вам нужно получить AWS Access Key ID и Secret Access Key из аккаунта AWS_lab"
echo ""

# Создаем директорию .aws если её нет
mkdir -p ~/.aws

# Запрашиваем credentials
read -p "Введите AWS Access Key ID: " AWS_ACCESS_KEY_ID
read -sp "Введите AWS Secret Access Key: " AWS_SECRET_ACCESS_KEY
echo ""

# Создаем файл credentials
cat > ~/.aws/credentials << EOF
[default]
aws_access_key_id = ${AWS_ACCESS_KEY_ID}
aws_secret_access_key = ${AWS_SECRET_ACCESS_KEY}
EOF

# Создаем файл config
cat > ~/.aws/config << EOF
[default]
region = eu-central-1
output = json
EOF

echo ""
echo "✅ AWS credentials настроены!"
echo "Файлы созданы:"
echo "  - ~/.aws/credentials"
echo "  - ~/.aws/config"
echo ""
echo "Теперь вы можете выполнить:"
echo "  terraform init"
echo "  terraform plan"
echo "  terraform apply"
