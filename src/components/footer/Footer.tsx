import SocialMedia from "../characters/SocialMediaLink";
import insta from "../../../public/images/socials/instagram.png"
import linkedin from "../../../public/images/socials/linkedin.png"
import style from "../characters/Socials.module.css"

export default function Footer() {
    return (
        <div className={"footer"}>
            <SocialMedia   
                    type={insta.src}
                    style="Logo"
                    link="https://www.instagram.com/thebakerygs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    name="@thebagerygs"
                />
            <SocialMedia   
                    type={linkedin.src}
                    style="Logo"
                    link="https://www.linkedin.com/company/the-bakery-game-studio/"
                    name="@thebagerygs"
                />
        </div>
    );
}