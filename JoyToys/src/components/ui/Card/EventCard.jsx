const EventCard = ({ date, title, description }) => {
  return (
    <article className="pt-6 border-t border-text-200">
      <div className="flex flex-col text-center gap-2">
        <span className="text-sm text-text-200">{date}</span>

        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-text-200 leading-relaxed">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
