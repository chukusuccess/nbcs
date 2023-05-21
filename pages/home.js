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
        <section className="flex flex-col items-center justify-start bg-black text-white text:lg sm:text-2xl w-full min-h-screen gap-5 px-5 py-8">
          <div className="w-full">
            <Image
              src="/afrobrawlers.png"
              alt="brawlhalla"
              width={3000}
              height={100}
              className="rounded-[15%] mb-5"
            />
            <h1 className="text-white font-bold text-xl sm:text-3xl mb-2">
              AfroBrawlers Community
            </h1>
            <p>
              Engage in memorable 1v1s, 2v2s, and Crew battles. Hone your
              skill-set, and forge lasting friendships with fellow fighters in
              our community.
            </p>
            <br />
            <br />
            <div className="w-full flex items-center justify-center sm:justify-start gap-1">
              <Link
                className="text-black w-1/2 sm:w-1/4 rounded-lg bg-white h-10 sm:h-14 flex flex-row items-center justify-center font-bold"
                href={"https://chat.whatsapp.com/FYs8CKFKWf8FmLW1arVuRC"}
                target="_blank"
              >
                Join Community
              </Link>
              <Link
                className="text-black w-1/2 sm:w-1/4 rounded-lg bg-white h-10 sm:h-14 flex flex-row items-center justify-center font-bold"
                href="/about"
              >
                About Us
              </Link>
            </div>
            <br />
            <br />
            <div>
              <h1 className="text-xl sm:text-3xl font-bold mb-5">
                Community Events
              </h1>
              <div className="w-full h-[350px] block sm:hidden overflow-y-scroll py-2">
                {afrobrawlers.map((item, index) => {
                  return (
                    <TournamentCard
                      key={index}
                      title={item.tournamentTitle}
                      host={item.Host}
                      type={item.Type}
                      buttonText="View details"
                      buttonColor="bg-yellow-600"
                      imageUrl={item.url}
                      href={item.href}
                    />
                  );
                })}
              </div>
              <div className="w-full hidden sm:flex flex-row items-center justify-center flex-wrap sm:h-[450px] gap-[5%]">
                {afrobrawlers.map((item, index) => {
                  return (
                    <div key={index} className="w-[45%]">
                      <TournamentCard
                        title={item.tournamentTitle}
                        host={item.Host}
                        type={item.Type}
                        buttonText="View details"
                        buttonColor="bg-yellow-600"
                        imageUrl={item.url}
                        href={item.href}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <br />
            <br />
            <div className="w-full">
              <h1 className="text-xl font-bold mb-5">Notable Members</h1>
              <div className="w-full flex flex-row flex-wrap items-center gap-5">
                {members.map((item, index) => {
                  return (
                    <Popover
                      className="w-1/5 sm:w-[5%]"
                      key={index}
                      content={
                        <div className="flex flex-col">
                          <span>
                            <b>Peak ELO:</b> {item.peak}
                          </span>
                          <span
                            className={`flex items-center gap-2 ${
                              item.rank === "Valhallan"
                                ? "text-indigo-500 font-bold"
                                : ""
                            }`}
                          >
                            <b>Rank:</b>
                            {item.rank}
                          </span>
                          <span
                            className={`${
                              item.role === "Community Moderator"
                                ? "text-green-600"
                                : "text-black"
                            }`}
                          >
                            <b className="text-black">Role:</b> {item.role}
                          </span>
                        </div>
                      }
                      title={
                        <div className="flex items-center justify-between gap-2">
                          <h1 className="font-bold text-xl">{item.name}</h1>
                          {item.rank === "Platinum" ? (
                            <Image
                              src="/plat.png"
                              alt="brawlhalla rank"
                              width={60}
                              height={30}
                              className="absolute right-2 top-2"
                            />
                          ) : item.rank === "Diamond" ? (
                            <Image
                              src="/diamond.png"
                              alt="brawlhalla rank"
                              width={50}
                              height={30}
                              className="absolute right-2 top-2"
                            />
                          ) : item.rank === "Gold" ? (
                            <Image
                              src="/gold.png"
                              alt="brawlhalla rank"
                              width={60}
                              height={30}
                              className="absolute right-2 top-2"
                            />
                          ) : item.rank === "Valhallan" ? (
                            <Image
                              src="/valhallan.webp"
                              alt="brawlhalla rank"
                              width={48}
                              height={30}
                              className="absolute right-2 top-2"
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      }
                    >
                      <div className="flex flex-col items-center justify-center pb-3">
                        <div
                          key={index}
                          className="rounded-full bg-slate-900 w-12 aspect-square flex items-center justify-center text-lg"
                        >
                          👤
                        </div>
                        <span className="text-xs">{item.name}</span>
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
