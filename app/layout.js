import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Blackoutburst</title>
                    <meta charset="UTF-8"/>
                    <meta name="description" content="Blackoutburst website"/>
                    <meta name="keywords" content="Blackoutburst, developer, Kotlin, osu, GitHub, Discord"/>
                    <meta name="author" content="Blackoutburst"/>
            </head>
            <body className={`${inter.className} scrollbar`}>{children}</body>
        </html>
    )
}
