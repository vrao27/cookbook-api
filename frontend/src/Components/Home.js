import Group4Slide from "../Group4/Group4Slide";

export const Home = ({ data }) => {
  // console.log(" home ", data);

  if (!data) return "Loading.....";

  return (
    <>
      <div>
        {data.map((item, index) => {
          // const id = item.id["en-US"];
          const slideTitle = item.title["en-US"];
          const slideDescription = item.description["en-US"];
          const slideBg = item.file["en-US"].url;

          return (
            <div key={index}>
              <Group4Slide
                slideTitle={slideTitle}
                slideBg={slideBg}
                slideDescription={slideDescription}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
