import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { BhApiService } from "../components/tools/tools";
import { Table } from "@nextui-org/react";

export default function Profile() {
  // router init
  const router = useRouter();

  //Setting up the table

  const columns = [
    {
      key: "rank",
      label: "Rank",
    },
    {
      key: "tier",
      label: "Tier",
    },
    {
      key: "name",
      label: "Name",
    },
    {
      key: "games",
      label: "Games",
    },
    {
      key: "wins",
      label: "Wins",
    },
    {
      key: "elo",
      label: "Elo",
    },
  ];

  // useState(s)
  const [listPlayerStat, setPlayerStat] = useState([]);
  const [listRankedStat, setRankedStat] = useState([]);
  const [rows, setRow] = useState([
    { rank: "N/A", tier: "N/A", name: "unknown", games: 0, wins: 0, elo: 0 },
  ]);

  // this list will be returned by the backend API with firebase, i'll use it for dev purposes:
  const playerids = [3532085];

  // sort by elo:
  // l.sort((a, b) => a.elo - b.elo);
  // tests

  let dummyData = [
    {
      rank: 1,
      tier: "Platinium",
      name: "unknown1",
      games: 0,
      wins: 0,
      elo: 2000,
    },
    {
      rank: 2,
      tier: "Diamond",
      name: "unknown2",
      games: 0,
      wins: 0,
      elo: 1800,
    },
    {
      rank: 3,
      tier: "Diamond",
      name: "unknown3",
      games: 0,
      wins: 0,
      elo: 1900,
    },
  ];

  dummyData = dummyData.map((obj, index) => ({
    ...obj,
    key: index + 1,
  }));

  // useEffect

  useEffect(() => {
    const getData = async () => {
      let PlayerStatPromises = [];
      let RankedStatPromises = [];

      playerids.forEach((playerid) => {
      //   PlayerStatPromises.push(BhApiService.getStatsByBhid(playerid));
        RankedStatPromises.push(BhApiService.getRankedDataByBhid(playerid));
      });

      await Promise.all(PlayerStatPromises).then((response) => {
        setPlayerStat(response?.data);
      });
      await Promise.all(RankedStatPromises).then((response) => {
        setRankedStat(response?.data);
        });
    };

    // waiting for router
    if (router.isReady) {
      getData();
    }
  }, [router.isReady]);

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
        <section>
          <Table
            aria-label="Dynamic table"
            css={{
              height: "auto",
              minWidth: "100%",
            }}
          >
            <Table.Header columns={columns}>
              {(column) => (
                <Table.Column key={column.key}>{column.label}</Table.Column>
              )}
            </Table.Header>
            <Table.Body items={dummyData}>
              {(item) => (
                <Table.Row key={item.key}>
                  {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        </section>
      </main>
    </>
  );
}
