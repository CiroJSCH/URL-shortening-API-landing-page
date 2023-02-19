const Shorten = () => {
  return (
    <section className='bg-gray-500 w-full px-6 pb-8'>
      <div className="relative min-h-[160px] w-[80%] max-w-[1440px] m-auto">
        <div className='bg-primary-violet bg-shorten-mobile xl:bg-shorten-desktop flex flex-col xl:flex-row items-center justify-center p-6 xl:p-10 gap-4 xl:gap-6 rounded-lg bg-cover bg-no-repeat bg-center absolute top-[-50%] xl:top-[-64px] w-full'>
          <input
            className='px-4 py-3 w-full xl:w-[80%] rounded-md text-gray-700'
            type='text'
            name='shorten'
            placeholder='Shorten a link here...'
          />
          <button className='px-10 py-3 bg-primary-cyan w-full xl:w-[20%] rounded-md text-white font-bold cursor-pointer hover:bg-[#80DFDF] transition-colors duration-300'>
            Shorten It!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Shorten;
