import { IStatistics } from '@/constants/statistics';

type Props = IStatistics & { margin: string };

const StatisticCard = ({ name, description, image, margin }: Props) => {
  return (
    <div className={`${margin}`}>
      <div
        className={`bg-white relative px-5 xl:px-8 pb-5 xl:pb-0 pt-16 xl:pt-20 rounded-lg z-[100] xl:min-w-[380px] min-h-[280px] xl:min-h-[280px]`}
      >
        <div className='absolute -top-[48px] left-[calc(50%-48px)] xl:left-[10%] grid place-content-center bg-primary-violet rounded-full p-6 min-w-[96px] min-h-[96px]'>
          <img src={image} alt={`${name} image`} />
        </div>
        <div className='text-center xl:text-left mb-3 mt-4 xl:m-0'>
          <h4 className='text-gray-700 text-[24px] font-bold mb-3'>{name}</h4>
          <p className='text-gray-600 leading-[27px] max-w-[306px]'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticCard;
