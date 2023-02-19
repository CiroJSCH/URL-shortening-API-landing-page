// Components
import Button from './shared/Button';

// Images
import illustration from '@/assets/images/illustration-working.svg';

const Hero = () => {
  return (
    <section className='pb-[120px] overflow-x-hidden xl:mt-16'>
      <div className='max-w-[1440px] m-auto xl:w-[80%] flex flex-col xl:flex-row-reverse items-center xl:justify-between'>
        <div className='w-[130%] xl:w-[70%] xl:pl-0 mr-[-10rem] xl:mr-[-20rem] flex justify-center'>
          <img src={illustration} alt='working illustration' className='xl:w-full'/>
        </div>
        <div className='mt-7 flex flex-col text-center xl:text-start items-center xl:items-start px-4 xl:px-0 xl:w-[60%]'>
          <h1 className='text-gray-700 text-[36px] xl:text-[72px] font-bold xl:leading-[80px] max-w-[683px]'>
            More than just shorter links
          </h1>
          <p className='text-gray-600 text-[18px] mt-4 xl:mt-0 mb-6 xl:mb-8 max-w-[492px] xl:leading-[34px]'>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button label='Get Started' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
