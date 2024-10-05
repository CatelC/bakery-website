import Image from "next/image"
import CharacterSheet from "@/components/characters/CharacterSheet";
import PPClement from "../../../public/images/PPClement.png"
import PPLouis from "../../../public/images/PPLouis.png"
import insta from "../../../public/images/socials/instagram.png"
import youtube from "../../../public/images/socials/youtube.png"
import linkedin from "../../../public/images/socials/linkedin.png"
import twitter from "../../../public/images/socials/twitter.png"
import soundcloud from "../../../public/images/socials/soundcloud.png"
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
                >
                    <SocialMedia
                        type={twitter.src}
                        style="tinyLogo"
                        link="https://x.com/AIkazart"
                        name="@AIkazart"
                    />
                    <SocialMedia
                        type={linkedin.src}
                        style="tinyLogo"
                        link="https://www.linkedin.com/in/clement-catel/"
                        name="clement-catel"
                    />
                </CharacterSheet>
                <CharacterSheet
                    profilePicPath={PPLouis.src}
                    name="CATEL"
                    surname="Louis"
                    job="Sound Designer, Composer, Pixel Artist"
                >
                    <SocialMedia
                        type={linkedin.src}
                        style="tinyLogo"
                        link="https://www.linkedin.com/in/louis-catel-29651927a/"
                        name="louis-catel"
                    />
                    <SocialMedia
                        type={insta.src}
                        style="tinyLogo"
                        link="https://www.instagram.com/louis._ctl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        name="@louis._ctl"
                    />
                    <SocialMedia
                        type={youtube.src}
                        style="tinyLogo"
                        link="https://www.youtube.com/@louiscatel3586"
                        name="Uraz - Louis Catel"
                    />
                    <SocialMedia
                        type={soundcloud.src}
                        style="tinyLogo"
                        link="https://soundcloud.com/louis-catel"
                        name="UraZ"
                    />
                </CharacterSheet>
            </div>
        </main>
    );
}