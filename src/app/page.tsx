import Image from 'next/image'
import { manrope, spaceMono, spaceGro } from "./components/nextFont"
import { CustomButton } from './components'

export default function Home() {
  return (
    <main className={`flex flex-col items-center justify-between ${manrope.className}`}>


      {/* introduction part */}
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

      {/* main logo part */}
      <div className="flex flex-col justify-center items-center mb-28">

        <div className='flex w-96 h-[500px] shrink-0 main-logo_bg border-t border-l border-solid border-black_223'>
          <div className="flex bg-main-logo w-full h-full bg-no-repeat bg-center">

          </div>

        </div>


        <div className="flex flex-row w-[500px] z-20 mt-[-5.75rem] py-3 px-4 justify-between
        items-center rounded-[132px] border-[1.35px] border-solid border-gray_c2 bg-white">

          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 33 33" fill="none">
            <path d="M15.5183 25.788C21.3808 25.788 26.1332 21.0355 26.1332 15.1731C26.1332 9.31058 21.3808 4.55811 15.5183 4.55811C9.6558 4.55811 4.90332 9.31058 4.90332 15.1731C4.90332 21.0355 9.6558 25.788 15.5183 25.788Z" stroke="black" stroke-width="2.65374" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M28.7875 28.4423L23.0156 22.6704" stroke="black" stroke-width="2.65374" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <span className={` text-black ${spaceMono.className} text-base leading-6`}>
            alien zen buddha on a hoodie
          </span>

          <button
            className={`flex py-3.5 px-5  rounded-[65px]  text-xs bg-black_0d text-white
                 leading-5 tracking-[0.03em] generate ${spaceGro.className} font-medium `}
          >
            Generate
          </button>

        </div>

        <div className='flex flex-col gap-14 mt-20 text-center text-[56px] font-bold lead-[56px]'>
          <div className='flex flex-col gap-1'>

            <span className='text_bg'>From an idea to reality,</span>
            <span className='mt-[-26px] text_bg'>be a part of the change</span>
          </div>

          <div className="flex flex-row  justify-center gap-8">

            <CustomButton
              title="Get early access"
              customStyle="bg-white text-black"
            />

            <CustomButton
              title="Test it out"
              customStyle="bg-black_2f text-white"
            />

          </div>
        </div>


      </div>

      {/* whats set us apart */}
      <div className="flex flex-col mb-20 gap-12 flex-shrink-0 items-center w-full py-16 px-28">

        <div className='flex flex-col text-center gap-14'>
          <span className='text_bg text-[56px] font-bold lead-[56px]'>
            What sets us apart
          </span>
          <span className='w-[695px] text-gray_9c text-xl font-normal leading-7'>
            From now on, you don’t have to wait for any product to come to the stores. If you know what you want, you start shopping
          </span>
        </div>

        <div className="flex h-[592px]  justify-center items-start flex-shrink-0 self-stretch gap-8">

          <div className="flex flex-[1_0_0%] py-16 px-8 flex-col justify-start items-center 
          self-stretch bg-black_11 rounded-4xl border-t border-l border-solid border-black_223">

            <div className="flex flex-col gap-8 items-start self-stretch text-white">
              <span className='text-3xl font-semibold leading-10'>
                Expanding your universe of choice
              </span>

              <span className='text-sm font-normal leading-5 tracking-wide'>
                We make sure that you get your dream design. We are in the business of turning your imagination into products of your choice, for you.
              </span>
            </div>

          </div>

          <div className="flex flex-col w-1/2 gap-8 h-full justify-between">

            <div className="flex py-16 px-8 h-full flex-col justify-start items-center 
          self-stretch bg-black_11 rounded-4xl border-t border-l border-solid border-black_223">

              <div className="flex flex-col gap-8 items-start self-stretch text-white">
                <span className='text-3xl font-semibold leading-10'>
                  Making sure that its the right fit
                </span>

                <span className='text-sm font-normal leading-5 tracking-wide'>
                  We help you bridge your imagination into reality with physical products.
                </span>
              </div>
            </div>

            <div className="flex py-16 px-8 h-full flex-col justify-start items-center 
          self-stretch bg-black_11 rounded-4xl border-t border-l border-solid border-black_223">

              <div className="flex flex-col gap-8 items-start self-stretch text-white">
                <span className='text-3xl font-semibold leading-10'>
                  Automated personalization
                </span>

                <span className='text-sm font-normal leading-5 tracking-wide'>
                  Our extension will help you personalise your resume to the job you apply to, Now isn't that life made easy.
                </span>
              </div>
            </div>

          </div>



        </div>

      </div>



    </main>
  )
}
