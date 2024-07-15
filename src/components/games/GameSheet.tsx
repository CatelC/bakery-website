import Link from "next/link";
import { FC } from "react";
import defaultBackground from "../../../public/images/games/default.png"


interface GameSheetProps {
    backgroundImagePath?: string;
    name: string;
    link: string;
}

const GameSheet: FC<GameSheetProps> = ({ backgroundImagePath, name, link }) => {
    return (
        <Link href={"/games" + link} className="gameSheet" style={{
            /* Make this an if statement : if no background image page is given, it takes the default one and applu backgroundSize to cover
            If it does contain a background image*/ 
            backgroundImage: `url(${backgroundImagePath!=undefined ? backgroundImagePath : defaultBackground.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            imageRendering: "pixelated",
        }} >
            <p>
                {name}
            </p>
        </Link>
    );
}

export default GameSheet;