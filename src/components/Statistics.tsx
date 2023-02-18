// Components
import StatisticCard from './StatisticCard';

// Constants
import { statistics } from '@/constants/statistics';

const Statistics = () => {
  return (
    <section className='bg-gray-500 px-4 pb-16'>
      <div className='text-center mb-3'>
        <h3 className='text-gray-700 text-[26px] font-bold mb-3'>
          Advanced Statistics
        </h3>
        <p className='text-gray-600'>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <section className='relative mt-20'>
        <div className='flex flex-col gap-24'>
          {statistics.map((statistic, index) => (
            <StatisticCard {...statistic} key={`statistic-${index}`} />
          ))}
        </div>

        <div className='absolute top-0 left-[calc(50%-5px)] z-10 bg-primary-cyan w-[10px] h-[100%]' />
      </section>
    </section>
  );
};

export default Statistics;
