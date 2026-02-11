const NavItem = ({ label, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative h-60 w-4 
      overflow-hidden
        transition-all
        duration-300
        hover:w-28
        flex
        items-center
        justify-center"
      style={{ backgroundColor: color }}
    >
      <span
        className="
          absolute
          opacity-0
          transition-opacity
          duration-200
          hover:opacity-100
          text-bg-100
          text-sm
          whitespace-nowrap
        "
      >
        {label}
      </span>
    </button>
  );
};

export default NavItem;
