const Map = ({ lat, lng }) => {
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${
    lng - 0.01
  },${lat - 0.01},${lng + 0.01},${lat + 0.01}&layer=mapnik`;

  return (
    <iframe
      title="Mapa Joy Toys"
      src={src}
      className="w-full h-82 border-0"
      loading="lazy"
    />
  );
};

export default Map;
