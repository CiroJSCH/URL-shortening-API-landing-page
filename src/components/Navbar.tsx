// React
import { useState } from 'react';

// Components
import Button from './shared/Button';

// Images
import Logo from '@/assets/images/logo.svg';

// Icons
import { TfiMenu } from 'react-icons/tfi';

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleChange = () => setIsOpenMenu((prev) => !prev);

  return (
    <nav>
      <div className='relative'>
        <div className='flex items-center justify-between'>
          <img src={Logo} alt='Shortly Logo' className='invert-[80%]' />
          <TfiMenu
            className='text-gray-600 text-[30px] cursor-pointer'
            onClick={handleChange}
          />
        </div>
        <div
          className={`absolute bg-primary-violet px-8 w-full z-[1000] rounded-lg flex-col items-center mt-6 ${
            isOpenMenu ? 'flex' : 'hidden'
          }`}
        >
          <ul className='w-full text-white text-center text-[18px] flex flex-col gap-6 border-b-[1px] border-b-gray-600 pb-7 pt-10'>
            <li className='hover:text-primary-cyan'>Features</li>
            <li className='hover:text-primary-cyan'>Pricing</li>
            <li className='hover:text-primary-cyan'>Resources</li>
          </ul>
          <div className='text-center text-white pt-7 w-full pb-10'>
            <p className='font-bold text-[18px] mb-5 hover:text-primary-cyan'>Login</p>
            <Button label='Sign Up' full={true} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
