import GameIdea from "@/components/games/GameIdea";
import defaultBackground from "../../../../public/images/games/default.png"

export default function thebakery() {
    return (
        <main className="game">

            <div className="description">
                <div>
                    <h2>
                        THE BAKERY
                    </h2>
                    <p>
                        The Bakery is our very first games ! It is still in development but we aim to have a playable beta by the end of 2024.
                    </p>
                </div>
            </div>
            <p className="title">
                What you can expect in The Bakery :
            </p>
            <div className="gameIdeaSheet">
                <GameIdea
                title="Simulation"
                text="Realistic and reproductible recipes of breads and pastries that you can create through a series of minigame, or even in real life !"
                backgroundImagePath={defaultBackground.src}
                />
                <GameIdea
                title="Management"
                text="Manage your own bakery! Buy the ingredients, upgrade your tools and sell your homemade pastries to your client."
                />
                <GameIdea
                title="Cozy"
                text="A cozy bakery, homemade pixel art and music."
                backgroundImagePath={defaultBackground.src}
                />
            </div>
            <p className="subtext">
                *Hover over the blocks to see what's up*
            </p>
        </main>
    );
}