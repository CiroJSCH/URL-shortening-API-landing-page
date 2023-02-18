import { IStatistics } from "@/constants/statistics";

type Props = IStatistics

const StatisticCard = ({name, description, image}: Props) => {
  return (
    <div className='bg-white relative px-7 pb-5 pt-16 rounded-lg z-[100]'>
      <div className='absolute -top-[48px] left-[calc(50%-48px)] grid place-content-center bg-primary-violet rounded-full p-6 min-w-[96px] min-h-[96px]'>
        <img src={image} alt={`${name} image`} />
      </div>
      <div className='text-center mb-3 mt-4'>
        <h4 className='text-gray-700 text-[24px] font-bold mb-3'>
          {name}
        </h4>
        <p className='text-gray-600'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default StatisticCard