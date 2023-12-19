import { manrope } from "./nextFont"

export default function CustomButton({ title, customStyle }: any) {
    return (
        <>
            <button
                className={`flex py-3 px-6 ${customStyle} rounded-[99px] text-lg
                 leading-5 tracking-wider ${manrope.className} font-bold `}
            >
                {title}
            </button>
        </>
    )
}