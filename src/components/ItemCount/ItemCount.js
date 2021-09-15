import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
       const funcionRestar = () => {
           if (count <= 0) {
               console.log('no hago nada')
           } else {
               setCount(count - 1)     
           }
       }

    return (
        <div>
            <h1 style={{ color: '#B36A5E'}}>{count}</h1>
            <button onClick={funcionRestar}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Counter