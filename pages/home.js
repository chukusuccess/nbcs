import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Popover } from "antd";
import { TournamentCard } from "../components/TournamentCard";
import { afrobrawlers } from "../components/data/info.js";
import { members } from "../components/data/info.js";

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
          <div className="w-full">
            <Image
              src="/afrobrawlers.png"
              alt="brawlhalla"
              width={3000}
              height={100}
              className="rounded-[15%] mb-5"
            />
            <h1 className="text-white font-bold text-xl mb-2">
              AfroBrawlers Community
            </h1>
            <p>
              Engage in memorable 1v1s, hone your skill-set, and forge lasting
              friendships with fellow fighters in our community.
            </p>
            <br />
            <br />
            <Link
              className="text-black w-1/2 sm:w-1/4 rounded-lg bg-white h-10 sm:h-20 flex flex-row items-center justify-center font-bold"
              href={"https://chat.whatsapp.com/FYs8CKFKWf8FmLW1arVuRC"}
              target="_blank"
            >
              Join Community
            </Link>
            <br />
            <br />
            <div>
              <h1 className="text-xl font-bold mb-5">Community Events</h1>
              <div className="w-full h-[350px] overflow-y-scroll py-2">
                {afrobrawlers.map((item, index) => {
                  return (
                    <TournamentCard
                      key={index}
                      title={item.tournamentTitle}
                      host={item.Host}
                      type={item.Type}
                      // date={item.Date}
                      // time={item.Time}
                      // status={item.Status}
                      buttonText="View participants"
                      buttonColor="bg-yellow-600"
                      imageUrl={item.url}
                    />
                  );
                })}
              </div>
            </div>
            <br />
            <br />
            <div className="w-full">
              <h1 className="text-xl font-bold mb-5">Notable Members</h1>
              <div className="w-full flex flex-row items-center gap-5 overflow-x-scroll">
                {members.map((item, index) => {
                  return (
                    <Popover
                      content={
                        <div className="flex flex-col">
                          <span>Peak ELO: {item.peak}</span>
                          <span>Rank: {item.rank}</span>
                          <span>Role: {item.role}</span>
                        </div>
                      }
                      title={item.name}
                    >
                      <div className="flex flex-col items-center justify-center pb-3">
                        <div
                          key={index}
                          className="rounded-full bg-slate-900 w-10 aspect-square flex items-center justify-center text-lg"
                        >
                          👤
                        </div>
                        <span className="text-sm font-thin">{item.name}</span>
                      </div>
                    </Popover>
                  );
                })}
              </div>
            </div>
          </div>

          <br />
        </section>
      </main>
    </>
  );
}
