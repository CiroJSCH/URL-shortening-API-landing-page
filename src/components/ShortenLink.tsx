import { useState } from "react";

// Types
import { ShortenLinks } from "./Shorten"

type Props = ShortenLinks

const ShortenLink = ({originalLink, shortenLink}: Props) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortenLink)
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  }

  return (
    <li className='flex flex-col xl:flex-row xl:items-center xl:justify-between bg-white rounded-md'>
      <span className='px-5 pt-5 xl:pt-0 break-words'>{originalLink}</span>
      <div className='w-full xl:hidden h-[2px] bg-gray-500 mt-3' />
      <div className='flex flex-col xl:flex-row w-full xl:w-auto xl:items-center px-5 pt-3 pb-5 xl:py-4 xl:gap-5'>
        <span className='mb-3 xl:mb-0 text-primary-cyan'>
          {shortenLink}
        </span>
        <button className={`${isCopied ? "bg-primary-violet" : "bg-primary-cyan"} z-[100] text-white font-bold px-[2.5rem] py-2 rounded-md cursor-pointer ${isCopied ? "hover:bg-[#463054]" : "hover:bg-[#80DFDF]"} transition-colors duration-300 min-w-[145px]`} onClick={copyToClipboard}>
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </li>
  );
};

export default ShortenLink;
