import { useForm } from 'effector-forms'

import { Box, Paper, Typography, TextField, Button } from '@mui/material'

import { useStyles } from './styles'
import { authForm } from '../model'

export const AuthForm = () => {
  const { container, formWrapper, formHeader } = useStyles()
  const { fields, submit } = useForm(authForm);
  const { password, login } = fields;

  return (
    <Box className={container}>
      <Paper
        className={formWrapper}
        component="form"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <Typography className={formHeader} variant="h2">
          Авторизация
        </Typography>
        <TextField
          variant="outlined"
          label="Логин"
          error={login.hasError()}
          placeholder="Введите логин"
          value={login.value}
          onChange={({ target }) => login.onChange(target.value)}
          onBlur={login.onBlur}
          type="text"
          helperText={login.errorText()}
          fullWidth
          required
        />
        <TextField
          variant="outlined"
          label="Пароль"
          placeholder="Введите пароль"
          value={password.value}
          onChange={({ target }) => password.onChange(target.value)}
          onBlur={password.onBlur}
          type="password"
          error={password.hasError()}
          helperText={password.errorText()}
          fullWidth
          required
        />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          fullWidth
          size="large"
        >
          ВОЙТИ
        </Button>
      </Paper>
    </Box>
  )
}
