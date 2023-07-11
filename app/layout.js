import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Florian "Blackoutburst" Chanson',
    description: "Welcome to my website! I'm A French developer specialized in JVM technologies, Currently working at Barbablanka on Web/Android projects."
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} scrollbar`}>{children}</body>
        </html>
    )
}
