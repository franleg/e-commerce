import { useState } from 'react'

export const useCounter = (initial, stock) => {
    const [counter, setCounter] = useState(initial)

    const reset = () => {
        setCounter(initial)
    }

    const increment = () => {
        counter < stock && setCounter(prev => prev + 1)
    }

    const decrement = () => {
        counter > initial && setCounter(prev => prev - 1)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}
