// Icons
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

// Images
import logo from '@/assets/images/logo.svg';

// Constants
import { features, resources, company } from '@/constants/footer';

const Footer = () => {
  const liStyle =
    'hover:text-primary-cyan cursor-pointer transition-colors duration-300';

  const iconStyle = `w-7 h-7 ${liStyle}`;

  return (
    <footer className='py-16 bg-gray-800 h-auto'>
      <section className='max-w-[1440px] m-auto w-[80%] flex flex-col xl:flex-row justify-center xl:justify-between items-center xl:items-start'>
        <span className='mb-14 xl:mb-0'>
          <img src={logo} alt='Shortly logo' />
        </span>
        <div className='flex flex-col xl:flex-row w-[60%] items-center xl:items-start xl:justify-between'>
          <div className='text-center xl:text-start mb-8 xl:mb-0'>
            <h3 className='text-white font-bold mb-4'>Features</h3>
            <ul className='text-gray-600 flex flex-col gap-2'>
              {features.map((feature, index) => (
                <li key={`feature-${index}`} className={`${liStyle}`}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className='text-center xl:text-start mb-8 xl:mb-0'>
            <h3 className='text-white font-bold mb-4'>Resources</h3>
            <ul className='text-gray-600 flex flex-col gap-2'>
              {resources.map((resource, index) => (
                <li key={`resource-${index}`} className={`${liStyle}`}>
                  {resource}
                </li>
              ))}
            </ul>
          </div>
          <div className='text-center xl:text-start mb-8 xl:mb-0'>
            <h3 className='text-white font-bold mb-4'>Company</h3>
            <ul className='text-gray-600 flex flex-col gap-2'>
              {company.map((company, index) => (
                <li key={`company-${index}`} className={`${liStyle}`}>
                  {company}
                </li>
              ))}
            </ul>
          </div>
          {/* ICONOS */}
          <div className='flex items-center text-white gap-5 mt-12 xl:mt-0'>
            <AiFillFacebook className={`${iconStyle}`} />
            <AiOutlineTwitter className={`${iconStyle}`} />
            <BsPinterest className={`${iconStyle}`} />
            <AiOutlineInstagram className={`${iconStyle}`} />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
