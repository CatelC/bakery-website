import { AppProps } from "next/app"

export default function App({Component, pageProps} : AppProps){
    return (
        <>
        <head>
            <link rel="icon" href="/favicon.ico?" />
            <link rel="icon" sizes="16x16" href="./favicon-16x16.png" />
            <link rel="icon" sizes="32x32" href="./favicon-32x32.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
            <link rel="manifest" href="./manifest.webmanifest"/>
        </head>
        <Component {...pageProps} />
        </>
    )
}