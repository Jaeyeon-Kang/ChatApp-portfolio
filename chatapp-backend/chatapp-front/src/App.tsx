import { useState, useEffect } from "react";
import "./App.css";
import isDev from "is-dev";

function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    // const apiURL = "https://dead-tiphany-bellakang-d01b3a09.koyeb.app/message"; // 배포된 Express 서버

    const apiURL = isDev
      ? "http://localhost:4000/message" // 로컬 Express 서버
      : "https://dead-tiphany-bellakang-d01b3a09.oyeb.app/message"; // 배포된 Express 서버

    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <>
      <div className="server-message">
        <h2>Server Message:</h2>
        <p>{message}</p>
      </div>
    </>
  );
}

export default App;
