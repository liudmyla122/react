import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'

import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#fff',
    },
  },
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
    },
    text: {
      primary: '#fff',
    },
  },
})

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#2196f3' : '#90caf9',
  color: theme.palette.mode === 'light' ? '#fff' : '#000',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'light' ? '#1976d2' : '#64b5f6',
  },
  padding: '10px 20px',
  fontSize: '16px',
  textTransform: 'none',
}))

function App() {
  const [mode, setMode] = useState('light')

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  const currentTheme = mode === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',

          backgroundColor: currentTheme.palette.background.default,
          transition: 'background-color 0.3s',
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          style={{
            marginBottom: '30px',

            color: currentTheme.palette.text.primary,
          }}
        >
          {mode === 'light' ? 'Light Mode' : 'Dark Mode'}
        </Typography>

        <StyledButton onClick={toggleTheme} variant="contained">
          Toggle Theme
        </StyledButton>
      </div>
    </ThemeProvider>
  )
}

export default App
