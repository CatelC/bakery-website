import Image from "next/image";

export default function Header() {
    return (
        <nav>
            <div className="navigation">
                <a href="/">
                    <Image
                        className="button"
                        src="/Home.png"
                        width={115}
                        height={100}
                        alt="Home Button"
                    />
                </a>
                <a href="">
                    <Image
                        className="button"
                        src="/Games.png"
                        width={130}
                        height={100}
                        alt="Games Button"
                    />
                </a>
                <a href="/about">
                    <Image
                        className="button"
                        src="/About Us.png"
                        width={206}
                        height={100}
                        alt="About Us Button"
                    />
                </a>
            </div>
        </nav>
    );
}