type TActionButton = {
    onClick: () => void;
    icon?: string;
    label: string;
    variant?: "primary" | "secondary" |"neutral" ;
    type?: "button" | "submit" | "reset";
  };
  
  const ActionButton: React.FC<TActionButton> = ({
    onClick,
    icon,
    label,
    variant = "secondary",
    type = "button",
  }) => {
    const baseClasses = "rounded-[10px] px-5 py-3 font-semibold border transition duration-300 flex items-center gap-[6px] cursor-pointer";
  
    const variantClasses = {
      primary: "bg-primary-10 text-white border-primary-10",
      secondary: "bg-white text-primary-10 border-primary-10 hover:bg-primary-10/20",
      neutral: "bg-white text-neutral-10 border border-neutral-10/30 hover:bg-primary-10/20",
    };
  
    return (
      <button
        onClick={onClick}
        type={type}
        className={`${baseClasses} ${variantClasses[variant]}`}
      >
        {icon && <img src={icon} alt={`${label}-icon`} className="size-5" />}
        {label}
      </button>
    );
  };
  
  export default ActionButton;
  