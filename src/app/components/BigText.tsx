

export default function BigText({ title, style }: any) {
    return (
        <div className={`flex text-[56px] font-bold lead-[56px] text_bg ${style}`}>
            {title}
        </div>
    )
}