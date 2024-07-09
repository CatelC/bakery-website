import { document } from "postcss";
import { FC } from "react";

interface GameIdeaProps {
    text: string;
    backgroundImagePath?: string;
}

const GameIdea: FC<GameIdeaProps> = ({ text, backgroundImagePath }) => {
    return (
        <div className="gameIdea" style={{'--bg-image-game-idea': `url(${backgroundImagePath})`}}>
            <p>{text}</p>
        </div>

    );
}

export default GameIdea