import Head from "next/head";
import PackCard from "../components/PackCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dead by Daylight Icons</title>
        <meta name="description" content="DbD-Icons" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "30px" }}
      >
        <h1
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "300",
            textAlign: 'center',
            textTransform: "uppercase",
          }}
        >
          Dead by Daylight Icons
        </h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "10px",
            justifyItems: 'center'
          }}
        >
          <PackCard title={"Hyrelia's Celestial Pack"} author={"Joewb + Hyrelia"} preview={"/Joewb1-Hyrelia-Hyrelia_s_Celestial_Pack/preview.png"} download={"/Joewb1-Hyrelia-Hyrelia_s_Celestial_Pack/pack.rar"}/>
          <PackCard title={"Simple Border (Colored)"} author={"EvaZioNe"} preview={"/EvaZioNe-Simple_Border_Colored/preview.png"} download={"/EvaZioNe-Simple_Border_Colored/pack.rar"}/>
        </div>
      </div>
    </>
  );
}
