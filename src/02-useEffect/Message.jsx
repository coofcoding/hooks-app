import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {

        const onMouseMove = ({ x, y }) => {
            const coords = { x, y };
            console.log(coords)
        }

        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])


    return (
        <>
            <h1>Email already exist in the BD</h1>
        </>
    )
}
