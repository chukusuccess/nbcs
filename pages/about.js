import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>NBCS</title>
        <meta
          name="description"
          content="Nigerian Brawlhalla Chammpionship Series"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="flex flex-col items-center justify-start bg-black text-white text:lg sm:text-3xl w-full min-h-screen gap-5 px-5 py-8">
          <h1 className="font-bold text-2xl text-yellow-600">
            About Afrobrawlers
          </h1>
          <div>
            <p>
              We are Afrobrawlers. We bring together a passionate group of
              Brawlhalla players from Nigeria, Senegal, South Africa, Ghana,
              Sudan, Zimbabwe and beyond. At Afrobrawlers, we believe in the
              power of diversity, camaraderie, and friendly competition.
            </p>
            <br />
            <h1 className="font-bold text-xl text-yellow-600">Our Mission</h1>
            <p>
              Our mission at Afrobrawlers is to create a welcoming and inclusive
              space where gamers from across Africa can connect, learn, and grow
              together. We strive to foster a community that embraces diversity,
              encourages skill development, and provides opportunities for
              players to showcase their talent within and outside Africa.
            </p>
            <br />
            <h1 className="font-bold text-xl text-yellow-600 mb-2 text-center">
              What We Offer
            </h1>
            <ul>
              <li>
                <div>
                  <Image
                    src="https://static.wikia.nocookie.net/brawlhalla_gamepedia/images/c/ce/Taunt_Solidarity_Still.png/revision/latest/scale-to-width-down/198?cb=20200710144058"
                    width={100}
                    height={100}
                  />
                  <p>
                    <b className="text-green-700">Diverse Community:</b> <br />
                    Our community represents a rich blend of cultures,
                    backgrounds, and experiences.
                  </p>
                </div>
              </li>
              <br />
              <li>
                <div>
                  <Image
                    src="https://static.wikia.nocookie.net/brawlhalla_gamepedia/images/9/93/Taunt_Ninja_Flip_Still.png/revision/latest/scale-to-width-down/198?cb=20200710143827"
                    width={100}
                    height={100}
                  />
                  <p>
                    <b className="text-green-700">Tournaments and Events:</b>{" "}
                    <br />
                    Get ready for regular tournaments where you can showcase
                    your prowess and earn recognition among your peers.
                  </p>
                </div>
              </li>
              <br />
              <li>
                <div>
                  <Image
                    src="https://static.wikia.nocookie.net/brawlhalla_gamepedia/images/2/29/Taunt_The_Reads_Still.png/revision/latest/scale-to-width-down/198?cb=20200710144307"
                    width={100}
                    height={100}
                  />
                  <p>
                    <b className="text-green-700">Skill Development:</b> <br />
                    Whether you're a beginner seeking guidance or an experienced
                    player looking to polish your techniques, our community
                    provides a nurturing space for growth.
                  </p>
                </div>
              </li>
              <br />
              <li>
                <div>
                  <Image
                    src="https://static.wikia.nocookie.net/brawlhalla_gamepedia/images/6/67/Taunt_Avatar_Flag_Still.png/revision/latest/scale-to-width-down/198?cb=20200710143237"
                    width={100}
                    height={100}
                  />
                  <p>
                    <b className="text-green-700">Community Support:</b> <br />
                    We believe in supporting each other not only within the game
                    but also in our personal journeys. Our community is built on
                    respect, kindness, and a genuine love for the game.
                  </p>
                </div>
              </li>
              <br />
            </ul>
            <div className="w-full flex items-center justify-between">
              <Link
                className="text-black w-1/2 sm:w-1/4 rounded-lg bg-white h-10 sm:h-20 flex flex-row items-center justify-center font-bold"
                href="/home"
              >
                <b className="text-3xl mr-2">←</b> Go Back
              </Link>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-black w-1/6 sm:w-1/4 rounded-full bg-white aspect-square flex flex-row items-center justify-center font-bold animate-bounce"
              >
                <b className="text-3xl">↑</b>
              </button>
            </div>
          </div>
          <Image
            src="https://www.brawlhalla.com/c/uploads/2015/11/legendlineupmarch.png"
            width={350}
            height={100}
            alt="brawlhalla"
          />
        </section>
      </main>
    </>
  );
}
