import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DrawerAppBar from "@/src/components/DrawerAppBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Amrutvahini college of Pharmacy</title>
        <meta
          name="description"
          content="Amrutvahini College of Pharmacy, P.O. Sangamner S.K.,Tal. Sangamner, Dist. Ahmednagar-422608, Maharashtra, India."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <DrawerAppBar />
    </>
  );
}
