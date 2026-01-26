#!/bin/bash



export AWS_ACCESS_KEY_ID="AKIAIOSFODNN7EXAMPLE"
export AWS_SECRET_ACCESS_KEY="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
export AWS_DEFAULT_REGION="eu-central-1"

echo "✅ Тестовые AWS credentials установлены в текущей сессии терминала"
echo ""
echo "⚠️  ВНИМАНИЕ:"
echo "   - Эти ключи НЕ РАБОТАЮТ с реальным AWS"
echo "   - Они только для проверки формата конфигурации Terraform"
echo "   - Для выполнения ДЗ нужны РЕАЛЬНЫЕ ключи из аккаунта AWS_lab"
echo ""
echo "Теперь выполните:"
echo "   terraform plan"
echo ""
echo "Вы получите ошибку аутентификации, но это покажет,"
echo "что формат ключей правильный и Terraform пытается подключиться."
