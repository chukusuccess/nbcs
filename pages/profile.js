import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import User from "../components/model/user";
import { BhApiService } from "../components/tools/tools";

export default function Profile() {
  const currentUser = new User("Dixit", 3532085, "sn");

  const [stats, setStats] = useState(null);
  const [ranked, setRanked] = useState(null);
  const [a, setA] = useState({});

  const router = useRouter();
  const bhid = router.query.param1;

  useEffect(() => {
    let test = JSON.parse(localStorage.getItem("nd"));
    setA(test);
    console.log(a, "fezfz");

    const getData = async () => {
      // put the brawlhalla functions here but as arrow functions

      const statResponse = await BhApiService.GetDataByBhid(
        router.query.param1
      );
      const rankedResponse = await BhApiService.GetRankedDataByBhid(
        router.query.param1
      );

      setStats(statResponse.data);
      setRanked(rankedResponse.data);

      console.log(statResponse.data.name, "the response");
      console.log(rankedResponse.data.data.rating);
      console.log(router.query.param1, "router");
    };

    getData();

    // BhApiService.GetDataByBhid(userInstance.bhid).then(response => userInstance.stats = response).then(response => {console.log(response.name)}),
    // BhApiService.GetRankedDataByBhid(userInstance.bhid).then(response => userInstance.ranked = response).then(response => {console.log(response.tier)})
  }, []);

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
              {a?.bhid}
            </p>
          </div>

          <div className="flex flex-col w-full items-center gap-2">
            <label htmlFor="bhname">In game name :</label>
            <p id="bhname" className="flex flex-col w-full items-center gap-2">
              {stats?.name}
            </p>
          </div>

          <div className="flex flex-col w-full items-center gap-2">
            <label htmlFor="rating">Current Rating :</label>
            <p
              id="rating"
              className="flex flex-col w-full items-center gap-2 bg-blue-500"
            >
              {ranked?.data.rating}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
