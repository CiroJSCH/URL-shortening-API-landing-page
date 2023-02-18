// Components
import Button from "@/components/shared/Button";

const Cta = () => {
  return (
    <section className="bg-boost-mobile xl:bg-boost-desktop bg-primary-violet h-[300px] bg-cover bg-no-repeat flex flex-col items-center justify-center">
      <h3 className="text-white text-[27px] xl:text-[38px] font-bold mb-4 xl:mb-6">Boost your links today</h3>
      <Button label="Get Started"/>
    </section>
  )
}

export default Cta