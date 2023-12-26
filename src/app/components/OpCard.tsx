import Image from "next/image"

export default function OpCard({ head, body }: any) {
    return (
        <div className="flex flex-col w-96 p-6 items-start gap-6 shrink-0 
        text-gray_76 hover:bg-black_11 hover:rounded-4xl ">
            <div className="flex flex-col gap-3 self-stretch">
                <Image
                    src='/atom.svg'
                    width={24}
                    height={24}
                    alt="atom"
                />
                <span className="text-2xl font-semibold leading-7">
                    {head}
                </span>

            </div>
            <span className="flex self-stretch  text-lg font-normal leading-7 tracking-wide  ">
                {body}
            </span>

        </div>
    )
}