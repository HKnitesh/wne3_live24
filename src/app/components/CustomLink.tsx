import Link from "next/link";


export default function CustomButton({ link, title }: any) {
    return (
        <Link href={link}>
            {title}
        </Link>
    )
}