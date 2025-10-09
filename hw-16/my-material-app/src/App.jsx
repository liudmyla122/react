import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from '@mui/material'

function App() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <>
      {/* Верхняя панель навигации */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#d7c7b9', // светло-бежевый
          color: '#5a4a3f', // тёмный текст
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Мое React приложение
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Основной контейнер на весь экран */}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #f5f0eb, #e2d8ca)', // бежевый градиент
          color: '#5a4a3f',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          Добро пожаловать в мое приложение!
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
          Нажмите на кнопку, чтобы открыть диалоговое окно
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleClickOpen}
          sx={{
            fontWeight: 'bold',
            backgroundColor: '#c4a484', // нюдовый
            color: '#fff',
            '&:hover': {
              backgroundColor: '#b8916d', // чуть темнее при наведении
            },
          }}
        >
          Открыть диалог
        </Button>

        {/* Диалоговое окно */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{ backgroundColor: '#f5f0eb', color: '#5a4a3f' }}>
            Диалоговое окно
          </DialogTitle>
          <DialogContent sx={{ backgroundColor: '#f5f0eb' }}>
            <DialogContentText>
              Это диалоговое окно в бежевых тонах с двумя кнопками.
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ backgroundColor: '#f5f0eb' }}>
            <Button
              onClick={handleCancel}
              sx={{
                color: '#5a4a3f',
              }}
            >
              Отмена
            </Button>
            <Button
              onClick={handleClose}
              sx={{
                backgroundColor: '#c4a484',
                color: '#fff',
                '&:hover': { backgroundColor: '#b8916d' },
              }}
            >
              Закрыть
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  )
}

export default App
