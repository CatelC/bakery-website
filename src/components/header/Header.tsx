import Image from "next/image";
import Link from "next/link";
import homeLogo from "../../../public/images/Home.png"
import gamesLogo from "../../../public/images/Games.png"
import aboutLogo from "../../../public/images/About Us.png"

export default function Header() {
    return (
        <nav>
            <div className="navigation">
                <Link href="/">
                    <Image
                        className="button"
                        src={homeLogo}
                        width={115}
                        height={100}
                        alt="Home Button"
                    />
                </Link>
                <Link href="">
                    <Image
                        className="button"
                        src={gamesLogo}
                        width={130}
                        height={100}
                        alt="Games Button"
                    />
                </Link>
                <Link href="/about">
                    <Image
                        className="button"
                        src={aboutLogo}
                        width={206}
                        height={100}
                        alt="About Us Button"
                    />
                </Link>
            </div>
        </nav>
    );
}