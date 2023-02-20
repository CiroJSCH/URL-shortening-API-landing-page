// Components
import StatisticCard from './StatisticCard';

// Constants
import { statistics } from '@/constants/statistics';

const cardMargins = [
  "xl:pt-[2.5rem]",
  "xl:pt-[5.2rem]",
  "xl:pt-[8rem]",
]

const Statistics = () => {
  return (
    <section className='bg-gray-500 px-6 pb-20 xl:pb-24 pt-20'>
      <div className='max-w-[1440px] m-auto xl:w-[80%] flex flex-col justify-center items-center'>
        <div className='text-center flex flex-col items-center'>
          <h3 className='text-gray-700 text-[26px] xl:text-[36px] font-bold mb-3'>
            Advanced Statistics
          </h3>
          <p className='text-gray-600 max-w-[480px] leading-[27px]'>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <section className='relative mt-24 max-w-[350px] xl:max-w-none xl:w-full'>
          <div className='flex flex-col xl:flex-row xl:justify-between gap-24 xl:gap-10'>
            {statistics.map((statistic, index) => (
              <StatisticCard {...statistic} margin={cardMargins[index]} key={`statistic-${index}`} />
            ))}
          </div>

          <div className='absolute top-0 left-[calc(50%-5px)] xl:left-0 xl:top-[calc(50%-5px)] z-10 bg-primary-cyan w-[10px] xl:w-full h-[100%] xl:h-[10px]' />
        </section>
      </div>
    </section>
  );
};

export default Statistics;
