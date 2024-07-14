import { document } from "postcss";
import { FC } from "react";

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
        <div className="gameIdea" style={{ "--bg-image-game-idea": `url(${backgroundImagePath})` }}>
            <div className="gameDiv">
                <p>{text}</p>
            </div>

        </div>

    );
}

export default GameIdea