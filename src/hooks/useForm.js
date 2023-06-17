import { useState } from "react"

export const useForm = (initialForm = {}) => {
  const [formSate, setFormSate] = useState(initialForm)

  const onInputChange = ({ target }) => {
    //Target detructurado del event
    const { name, value } = target //name y value detructurados del target
    setFormSate({
      ...formSate,
      [name]: value,
    })
  }

  const onResetForm = () => {
    setFormSate (initialForm)
  }

  return {
    ...formSate,
    formSate,
    onResetForm,
    onInputChange,
  }
}
