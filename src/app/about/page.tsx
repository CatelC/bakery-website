import CharacterSheet from "@/components/CharacterSheet";

export default function About() {
    return (
        <main className="about">
            <div className="characterPanel">
                <CharacterSheet
                    name="CATEL"
                    surname="Clément"
                    job="Softare Engineer"
                />
                <CharacterSheet
                    name="CATEL"
                    surname="Louis"
                    job="Sound Designer, Musician"
                />
            </div>
        </main>

    );
}