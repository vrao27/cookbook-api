const Group4Slide = (props) => {
  const { slideBg, slideTitle, slideDescription } = props;
  // const clickHandler = () => {};

  return (
    <div className="slideWrap" style={{ backgroundImage: `url(${slideBg})` }}>
      <div className="textWrap">
        <h2>{slideTitle}</h2>
        <p>{slideDescription}</p>
        <button className="check-recipe-button">Check Recipe Details</button>
      </div>
    </div>
  );
};

export default Group4Slide;
