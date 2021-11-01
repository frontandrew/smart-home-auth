import { createEffect } from 'effector';
import { createForm } from 'effector-forms';

export const authForm = createForm({
  fields: {
    login: {
      init: '',
      rules: [
        {
          name: 'required',
          validator: (value) => ({
            isValid: Boolean(value),
            errorText: 'Введите логин',
          }),
        },
      ],
      validateOn: ['blur'],
    },
    password: {
      init: '',
      rules: [
        {
          name: 'required',
          validator: (value) => ({
            isValid: Boolean(value),
            errorText: 'Введите введите пароль',
          }),
        },
      ],
      validateOn: ['blur'],
    },
  },
  validateOn: ['submit'],
});

export const authFx = createEffect(async (payload) => {
  console.log('>>>>>>>>>>>>>>>>>>>>>>>')
  console.log('auth payload: ', payload)
  const url = new URL(document.location)
  url.pathname = '/login'
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(payload),
    })

    console.log('auth response: ', response)
    console.log('<<<<<<<<<<<<<<<<<<<<<<<')
    return response
  } catch (error) {
    return error
  }
})

// watch
authFx.fail.watch(x => console.log('auth fx: ', x))