import CharacterSheet from "@/components/CharacterSheet";
import PPClement from "../../../public/images/PPClement.png"
import PPLouis from "../../../public/images/PPLouis.png"

export default function About() {
    return (
        <main className="about">
            <div className="characterPanel">
                <CharacterSheet
                    profilePicPath={PPClement.src}
                    name="CATEL"
                    surname="Clement"
                    job="Software Engineer, Game Developer"
                />
                <CharacterSheet
                    profilePicPath={PPLouis.src}
                    name="CATEL"
                    surname="Louis"
                    job="Sound Designer, Composer, Pixel Artist"
                />
            </div>
        </main>

    );
}