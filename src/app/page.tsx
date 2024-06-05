import Image from "next/image";

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center">
      
      <div className="z-10 w-full max-w-5xl items-center font-mono text-sm lg:flex">
        <Image
          className="banner"
          src="/images/Logo.png"
          width={1200}
          height={100}
          alt="The Bakery Banner"
          />
      </div>
      <div className="description mb-32 grid text-center ">
        <a
          className="group border px-5 py-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            About the studio
          </h2>
          <p className="m-0 text-balance text-base">
            The Bakery is an independent video game studio created by two french brothers in october 2023. Our goal is to create games from scratch and with all our passion. 
            Our first game is a management/arcade/simulator game of a bakery. We have lots of ideas and already mock-ups of a few games that we want to create. We love pixel art and our focus right now is to make homemade pixel-art games.
          </p>
        </a>
      </div>
    </main>
  );
}
