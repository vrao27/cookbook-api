import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function RecipesData () {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000").then(({ data }) => {
      console.log(" ", data);
      setData(data);
    });
  }, []);

  if (!data) return "Loading...";
  return <div className="RecipeData">{data.title["en-US"]}</div>;
}

export default RecipesData;
