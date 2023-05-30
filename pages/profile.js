import React from "react";
import Head from "next/head";
import User from "../components/model/user"

export default function Profile() {
  const currentUser = new User("Dixit", 3532085, "sn");
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
        <section className="flex flex-col items-center justify-start text:lg sm:text-3xl w-full min-h-screen gap-5 px-5 py-8">

          <div className="flex flex-col w-full items-center gap-2">
            <label htmlFor="usrname">Username :</label>
            <p id="usrname" className="flex flex-col w-full items-center gap-2">
              {currentUser.username}
            </p>
          </div>

          <div className="flex flex-col w-full items-center gap-2">
            <label htmlFor="bhname">In game name :</label>
            <p id="bhname" className="flex flex-col w-full items-center gap-2">
              {currentUser.stats.name}
            </p>
          </div>

          <div className="flex flex-col w-full items-center gap-2">
            <label htmlFor="rating">Current Rating :</label>
            <p id="rating" className="flex flex-col w-full items-center gap-2">
              {currentUser.ranked.rating}
            </p>
          </div>

        </section>
      </main>
    </>
  );
}
