#!/bin/bash

# Скрипт для выполнения домашнего задания по Terraform

echo "=== Инициализация Terraform ==="
terraform init

if [ $? -ne 0 ]; then
    echo "Ошибка при инициализации Terraform. Проверьте подключение к интернету."
    exit 1
fi

echo ""
echo "=== Планирование изменений ==="
terraform plan

echo ""
echo "=== Применение изменений (создание S3 бакета) ==="
echo "ВНИМАНИЕ: Сохраните скриншот вывода следующей команды!"
terraform apply -auto-approve

if [ $? -eq 0 ]; then
    echo ""
    echo "=== S3 бакет успешно создан! ==="
    echo ""
    echo "=== Удаление ресурсов ==="
    terraform destroy -auto-approve > destroy-output.txt 2>&1
    echo "Вывод команды terraform destroy сохранен в файл destroy-output.txt"
else
    echo "Ошибка при создании бакета"
    exit 1
fi
