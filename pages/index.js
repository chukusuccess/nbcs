import Head from "next/head";
import Link from "next/link";
import Splash from "../components/Splash-Screen/Splash";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>NBCS</title>
        <meta
          name="description"
          content="Nigerian Brawlhalla Championship Series"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Brawlhalla, Platform, Game, Tournaments, ESports, Brawl"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Splash />
        <section className="flex flex-col items-start justify-center bgimg bg-right sm:bg-center w-full min-h-screen text-white gap-12 xl:gap-10 lg:pt-8">
          <div className="flex flex-col justify-center items-center sm:items-start w-full px-4 text-white sm:px-20 blurdiv">
            <br />
            <br />
            <h1 className="w-full text-4xl text-center sm:text-left">
              Nigerian Brawlhalla <br />
              Championship Series
            </h1>
            <br />
            <p className="w-full max-w-lg text-xl text-center sm:text-left font-light">
              Welcome to <b className="font-extrabold">NBCS,</b> join us as we
              dive into the world of <b className="font-bold">Brawlhalla,</b>{" "}
              where every victory is earned through skill, strategy, a touch of
              finesse, and sometimes luck!.
            </p>
            <div className="flex sm:flex-row flex-col items-start justify-center w-fit gap-4 mt-6 sm:mt-10">
              <Link
                href="/home"
                className="flex flex-row items-center justify-center gap-2 p-2 w-64 border border-[#fff] hover:bg-[#1C665B] bg-black duration-500 rounded-md text-white text-xl max-w-[250px] text-center"
              >
                Explore
                <Image
                  alt="brawlhalla"
                  src="https://static.wikia.nocookie.net/brawlhalla_gamepedia/images/e/ea/Gadget_Bomb.png/revision/latest/scale-to-width-down/50?cb=20200528002842"
                  width={30}
                  height={10}
                />
              </Link>
            </div>
          </div>
          <div className="fixed text-gray-300 bottom-1 left-2">
            Brought to you by: <b className="text-[#3a7e74]">Afrobrawlers</b>
          </div>
        </section>
      </main>
    </>
  );
}
