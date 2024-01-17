import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();

    // console.log(increment)

    return (
        <>
            <h1>Counter with Hook: { counter }</h1>
            <hr/>

            <button onClick={ () => increment(50) }>+50</button>
            <button onClick={ reset }>Reset</button>
            <button onClick={ () => decrement(2) }>-2</button>
        </>
    )
}