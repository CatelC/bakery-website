import Link from "next/link";
import { FC } from "react";


interface GameSheetProps {
    backgroundImagePath?: string;
    name: string;
    link: string;
}

const GameSheet: FC<GameSheetProps> = ({ backgroundImagePath, name, link}) => {
    return (
            <Link href={"/games"+link} className="gameSheet" style={{
                    backgroundImage: `url(${backgroundImagePath})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    imageRendering: "pixelated",
                }} >
                <p>
                    {name}
                </p>
            </Link>
    );
}

export default GameSheet;