import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { afrobrawlers } from "../components/data/info.js";

export default function May2023() {
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
            3v3 Crew battle Round Robin
          </h1>
          <div className="w-full">
            <h1 className="font-bold text-xl sm:text-2xl text-yellow-600">
              Tournament Rules
            </h1>
            <p className="text-base sm:text-xl">
              Each team plays every other team. There are 6 players in each team
              but only 3 can play per crew battle, so it is up to team captains
              to choose what 3 members represent the team per crew battle. For
              the very first match in a set, the team with the lower seed
              chooses their players and legends first, then subsequesntly in
              that set, the winner of the previous games selects their players
              and legends first. Team with the most wins against other teams is
              the winner.
            </p>
            <br />
            <div className="w-full">
              <h1 className="font-bold text-xl text-green-600 mb-10">
                WINNER:{" "}
                <span className="text-white">{afrobrawlers[1].winner}</span>
              </h1>
              <div className="w-full sm:hidden flex flex-row flex-wrap items-center justify-centerustcen">
                {afrobrawlers[1].participants[3].members.map((item, index) => (
                  <div
                    className="relative w-1/3 flex flex-col items-center justify-center mb-5"
                    key={index}
                  >
                    <Image
                      src="/podium.webp"
                      width={100}
                      height={10}
                      alt="brawlhalla"
                      className="object-contain overflow-visible h-full"
                    />
                    <div className="absolute top-0 h-[29%] w-full flex flex-col items-center justify-start">
                      <Image
                        src={item.legend}
                        width={100}
                        height={10}
                        alt="brawlhalla"
                        className="object-contain overflow-visible h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-base sm:text-xl">
                <h1 className="font-bold text-yellow-600 py-2">
                  Participants:
                </h1>
                <div className="flex flex-wrap">
                  {afrobrawlers[1].participants.map((item, index) => {
                    return (
                      <div key={index} className="w-1/2 mb-5 text-green-600">
                        {item.name}:{" "}
                        {item.members.map((member, index) => {
                          return (
                            <p key={index} className="text-white">
                              {member.name},
                            </p>
                          );
                        })}
                      </div>
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
