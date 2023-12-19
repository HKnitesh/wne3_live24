import Link from "next/link"
import { manrope } from "./nextFont"
import { CustomButton } from "./index"


export default function Header() {
    return (
        <div className="flex w-full py-2.5 px-28 justify-between items-center">
            <Link href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="168" height="24" viewBox="0 0 168 24" fill="none">
                    <path d="M157.562 9.83362C156.673 9.83362 156.229 10.2781 156.229 11.1669V13.0003H161.895V11.1669C161.895 10.2781 161.451 9.83362 160.562 9.83362H157.562ZM167.062 23.3335C162.773 23.7779 158.884 24.0002 155.395 24.0002C153.884 24.0002 152.673 23.5446 151.762 22.6335C150.851 21.7224 150.396 20.5113 150.396 19.0002V11.0003C150.396 9.33362 150.862 8.03364 151.795 7.10031C152.751 6.14477 154.062 5.66699 155.729 5.66699H162.395C164.062 5.66699 165.362 6.14477 166.295 7.10031C167.251 8.03364 167.729 9.33362 167.729 11.0003V17.1669H156.229V18.5002C156.229 18.8335 156.34 19.1113 156.562 19.3335C156.784 19.5558 157.062 19.6669 157.395 19.6669C159.595 19.6669 162.818 19.5002 167.062 19.1669V23.3335Z" fill="#14C7FF" />
                    <path d="M143.552 6.00049H149.719L143.052 23.667H136.385L129.719 6.00049H135.885L139.719 18.0004L143.552 6.00049Z" fill="#14C7FF" />
                    <path d="M128.375 6.6666V23.6664H122.542V11.1666H120.042V6.6666H128.375ZM122.542 0H128.375V4.66662H122.542V0Z" fill="#14C7FF" />
                    <path d="M106.867 19H119.034V23.6666H100.867V0.333496H106.867V19Z" fill="#14C7FF" />
                    <path d="M91.5227 23.9999C87.8116 23.9999 83.7005 23.7777 79.1895 23.3333V18.8333C84.1005 19.1667 87.7672 19.3333 90.1894 19.3333C90.7005 19.3333 91.1005 19.1889 91.3893 18.9C91.7004 18.5889 91.856 18.1778 91.856 17.6667V16.3333C91.856 15 91.1893 14.3334 89.856 14.3334H82.8561V9.66674H89.1894C90.5227 9.66674 91.1893 9.00008 91.1893 7.66676V7.0001C91.1893 5.66678 90.5227 5.00012 89.1894 5.00012H79.5228V0.333496H90.856C93.0338 0.333496 94.6338 0.833492 95.656 1.83348C96.6782 2.81125 97.1893 4.31124 97.1893 6.33344C97.1893 7.66676 96.8782 8.75564 96.256 9.60008C95.656 10.4223 94.856 11.0001 93.856 11.3334C95.656 11.8223 96.8782 13.0223 97.5226 14.9334C97.7448 15.6222 97.856 16.4222 97.856 17.3333V17.6667C97.856 19.8444 97.3448 21.4444 96.3226 22.4666C95.3004 23.4888 93.7004 23.9999 91.5227 23.9999Z" fill="white" />
                    <path d="M77.8641 23.6666H59.3643V0.333496H77.8641V5.00012H65.3642V9.50008H75.1974V14.1667H65.3642V19H77.8641V23.6666Z" fill="white" />
                    <path d="M55.3488 23.6666H49.0155L41.0156 9.66674V23.6666H35.0156V0.333496H41.3489L49.3488 14.3334V0.333496H55.3488V23.6666Z" fill="white" />
                    <path d="M19.3332 0.333496L23.3331 15.3334L26.8331 0.333496H33.333L26.9997 23.6666H20.6665L16.6665 9.16675L12.6665 23.6666H6.33327L0 0.333496H6.49994L9.99991 15.3334L13.9999 0.333496H19.3332Z" fill="white" />
                </svg>


            </Link>
            <div className="flex items-center gap-6">
                <CustomButton
                    title="Early access"
                    customStyle="bg-black_2f"
                />


                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" fill="none">
                        <path d="M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 3C9.55228 3 10 2.55228 10 2C10 1.44772 9.55228 1 9 1C8.44772 1 8 1.44772 8 2C8 2.55228 8.44772 3 9 3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 3C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2 10C2.55228 10 3 9.55228 3 9C3 8.44772 2.55228 8 2 8C1.44772 8 1 8.44772 1 9C1 9.55228 1.44772 10 2 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 10C16.5523 10 17 9.55228 17 9C17 8.44772 16.5523 8 16 8C15.4477 8 15 8.44772 15 9C15 9.55228 15.4477 10 16 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2 17C2.55228 17 3 16.5523 3 16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16C1 16.5523 1.44772 17 2 17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 17C9.55228 17 10 16.5523 10 16C10 15.4477 9.55228 15 9 15C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 17C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15C15.4477 15 15 15.4477 15 16C15 16.5523 15.4477 17 16 17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}