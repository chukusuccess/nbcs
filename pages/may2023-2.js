import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { afrobrawlers } from "../components/data/info.js";

export default function May27th2023() {
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
            1v1 Double Elimination
          </h1>
          <div>
            <h1 className="font-bold text-xl sm:text-2xl text-yellow-600">
              Tournament Rules
            </h1>
            <p className="text-base sm:text-xl">
              Best of 3 in standard winners bracket until top 4, then best of 5
              until a winner emerges. Best of 3 throughout losers bracket.
            </p>
            <br />
            <div>
              <h1 className="font-bold text-xl text-green-600 mb-10">
                WINNER:{" "}
                <span className="text-white">{afrobrawlers[0].winner}</span>
              </h1>
              <div className="relative sm:hidden flex flex-col items-center justify-center">
                <Image
                  src="/podium.webp"
                  width={400}
                  height={100}
                  alt="brawlhalla"
                />
                <div className="absolute top-0 h-1/3 w-full flex flex-col items-center justify-start">
                  <Image
                    src="https://static.wikia.nocookie.net/brawlhalla_gamepedia/images/e/ea/Queen_Nai.png/revision/latest/scale-to-width-down/1000?cb=20210315015342"
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
                  {afrobrawlers[0].participants.map((item, index) => {
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
