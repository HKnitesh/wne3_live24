import { Manrope, Space_Mono, Space_Grotesk } from "next/font/google"

const manrope = Manrope({
    // weight: '700',
    style: 'normal',
    subsets: ['latin'],
    display:'swap'
});

const spaceMono = Space_Mono({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    display: 'swap'
})

const spaceGro = Space_Grotesk({
    // weight: '400',
    style: 'normal',
    subsets: ['latin'],
    display: 'swap'
})

export { manrope, spaceMono, spaceGro } 