import { CSSProperties, FC } from "react";
import Image from "next/image";
import Link from "next/link";

export interface SocialMediaProps {
    style?: string;
    type: string;
    link: string;
    name: string;
}

export const SocialMedia: FC<SocialMediaProps> = ({ type, link, name, style }) => {
    return (
        <div className="socials">
            <Link href={link} target="_blank">
                <img className={style}
                    src={type}
                />
                <p>{name}</p>
            </Link>

        </div>
    );
}

export default SocialMedia;