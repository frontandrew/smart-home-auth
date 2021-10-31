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
