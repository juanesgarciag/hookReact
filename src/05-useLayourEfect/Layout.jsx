import { useCounter, useFetch } from "../hooks"
import { Character, LoadingCharacter } from "../03-examples"

export const Layout = () => {
  const { counter, increment } = useCounter(1)

  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  )
  const { name, status } = !!data && data

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {isLoading ? (
        <LoadingCharacter />
      ) : (
        <Character name={name} status={status} />
      )}

      <button
        className='btn btn-primary'
        disabled={isLoading}
        onClick={() => increment()}
      >
        Nuevo Personaje
      </button>
    </>
  )
}
