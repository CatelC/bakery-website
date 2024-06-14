import Image from "next/image"
import CharacterSheet from "@/components/characters/CharacterSheet";
import PPClement from "../../../public/images/PPClement.png"
import PPLouis from "../../../public/images/PPLouis.png"
import insta from "../../../public/images/instagram.png"
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
                />
                <CharacterSheet
                    profilePicPath={PPLouis.src}
                    name="CATEL"
                    surname="Louis"
                    job="Sound Designer, Composer, Pixel Artist"
                />
            </div>
            <div>
                <SocialMedia   
                    type={insta.src}
                    link="https://www.instagram.com/thebakerygs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    name="@thebagerygs"
                />
            </div>
        </main>

    );
}