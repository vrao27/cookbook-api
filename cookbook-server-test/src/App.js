import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/MyRecipes").then(({ data }) => {
      console.log(" ", data);
      setData(data);
    });
  }, []);

  if (!data) return "Loading...";
  return <div className="App">{data.title["en-US"]}</div>;
}

export default App;
