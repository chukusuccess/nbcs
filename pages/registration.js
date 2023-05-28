import { useState } from "react";
import Head from "next/head";

export default function RegistrationPage() {
  const [username, setUsername] = useState("");
  const [bhid, setBhid] = useState("");
  const [password, setPassword] = useState("");

  const handleclick = (e) => {
    e.preventDefault();
    const data = { username: username, bhid: bhid, password: password };

    fetch(`https://brawlhalla.fly.dev/v1/stats/id?brawlhalla_id=${data.bhid}`)
      .then( (response) => {
        console.log(response)
        return response;
      })
    console.log(data.bhid);
  };

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
        <section className="flex flex-col items-center justify-center bg-black text-white text:lg sm:text-3xl w-full min-h-screen gap-5 px-5 py-8">
          <div className="flex flex-col items-center justify-center bg-black text-white text:lg sm:text-3xl w-full h-full">
            <form className="flex flex-col items-center justify-center w-full space-y-5">
              <div className="flex flex-col w-full items-center gap-2">
                <label htmlFor="usrname">Username:</label>
                <input
                  type="text"
                  id="usrname"
                  name="usrname"
                  className="w-full h-16 rounded-xl text-xl sm:w-1/3"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col w-full items-center gap-2">
                <label htmlFor="bhid">Brawlhalla ID:</label>
                <input
                  type="text"
                  id="bhid"
                  name="bhid"
                  className="w-full h-16 rounded-xl text-xl sm:w-1/3"
                  onChange={(e) => setBhid(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col w-full items-center gap-2">
                <label htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  id="pwd"
                  name="pwd"
                  className="w-full h-16 rounded-xl text-xl sm:w-1/3"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                className="w-full sm:w-1/3 h-16 rounded-xl bg-yellow-500"
                onClick={(e) => handleclick(e)}
              >
                Register
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
