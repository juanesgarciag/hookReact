import { useEffect, useState } from "react"

export const Message = () => {

    const [coordinate, setCoordinate] = useState({x: 0, y: 0})

    useEffect(() => {
      
        const onMoveMouse = ({x, y}) => {
            setCoordinate ({x,y})
        }

        window.addEventListener( 'mousemove', onMoveMouse)
    
      return () => {
        window.removeEventListener( 'mousemove', onMoveMouse)
      }
    }, [])
    

  return (
    <>
        <h3>Usuario ya existe</h3>
        {JSON.stringify(coordinate)}
    </>
  )
}
