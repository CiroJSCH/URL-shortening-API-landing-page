type Props = {
  label: string;
};

const Button = ({ label }: Props) => {
  return (
    <button className='text-white text-[18px] font-bold bg-primary-cyan px-10 py-3 rounded-full cursor-pointer hover:bg-[#80DFDF] transition-colors duration-300'>
      {label}
    </button>
  );
};

export default Button;
