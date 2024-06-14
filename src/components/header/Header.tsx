import Image from "next/image";
import Link from "next/link";
import homeLogo from "../../../public/images/Home.png"
import gamesLogo from "../../../public/images/Games.png"
import aboutLogo from "../../../public/images/AboutUs.png"

export default function Header() {
    return (
        <nav>
            <div className="navigation">
                <Link href="/" style={{
                    backgroundImage: `url(${homeLogo.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    imageRendering: "pixelated",
                }}/>
                <Link href="" style={{
                    backgroundImage: `url(${gamesLogo.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    imageRendering: "pixelated",
                }}/>
                <Link href="/about" style={{
                    backgroundImage: `url(${aboutLogo.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    imageRendering: "pixelated",
                }}/>
            </div>
        </nav>
    );
}