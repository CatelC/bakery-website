import { CSSProperties, FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface SocialMediaProps {
    style?: string;
    type: string;
    link: string;
    name: string;
}

const SocialMedia: FC<SocialMediaProps> = ({ type, link, name, style }) => {
    return (
        <div className="socials">
            <Link href={link} target="_blank">
                <img className={style}
                    src={type}
                />
                {name}
            </Link>

        </div>
    );
}

export default SocialMedia;