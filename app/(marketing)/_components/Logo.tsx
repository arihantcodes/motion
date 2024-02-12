import Image from "next/image"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"

const font = Poppins({
    subsets :["latin"],
    weight:["400","600"]

})
const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-1">
     <Image
     src="/logo-dark.svg"
      alt="logo"
      width={40}
      height={40}
      className="dark:hidden"
     />
     <Image
     src="/logo.svg"
      alt="logo"
      width={40}
      height={40}
      className="hidden dark:block"
     />

        <h1 className={cn("font-semibold",font.className)}>Motion</h1>
     
    </div>
  )
}

export default Logo