const Sidebar = ({ cities }) => {
  return (
    <nav className="sidebar">
      {cities.map((city) => (
        <a key={city.city} href={`#${city.city}`}>
          {city.city}
        </a>
      ))}
    </nav>
  );
};

export default Sidebar;
