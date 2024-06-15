import { ComponentType, FC, ReactNode } from "react";
import Image from "next/image";
import {SocialMedia , SocialMediaProps} from "./SocialMediaLink";
import instaPath from "../../../public/images/socials/instagram.png"
import linkedinPath from "../../../public/images/socials/linkedin.png"
import twitterPath from "../../../public/images/socials/twitter.png"
import youtubePath from "../../../public/images/socials/youtube.png"

interface CharacterSheetProps {
    profilePicPath?: string;
    name: string;
    surname?: string;
    job: string;
    children?: ReactNode;
}

const CharacterSheet: FC<CharacterSheetProps> = ({ profilePicPath, name, surname, job, children}) => {
    return (
        <div className="characterSheet" 
        style={{
            backgroundImage: `url(${profilePicPath})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
            backgroundSize : "60%",
            imageRendering: "pixelated"
        }}>
            <div>{name} {surname}</div>
            <div>{job}</div>
            {children}
        </div>
    );
}

export default CharacterSheet;

