import GameIdea from "@/components/games/GameIdea";
import defaultBackground from "../../../../public/images/games/default.png"

export default function thebakery() {
    return (
        <main className="game">

            <div className="description grid text-center ">
                <a
                    className="group border px-5 py-4 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className="mb-3 text-2xl font-semibold">
                        THE BAKERY
                    </h2>
                    <p className="m-0 text-balance text-base">
                        The Bakery is our very first games ! It is still in development but we aim to have a playable beta by the end of 2024.
                    </p>
                </a>
            </div>
            <p className="title">
                What you can expect in The Bakery :
            </p>
            <div className="gameIdeaSheet">
                <GameIdea
                text="Realistic and reproductible recipes or breads and pastries that you can follow through a series of minigame, or even in real life !"
                backgroundImagePath={defaultBackground.src}
                />
                <GameIdea
                text="Manage your own bakery! Buy the ingredients, upgrade your tools and sell your homemade pastries to your client."
                />
                <GameIdea
                text="A cozy bakery, homemade pixel art and music."
                />
            </div>
        </main>
    );
}