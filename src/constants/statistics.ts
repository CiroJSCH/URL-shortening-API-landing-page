// Images
import brandRecognition from "@/assets/images/icon-brand-recognition.svg"
import detailedRecords from "@/assets/images/icon-detailed-records.svg"
import fullyCustomizable from "@/assets/images/icon-fully-customizable.svg"

export interface IStatistics {
  name: string,
  description:  string,
  image: string,
}

export const statistics: Array<IStatistics> = [
  {
    name: "Brand Recognition",
    description: "Boost your brand recognition with each click. Generic links dont't mean a thing. Branded links help instil confidence in your content.",
    image: brandRecognition,
  },
  {
    name: "Detailed Records",
    description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    image: detailedRecords,
  },
  {
    name: "Fully Customizable",
    description: "Improve brand awarreness and content discoverability through customizable links, supercharging audience engagement.",
    image: fullyCustomizable,
  }
]