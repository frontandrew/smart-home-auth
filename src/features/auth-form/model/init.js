import { guard } from 'effector'

import { authForm, authFx } from './model'

const { submit, $isValid , $values } = authForm

guard({
  source: $values,
  clock: submit,
  filter: $isValid,
  target: authFx.prepend((values) => ({ ...values }))
})

