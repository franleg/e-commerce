import { useState } from 'react'

export const useCounter = (inicial, stock) => {

    const [counter, setCounter] = useState(inicial)

    const reset = () => {
        setCounter(inicial)
    }

    const increment = () => {
        counter < stock && setCounter(prev => prev + 1)
    }
    const decrement = () => {
        counter > inicial && setCounter(prev => prev - 1)

    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}
