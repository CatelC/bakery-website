import { AppProps } from "next/app"
import Head from "next/head"
import favicon from "../../public/favicon.ico"
import favicon16 from "../../public/favicon-16x16.png"
import favicon32 from "../../public/favicon-32x32.png"
import faviconApple from "../../public/apple-touch-icon.png"

export default function App({Component, pageProps} : AppProps){
    
    return (
        <>
        <Head>            
            <link rel="icon" href={favicon.src} />
            <link rel="icon" sizes="16x16" href={favicon16.src} />
            <link rel="icon" sizes="32x32" href={favicon32.src} />
            <link rel="apple-touch-icon" sizes="180x180" href={faviconApple.src} />
            <link rel="manifest" href="/manifest.webmanifest"/>
        </Head>
        <Component {...pageProps} />
        </>
    )

}