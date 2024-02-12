import Footer from "./_components/Footer"
import Heading from "./_components/Heading"
import Heroes from "./_components/Heroes"


const page = () => {
  return (
    <div className="min-h-full flex flex-col ">
        <div className="flex flex-col items-center justify-center gap-y-8 flex-1 px-6 pb-10 md:justify-start text-center">
            <Heading/>
            <Heroes/>
        </div>
        <Footer/>
    </div>
  )
}

export default page