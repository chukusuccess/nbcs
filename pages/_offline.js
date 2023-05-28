import Head from "next/head";

export default function Offline() {
  return (
    <>
      <Head>
        <title>NBCS</title>
        <meta
          name="description"
          content="Nigerian Brawlhalla Championship Series"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="flex flex-col items-center justify-center w-full h-screen bg-black text-white">
          <div className="flex flex-col justify-center items-center px-4 sm:px-20 w-full h-full text-black text-2xl">
            <h1>
              No network! 😒
              <br />
              Abeg check your internet connection.
            </h1>
          </div>
        </section>
      </main>
    </>
  );
}
