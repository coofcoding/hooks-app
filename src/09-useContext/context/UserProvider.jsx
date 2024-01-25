import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'Kevin',
//     email: 'kevin@gmail.com'
// }


export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();

    return (
        // This atribute value, is the element that all of my children will can access, and for last, this component is required set in my Father Component
        // <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
