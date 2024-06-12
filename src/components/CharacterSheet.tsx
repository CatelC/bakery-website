import { FC } from "react";

interface CharacterSheetProps {
    profilePicPath?: string;
    name: string;
    surname?: string;
    job: string;
}

const CharacterSheet: FC<CharacterSheetProps> = ({profilePicPath, name, surname, job}) => {
    return (
        <div className="characterSheet">
            <div>{name} {surname}</div>
            <div>{job}</div>
        </div>
    );
}

export default CharacterSheet;

