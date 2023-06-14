import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>User Dashboard</title>
      </Head>
      <main className="bg-gray-100 min-h-screen">
        <Header />
        <h1 className="text-black  text-3xl font-bold p-10">
          Hello Next World
        </h1>
      </main>
    </>
  );
}
