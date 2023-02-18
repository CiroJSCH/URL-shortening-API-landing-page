const Shorten = () => {
  return (
    <section className='bg-gray-500 w-full px-6 relative min-h-[160px]'>
      <div className='bg-primary-violet bg-shorten-mobile xl:bg-shorten-desktop flex flex-col items-center justify-center p-6 gap-4 rounded-lg bg-cover bg-no-repeat w-[calc(100%-48px)] bg-center absolute top-[-50%]'>
        <input
          className='px-4 py-3 w-full rounded-md text-gray-700'
          type='text'
          name='shorten'
          placeholder='Shorten a link here...'
        />
        <button className='px-10 py-3 bg-primary-cyan w-full rounded-md text-white font-bold cursor-pointer hover:bg-[#80DFDF] transition-colors duration-300'>
          Shorten It!
        </button>
      </div>
    </section>
  );
};

export default Shorten;
