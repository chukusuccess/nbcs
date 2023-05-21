import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function September2022() {
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
            1v1 Single Elimination
          </h1>
          <br />
          <Image
            src="/cancelled.png"
            width={1000}
            height={1000}
            alt="brawlhalla"
            className=""
          />
          <br />
          <h1>Event was cancelled due to low turn up</h1>
          <br />
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
