export const Recipe = ({ item }) => {
  console.log("recipe", item);

  return (
    <div className="recipe-container">
      <h1>{item.title["en-US"]}</h1>
      <p>{item.description["en-US"]}</p>

      <img
        className="RecipeImg"
        src={item.file["en-US"].url}
        alt={item.title["en-US"]}
      />
      <h2>Ingredients</h2>
      <pre>{item.ingredients["en-US"]}</pre>
      <br />
      <h2>Directions</h2>
      <div>
        <pre>{item.directions["en-US"]}</pre>
      </div>
    </div>
  );
};
