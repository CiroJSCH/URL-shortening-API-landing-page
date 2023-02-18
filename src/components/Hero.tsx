// Components
import Button from './shared/Button';

// Images
import illustration from '@/assets/images/illustration-working.svg';

const Hero = () => {
  return (
    <section className='pb-[150px] overflow-x-hidden'>
      <div className='w-[140%] pl-5'>
        <img src={illustration} alt='working illustration' />
      </div>
      <div className='mt-7 flex flex-col text-center items-center px-4'>
        <h1 className='text-gray-700 text-[36px] font-bold'>
          More than just shorter links
        </h1>
        <p className='text-gray-600 text-[18px] mt-4 mb-6'>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button label='Get Started' />
      </div>
    </section>
  );
};

export default Hero;
