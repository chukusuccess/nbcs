import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { afrobrawlers } from "../components/data/info.js";

export default function May2020() {
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
          <h1 className="font-bold text-2xl text-white">
            1v1 Double Elimination
          </h1>
          <div>
            <h1 className="font-bold text-xl text-yellow-600">
              Tournament Rules
            </h1>
            <p>
              One match per standard bracket, 1 point for a win and 0 point for
              a loss. One match per loser&apos;s bracket, 1 point for a win and
              0 point for a loss. Grand final is a best of three, with 1 point
              per win and 0 point per loss.
            </p>
            <br />
            <div>
              <h1 className="font-bold text-xl text-green-600 mb-10">
                WINNER:{" "}
                <span className="text-white">{afrobrawlers[3].winner}</span>
              </h1>
              <div className="relative flex flex-col items-center justify-center">
                <Image
                  src="/podium.webp"
                  width={400}
                  height={100}
                  alt="brawlhalla"
                />
                <div className="absolute top-0 h-[55vw] w-full flex flex-col items-center justify-start">
                  <Image
                    src="https://static.wikia.nocookie.net/brawlhalla_gamepedia/images/3/38/Ember.png/revision/latest/scale-to-width-down/1000?cb=20210315013318"
                    width={1000}
                    height={1000}
                    alt="brawlhalla"
                    className="object-contain overflow-visible h-full"
                  />
                </div>
              </div>
              <div>
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
            className="text-black w-1/2 sm:w-1/4 rounded-lg bg-white h-10 sm:h-20 flex flex-row items-center justify-center font-bold"
            href="/home"
          >
            Back
          </Link>
        </section>
      </main>
    </>
  );
}
