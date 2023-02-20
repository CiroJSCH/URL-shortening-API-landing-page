// Libraries
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

// Components
import ShortenLink from './ShortenLink';

type FormData = {
  urlToShorten: string;
};

export type ShortenLinks = {
  originalLink: string;
  shortenLink: string;
};

const Shorten = () => {
  const savedLinks = localStorage.getItem('savedLinks');
  const [shortenLinks, setShortenLinks] = useState<ShortenLinks[]>(
    typeof savedLinks === 'string' ? JSON.parse(savedLinks) : []
  );

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    const savedLinks = localStorage.getItem('savedLinks');
    if (savedLinks !== null) {
      setShortenLinks(JSON.parse(savedLinks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedLinks', JSON.stringify(shortenLinks));
  }, [shortenLinks]);

  const onSubmit = handleSubmit(({ urlToShorten }) => {
    if (urlToShorten.trim() !== '') {
      axios
        .get(`https://api.shrtco.de/v2/shorten?url=${urlToShorten}`)
        .then((res) => {
          const newLink = {
            originalLink: urlToShorten,
            shortenLink: res.data.result.full_short_link,
          };

          setShortenLinks([...shortenLinks, newLink]);

          setValue('urlToShorten', '');
        })
        .catch((err) => {
          setError('urlToShorten', {
            type: 'server',
            message: 'Enter a valid URL',
          });
        });
    } else {
      clearErrors('urlToShorten');
      setError('urlToShorten', {
        types: {
          required: 'Please add a link',
        },
      });
    }
  });

  return (
    <section className='bg-gray-500 w-full px-6 pb-8'>
      <div className='relative min-h-[160px] xl:w-[80%] max-w-[650px] xl:max-w-[1440px] m-auto'>
        <form
          onSubmit={onSubmit}
          className='bg-primary-violet bg-shorten-mobile xl:bg-shorten-desktop flex flex-col xl:flex-row items-center justify-center p-6 xl:p-10 gap-7 xl:gap-6 rounded-lg bg-cover bg-no-repeat bg-center absolute top-[-50%] xl:top-[-64px] w-full'
        >
          <div className='flex flex-col w-full xl:w-[80%] relative'>
            <input
              className={`px-4 py-3 rounded-md text-gray-700 outline-none ${
                errors.urlToShorten ? 'border-2 border-red-400' : ''
              }`}
              type='text'
              placeholder='Shorten a link here...'
              {...register('urlToShorten')}
            />
            {errors.urlToShorten?.types && (
              <span className='text-red-400 absolute bottom-[-1.65rem] text-[14px]'>
                {errors.urlToShorten?.types.required}
              </span>
            )}
            {errors.urlToShorten && (
              <span className='text-red-400 absolute bottom-[-1.65rem] text-[14px]'>
                {errors.urlToShorten.message}
              </span>
            )}
          </div>
          <button
            type='submit'
            className='px-10 py-3 bg-primary-cyan w-full xl:w-[20%] rounded-md text-white font-bold cursor-pointer hover:bg-[#80DFDF] transition-colors duration-300'
          >
            Shorten It!
          </button>
        </form>
      </div>
      <ul className='w-full mt-[-3rem] xl:mt-[-4rem] xl:w-[80%] max-w-[650px] xl:max-w-[1440px] m-auto flex flex-col gap-5'>
        {shortenLinks.map((link, index) => (
          <ShortenLink {...link} key={`link-${index}`} />
        ))}
      </ul>
    </section>
  );
};

export default Shorten;
