import Image from "next/image"
import Link from "next/link"
import { manrope } from "./nextFont"
import { CustomLink } from "./index"

export default function Footer() {
    return (
        <div className={`flex pt-8 mx-24 pb-14 justify-between items-start border-t border-solid border-gray_63 ${manrope.className}`}>
            {/* company information */}
            <div className="flex flex-row gap-28 items-start">

                {/* explore */}
                <div className="flex flex-col items-start gap-4">
                    <span className="uppercase text-white font-semibold text-sm tracking-wider leading-6">
                        explore
                    </span>

                    <div className="flex flex-col gap-3 text-gray_71">
                        <CustomLink link="" title="Solutions"/>
                        <CustomLink link="" title="Case studies"/>
                        <CustomLink link="" title="Documentations"/>
                        <CustomLink link="" title="Blogs"/>
                    </div>
                </div>

                {/* ABOUT */}
                <div className="flex flex-col items-start gap-4">
                    <span className="uppercase text-white font-semibold text-sm tracking-wider leading-6">
                        ABOUT
                    </span>

                    <div className="flex flex-col gap-3 text-gray_71">
                        <CustomLink link="" title="About WNE3"/>
                        <CustomLink link="" title="Careers"/>
                        <CustomLink link="" title="Contact us"/>
                        
                    </div>
                </div>

                {/* POLICIES */}
                <div className="flex flex-col items-start gap-4">
                    <span className="uppercase text-white font-semibold text-sm tracking-wider leading-6">
                        POLICIES
                    </span>

                    <div className="flex flex-col gap-3 text-gray_71">
                        <CustomLink link="" title="FAQ"/>
                        <CustomLink link="" title="Privacy Policy"/>
                        <CustomLink link="" title="Terms of Service"/>
                        <CustomLink link="" title="Cookie Policy"/>
                    </div>
                </div>
            </div>


            {/* company details */}
            <div className="flex flex-col items-end gap-8 text-gray_71">

                <Link href="/">
                    <Image
                        src='/WNE3Live.svg'
                        width={168}
                        height={24}
                        alt="wne logo"
                    />

                </Link>

                <span className="text-xs font-normal leading-10 ">
                    support@wne3.com
                </span>

                <div className="flex items-start gap-3.5">
                    <Link href="/">
                        <Image
                            src='/facebook.svg'
                            width={32}
                            height={32}
                            alt="facebook"
                        />

                    </Link>

                    <Link href="/">
                        <Image
                            src='/x_twitter.svg'
                            width={32}
                            height={32}
                            alt="x_twitter"
                        />

                    </Link>

                    <Link href="/">
                        <Image
                            src='/LinkedIn.png'
                            width={32}
                            height={32}
                            alt="linkedin"
                        />

                    </Link>
                </div>

                <span className="text-xs font-normal leading-4 text-right">
                    &copy; 2023 <br />
                    WNE3.All rights reserved.
                </span>
            </div>

        </div>
    )
}