'use client'
import Head from "next/head";
import Hero from "app/components/hero";
import Navbar from "app/components/navbar";
import SectionTitle from "app/components/sectionTitle";
import { benefitOne, benefitTwo } from "app/components/data";
import Benefits from "app/components/benefits";
import Footer from "app/components/footer";
import Collections from "app/components/collections";
import Cta from "app/components/cta";
import Video from "app/components/video";
import FAQ from "app/components/faq";
import PopupWidget from "app/components/popupWidget";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <>
      <Head>
        <title>Unick.io multi-chain NFT marketplace aggregator & NFT launchpad</title>
        <meta
          name="description"
          content="Unick.io powerful marketplace aggregator, NFT launchpad, staking, and minting platform, 
          is a one-stop-shop for all things NFTs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Unick Benefits"
        title=" Why should you use Unick.io">
        Unick.io is a revolutionary multi-chain NFT platform that provides users with a seamless and secure way to buy, sell, trade, and 
        collect NFTs across multiple blockchains. With its powerful marketplace aggregator, NFT launchpad, staking, and minting capabilities, 
        Unick.io is a one-stop-shop for all things NFTs.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Latest Drop"
        title="Minting now">
        Unick Membership Card NFT allows users early access to all upcoming mints, discount prices for NFTs and much more.
        Have we mentioned a Unick token airdrop yet? Stay tuned for more info. <br />
        Hit the play button to view it!
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="NFT Collections"
        title="Collections Launched with Unick">
        Our launchpad is a great way to increase your collections trust and build awareness.
      </SectionTitle>
      <Collections />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <FAQ />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
