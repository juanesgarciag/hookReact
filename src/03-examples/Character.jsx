import { useLayoutEffect, useRef, useState } from "react"

export const Character = ({ name, status }) => {
  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({width:0, height:0})

  useLayoutEffect(() => {
    const {width, height} = pRef.current.getBoundingClientRect()
    setBoxSize({height, width})
  }, [name])

  return (
    <>
    <blockquote className='blockquote text-end' style={{ display: "flex" }}>
      <p ref={pRef} className='mb-1'>
        Personaje: {name}
      </p>
      <footer className='blockquote-footer'>Status: {status}</footer>
    </blockquote>
    <code>{JSON.stringify(boxSize)}</code>
    
    </>
  )
}
