import Link from "next/link"
import { manrope } from "./nextFont"
import Image from "next/image"
import { CustomButton } from "./index"


export default function Header() {
    return (
        <div className="flex w-full py-2.5 px-28 justify-between items-center">
            <Link href="/">

                <Image
                    src='/WNE3Live.svg'
                    width={168}
                    height={24}
                    alt="wne logo"
                />

            </Link>
            <div className="flex items-center gap-6">
                <CustomButton
                    title="Early access"
                    customStyle="bg-black_2f"
                />


                <Image
                    src='/9block.svg'
                    width={16}
                    height={16}
                    alt="9 block"
                />
            </div>
        </div>
    )
}