import GameSheet from "@/components/games/GameSheet";
import defaultBackground from "../../../public/images/games/default.png"
import theBakeryBackground from "../../../public/images/games/TheBakery.png"
import sheltered78Background from "../../../public/images/games/Sheltered78.png"
import './games.css';

export default function Games(){
    return (
        <main className="games">
            <div className="gamePanel">
                <GameSheet
                backgroundImagePath={sheltered78Background.src}
                name="Sheltered 78"
                link="/sheltered78"
                />
                <GameSheet
                backgroundImagePath={theBakeryBackground.src}
                name="The Bakery"
                link="/thebakery"
                />
                <GameSheet
                name="Coming Soon"
                link="/comingsoon"/>
            </div>
        </main>
    );
}