import { useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {
  const [formSate, setFormSate] = useState({
    username: "juanes",
    email: "juanesgarciag@gmail.com",
  })

  const { username, email } = formSate

  const onInputChange = ({ target }) => { //Target detructurado del event
    const { name, value } = target //name y value detructurados del target
    setFormSate({
      ...formSate,
      [name]: value,
    })
  }

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />
      <input
        type='email'
        className='form-control mt-2'
        placeholder='email@correo.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />
      {
        (username === 'juanes2') && <Message />
      }
    </>
  )
}
