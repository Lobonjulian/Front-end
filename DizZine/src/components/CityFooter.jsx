const CityFooter = ({ dept, population }) => {
  return (
    <div className="city__footer">
      <p>{dept}</p>
      <p>{population}</p>
    </div>
  );
};

export default CityFooter;
