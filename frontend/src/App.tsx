import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/health")
      .then((response) => {
        setMessage(response.data.status);
      });
  }, []);

  return (
    <div>
      <h1>OpsFlow</h1>
      <p>Backend Status: {message}</p>
    </div>
  );
}

export default App;