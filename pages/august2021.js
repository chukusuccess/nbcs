import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { afrobrawlers } from "../components/data/info.js";

export default function August2021() {
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
          <h1 className="font-bold text-2xl sm:text-3xl text-white">
            1v1 Round Robin
          </h1>
          <div>
            <h1 className="font-bold text-xl sm:text-2xl text-yellow-600">
              Tournament Rules
            </h1>
            <p className="text-base sm:text-xl">
              Custom round robin- Each participant plays every other participant
              three times for 3 points per win, totalling 9points for winning
              all 3 games against an opponent. maximum points obtainable for
              winning all other 15 participants, is 135 points. Top 3 placers
              will be determined by obtained points.
            </p>
            <br />
            <div>
              <h1 className="font-bold text-xl text-green-600 mb-10">
                WINNER:{" "}
                <span className="text-white">{afrobrawlers[3].winner}</span>
              </h1>
              <div className="relative sm:hidden flex flex-col items-center justify-center">
                <Image
                  src="/podium.webp"
                  width={400}
                  height={100}
                  alt="brawlhalla"
                />
                <div className="absolute top-0 h-[28.5%] w-full flex flex-col items-center justify-start">
                  <Image
                    src="https://static.wikia.nocookie.net/brawlhalla_gamepedia/images/5/5f/Diana.png/revision/latest?cb=20210315013123"
                    width={1000}
                    height={1000}
                    alt="brawlhalla"
                    className="object-contain overflow-visible h-full"
                  />
                </div>
              </div>
              <div className="text-base sm:text-xl">
                <h1 className="font-bold text-yellow-600">Participants:</h1>
                <div className="flex flex-wrap">
                  {afrobrawlers[3].participants.map((item, index) => {
                    return (
                      <p key={index} className="mr-2">
                        {item},
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <Link
            className="text-black w-1/2 sm:w-1/4 rounded-lg bg-white h-10 sm:h-14 flex flex-row items-center justify-center font-bold"
            href="/home"
          >
            Back
          </Link>
        </section>
      </main>
    </>
  );
}
