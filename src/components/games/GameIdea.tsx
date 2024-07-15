import { document } from "postcss";
import { FC } from "react";
import defaultBackground from "../../../public/images/games/default.png"

interface GameIdeaProps {
    text: string;
    backgroundImagePath?: string;
}

declare module "react" {
    interface CSSProperties {
        "--bg-image-game-idea"?: string;
    }
}

const GameIdea: FC<GameIdeaProps> = ({ text, backgroundImagePath }) => {
    return (
        <div className={`gameIdea ${backgroundImagePath != undefined ? "gameIdeaDefault" : ""}`}
            style={{ "--bg-image-game-idea": `url(${backgroundImagePath != undefined ? backgroundImagePath : defaultBackground.src})` }}>
            <div className="gameDiv">
                <p>{text}</p>
            </div>
        </div>
    );
}

export default GameIdea