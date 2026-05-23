import GameIdea from "@/components/games/GameIdea";
import defaultBackground from "../../../../public/images/games/default.png"
import Sheltered78_1 from "../../../../public/images/games/Sheltered78_1.png"
import Sheltered78_2 from "../../../../public/images/games/Sheltered78_2.png"
import Sheltered78_3 from "../../../../public/images/games/Sheltered78_3.png"

export default function shelthered78() {
    return (
        <main className="game">
            <div className="description">
                <div>
                    <h2>
                        Sheltered 78
                    </h2>
                    <p>
                        Sheltered 78 is a fan-game set in the Fallout universe. 
                    </p>
                </div>
            </div>
            <p className="title">
                What you can expect in The Bakery :
            </p>
            <div className="gameIdeaSheet">
                <GameIdea
                title="Trapped"
                text="You wake up in an unknown place, with no memory of who you are. How will you get out ?"
                backgroundImagePath={Sheltered78_1.src}
                repeat= {true}
                />
                <GameIdea
                title="Mistery"
                text="You can rush out of this hellhole.. Or search for clues to understand what happened here."
                backgroundImagePath={Sheltered78_2.src}
                repeat= {true}
                />
                <GameIdea
                title="Dark"
                text="Sheltered 78 combines a dark visual ambiance with homemade sound design, music and pixel art."
                backgroundImagePath={Sheltered78_3.src}
                repeat= {true}
                />
            </div>
            <p className="subtext">
                *Hover over the blocks to see what's up*
            </p>
        </main>
    )
}