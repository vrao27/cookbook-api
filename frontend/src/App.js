import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ScrollToTop from "react-scroll-to-top";
import { Nav } from "./Components/Nav";
import "./Group4/Group.css";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:8000").then(({ data }) => {
      // console.log("data ", data);
      const recipesData = data.recipes;
      const imageData = data.recipesImage.slice(0, 6);
      const combinedArray = recipesData.map((recipe, index) => ({
        ...recipe.fields,
        ...imageData[index].fields,
      }));
      console.log("combined ", combinedArray);
      setData(combinedArray);
    });
  }, []);

  // console.log(" ", data);

  if (!data) return <h2>Loading...</h2>;
  return (
    <>
      <Nav data={data} />
      <ScrollToTop smooth />
    </>
  );
}

export default App;
