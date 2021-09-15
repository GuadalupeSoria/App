import { useState } from 'react'

const Counter = () => {
     const [count, setCount] = useState(0)
       
     const funcionRestar = () => {
           if (count <= 0) {
           } else {
               setCount(count - 1)     
           }
       }

       const funcionStock = () => {
        if (count >= 25) {
        } else {
            setCount(count + 1)     
        }
    }

    return (
        <div>
            <h1 style={{ color: '#B36A5E'}}>{count}</h1>
            <button onClick={funcionRestar}>-</button>
            <button onClick={funcionStock}>+</button>
        </div>
    )
}

export default Counter