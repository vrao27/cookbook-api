import { Recipe } from "./Recipe";
import { useParams } from "react-router-dom";

export const Recipes = ({ data }) => {
  const { id } = useParams();

  //   console.log(" recipe", data);
  console.log(data[id]);
  if (!data[id]) {
    return "Loading...";
  }
  return (
    <>
      <div>
        <Recipe item={data[id]} />
      </div>
    </>
  );
};
