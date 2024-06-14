import { FC } from "react";
import Image from "next/image";
import SocialMedia from "./SocialMediaLink";
import instaPath from "../../../public/images/socials/instagram.png"
import linkedinPath from "../../../public/images/socials/linkedin.png"
import twitterPath from "../../../public/images/socials/twitter.png"
import youtubePath from "../../../public/images/socials/youtube.png"

interface CharacterSheetProps {
    profilePicPath?: string;
    name: string;
    surname?: string;
    job: string;
    twitter?: string;

}

const CharacterSheet: FC<CharacterSheetProps> = ({ profilePicPath, name, surname, job, twitter }) => {
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
            {twitter &&
                <SocialMedia
                style="tinyLogo"
                type={twitterPath.src}
                link={twitter}
                name=""
                />
            }
        </div>
    );
}

export default CharacterSheet;

