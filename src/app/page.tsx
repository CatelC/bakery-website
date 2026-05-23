import Image from "next/image";
import Logo from "../../public/images/Logo.png"
import './Home.css'

export default function Home() {
  return (
    
    <main className="home">
      <div>
        <Image
          className="banner"
          src={Logo}
          width={1200}
          height={100}
          alt="The Bakery Banner"
          />
      </div>
      <div className="description">
        <div>
          <h2>
            About the studio
          </h2>
          <p>
            The Bakery is an independent video game studio created by two french brothers in october 2023. Our goal is to create games from scratch and with all our passion. 
            Our first game is a management/arcade/simulator game of a bakery. We have lots of ideas and already mock-ups of a few games that we want to create. We love pixel art and our focus right now is to make homemade pixel-art games.
          </p>
        </div>
      </div>
    </main>
  );
}
