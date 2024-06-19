import GameSheet from "@/components/games/GameSheet";
import defaultBackground from "../../../public/images/games/default.png"

export default function Games(){
    return (
        <main className="games">
            <div className="gamePanel">
                <GameSheet
                backgroundImagePath={defaultBackground.src}
                name="The Bakery Pixel Simulator"
                link="/thebakerypxsim"
                />
                <GameSheet
                backgroundImagePath={defaultBackground.src}
                name="Coming Soon"
                link="/comingsoon"/>
            </div>
        </main>
    );
}