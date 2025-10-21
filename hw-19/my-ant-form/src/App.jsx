import React, { useState } from 'react'
import { Form, Input, Button, Card, Typography, Space } from 'antd'

const { Title, Text } = Typography

const App = () => {
  const [submittedData, setSubmittedData] = useState(null)

  const [form] = Form.useForm()

  /**
   * 2. Функция обработки успешной отправки формы.
   * @param {object} values - Объект с данными формы ({ name, description }).
   */
  const onFinish = (values) => {
    setSubmittedData(values)

    form.resetFields()
  }

  const onFinishFailed = (errorInfo) => {
    console.error('Ошибка валидации формы:', errorInfo)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-lg space-y-6">
        <Card className="shadow-xl rounded-xl border-t-4 border-blue-500">
          <Title level={3} className="text-center mb-6">
            Форма с использованием Ant Design
          </Title>

          <Form
            form={form}
            name="ant_design_demo_form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            autoComplete="off"
          >
            <Form.Item
              label="Имя"
              name="name"
              rules={[
                { required: true, message: 'Пожалуйста, введите имя!' },
                { max: 50, message: 'Имя должно быть короче 50 символов.' },
              ]}
              className="mb-4"
            >
              <Input placeholder="Name" size="large" className="rounded-lg" />
            </Form.Item>

            <Form.Item
              label="Описание"
              name="description"
              rules={[
                { required: true, message: 'Пожалуйста, введите описание!' },
                {
                  max: 200,
                  message: 'Описание должно быть короче 200 символов.',
                },
              ]}
              className="mb-6"
            >
              <Input.TextArea
                placeholder="Description"
                autoSize={{ minRows: 3, maxRows: 5 }}
                size="large"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                Отправить
              </Button>
            </Form.Item>
          </Form>
        </Card>

        <Card
          title={
            <Title level={4} className="m-0 text-gray-700">
              Отправленные данные:
            </Title>
          }
          className="shadow-xl rounded-xl"
        >
          {submittedData ? (
            <Space direction="vertical" size="middle" className="w-full">
              <div className="flex flex-col">
                <Text strong className="text-lg">
                  Имя:
                </Text>
                <Text className="text-base break-words">
                  {submittedData.name}
                </Text>
              </div>
              <div className="flex flex-col">
                <Text strong className="text-lg">
                  Описание:
                </Text>
                <Text className="text-base whitespace-pre-wrap break-words">
                  {submittedData.description}
                </Text>
              </div>
            </Space>
          ) : (
            <Text type="secondary" className="text-base">
              Здесь будут отображаться данные после отправки формы.
            </Text>
          )}
        </Card>
      </div>
    </div>
  )
}

export default App
