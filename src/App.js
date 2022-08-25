import React, { useEffect, useState } from "react";
import './App.css';
import api from "./services/api";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/users/jwellington58")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className="App">
        <p>Usuário: {user?.login}</p>
        <p>Biografia: {user?.bio}</p>
    </div>
  );
}

export default App;
