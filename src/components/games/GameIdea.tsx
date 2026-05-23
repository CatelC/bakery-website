import { document } from "postcss";
import { FC } from "react";
import defaultBackground from "../../../public/images/games/default.png"

interface GameIdeaProps {
    text: string;
    title: string;
    backgroundImagePath?: string;
    repeat?: boolean;
}

declare module "react" {
    interface CSSProperties {
        "--bg-image-game-idea"?: string;
    }
}

const GameIdea: FC<GameIdeaProps> = ({ text, title, backgroundImagePath, repeat }) => {
    return (
        <div className={`gameIdea ${repeat == true ? "noRepeat" : "gameIdeaDefault"}` }
            style={{ "--bg-image-game-idea": `url(${backgroundImagePath != undefined ? backgroundImagePath : defaultBackground.src})` }}>
            <p>{title}</p>
            <div className="gameDiv">
                <p>{text}</p>
            </div>
        </div>
    );
}

export default GameIdea