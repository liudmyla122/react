# Домашнее задание 7: Создание S3 бакета с использованием Terraform

## Структура проекта

- `main.tf` - описание ресурса S3 бакета
- `providers.tf` - настройка провайдера AWS (регион Frankfurt)
- `variables.tf` - переменные для имени бакета и окружения

## Настройка

1. **Обновите значение по умолчанию в `variables.tf`**:
   - Замените `mygroup-myname-bucket` на ваше имя бакета в формате `group-name-bucket`
   - Где `group` - ваша группа, `name` - ваше имя

2. **Настройте AWS credentials**:
   ```bash
   export AWS_ACCESS_KEY_ID=your_access_key
   export AWS_SECRET_ACCESS_KEY=your_secret_key
   ```
   Или используйте файл `~/.aws/credentials`

## Выполнение команд

### 1. Инициализация Terraform
```bash
terraform init
```

### 2. Планирование изменений
```bash
terraform plan
```

### 3. Применение изменений (создание бакета)
```bash
terraform apply
```
При запросе подтверждения введите `yes`.

**ВАЖНО**: Сохраните скриншот вывода команды `terraform apply` для сдачи ДЗ!

### 4. Удаление ресурсов
```bash
terraform destroy
```
При запросе подтверждения введите `yes`.

### 5. Сохранение вывода destroy в файл
```bash
terraform destroy > destroy-output.txt 2>&1
```

## Результат

После выполнения всех команд у вас должны быть:
- ✅ Файл `destroy-output.txt` с выводом команды `terraform destroy`
- ✅ Скриншот вывода `terraform apply` или ссылка на GitHub репозиторий

## Примечания

- Имя S3 бакета должно быть глобально уникальным в AWS
- Убедитесь, что у вас есть права на создание S3 бакетов в аккаунте AWS_lab
- Регион установлен на `eu-central-1` (Frankfurt)
