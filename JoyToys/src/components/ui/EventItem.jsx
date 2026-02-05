const EventItem = ({ date, title, description }) => {
  return (
    <div className="text-center p-4">
      <p className="text-text-200">{date}</p>
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-text-200">{description}</p>
    </div>
  );
};

export default EventItem;
