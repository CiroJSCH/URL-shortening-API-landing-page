type Props = {
  label: string;
  full?: boolean;
};

const Button = ({ label, full }: Props) => {
  return (
    <button className={`text-white text-[18px] font-bold bg-primary-cyan px-10 py-3 rounded-full cursor-pointer hover:bg-[#80DFDF] transition-colors duration-300 ${full ? "w-full" : ""}`}>
      {label}
    </button>
  );
};

export default Button;
