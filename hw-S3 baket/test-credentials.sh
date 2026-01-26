#!/bin/bash

# Скрипт для тестирования формата AWS credentials
# ВАЖНО: Это только для проверки формата! Для реальной работы нужны настоящие ключи из AWS

echo "=== Тестовая настройка AWS Credentials ==="
echo ""
echo "ВНИМАНИЕ: Эти ключи НЕ РАБОТАЮТ с реальным AWS!"
echo "Они только для проверки формата. Для выполнения ДЗ нужны РЕАЛЬНЫЕ ключи из аккаунта AWS_lab."
echo ""

# Тестовые значения (не работают с реальным AWS)
export AWS_ACCESS_KEY_ID="AKIAIOSFODNN7EXAMPLE"
export AWS_SECRET_ACCESS_KEY="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
export AWS_DEFAULT_REGION="eu-central-1"

echo "✅ Тестовые переменные окружения установлены:"
echo "   AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID"
echo "   AWS_SECRET_ACCESS_KEY=***скрыто***"
echo "   AWS_DEFAULT_REGION=$AWS_DEFAULT_REGION"
echo ""
echo "Теперь попробуйте выполнить:"
echo "   terraform plan"
echo ""
echo "⚠️  Если увидите ошибку аутентификации - это нормально!"
echo "   Для реальной работы нужны настоящие ключи из AWS консоли."
