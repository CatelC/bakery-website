import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface SocialMediaProps {
    type: string;
    link: string;
    name: string;
}

const SocialMedia: FC<SocialMediaProps> = ({ type, link, name }) => {
    return (
        <div className="socials">
            <Link href={link} target="_blank">
                <Image
                    className="banner"
                    src={type}
                    width={75}
                    height={75}
                    alt="The Bakery Banner"
                />
                {name}
            </Link>

        </div>
    );
}

export default SocialMedia;