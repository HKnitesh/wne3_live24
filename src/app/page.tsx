import Image from 'next/image'
import { manrope } from "./components/nextFont"
import { CustomButton } from './components'

export default function Home() {
  return (
    <main className={`flex flex-col items-center justify-between ${manrope.className}`}>
      <div className="inline-flex flex-col justify-center items-center py-64 pt-32 pb-40 gap-14">

        <div className='flex flex-col text-center text-[56px] font-semibold lead-[56px]'>
          <span className='text_bg'>Reimaging shopping experience</span>
          <span className='mt-[-26px] text_bg'>indistinguishable from magic</span>
        </div>

        <div className="flex w-[695px] text-center text-2xl font-normal leading-9 text-gray_a6">
          We are creating a new shopping experience where you could finally shop from your imagination
        </div>

        <CustomButton
          title="Get early access"
          customStyle="bg-white text-black"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
          
          <div className=' w-96 h-[500px] shrink-0 rounded-[32px] border border-solid border-[#dfdfdf00]'>

          </div>
      </div>
    </main>
  )
}
