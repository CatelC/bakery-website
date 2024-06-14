import Image from "next/image"
import CharacterSheet from "@/components/characters/CharacterSheet";
import PPClement from "../../../public/images/PPClement.png"
import PPLouis from "../../../public/images/PPLouis.png"
import insta from "../../../public/images/socials/instagram.png"
import youtube from "../../../public/images/socials/youtube.png"
import linkedin from "../../../public/images/socials/linkedin.png"
import twitter from "../../../public/images/socials/twitter.png"
import Link from "next/link";
import SocialMedia from "@/components/characters/SocialMediaLink";

export default function About() {
    return (
        <main className="about">
            <div className="characterPanel">
                <CharacterSheet
                    profilePicPath={PPClement.src}
                    name="CATEL"
                    surname="Clement"
                    job="Software Engineer, Game Developer"
                    twitter="https://x.com/AIkazart"
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