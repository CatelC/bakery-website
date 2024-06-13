import { FC } from "react";
import Image from "next/image";

interface CharacterSheetProps {
    profilePicPath?: string;
    name: string;
    surname?: string;
    job: string;
}

const CharacterSheet: FC<CharacterSheetProps> = ({ profilePicPath, name, surname, job }) => {
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
        </div>
    );
}

export default CharacterSheet;

