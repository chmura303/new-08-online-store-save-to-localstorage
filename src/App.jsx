import { useState } from "react";
import StoreFront from './StoreFront';

export default function App() {
  const [isLogged, setIsLogged] = useState(false);

  return isLogged
    ? <>
      <StoreFront />
      <button onClick={() => setIsLogged(false)}>Logout</button>
    </>
    : <>
      <h2>Please Log In</h2>
      <button onClick={() => setIsLogged(true)}>Login</button>
    </>
}