import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const { user, setUser } = useContext( UserContext );
  
  return (
    <>
      <h2>LoginPage</h2>

      <pre
        aria-label="pre"
      >
        {
          JSON.stringify(user, null, 3)
        }
      </pre>

      
      <button
        className="main-btn"
        aria-label="setbtn"
        onClick={ () => setUser({ id: 123, name: 'Kevin', email: 'kevin@gmail.com' }) }
      >
        Establecer usuario
      </button>
    </>
  )
}
