import Image from "next/image";
import Container from "./container";
import heroImg from "public/img/hero.png";

export default function Hero() {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Unick.io multi-chain NFT Aggregator<br /> & NFT Launchpad 
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Unick.io is a platform for NFTs that operates across multiple blockchains, including Ethereum, Polygon, Arbitrum, Optimism, and more. 
            It offers users a secure and seamless way to buy, sell, trade, and collect NFTs.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://marketplace.unick.io"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-purple-600 rounded-md ">
                Visit Marketplace
              </a>
              <a
                href="https://launchpad.unick.io"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-purple-600 rounded-md ">
                Go To Launchpad
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              alt="Hero Illustration"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-2xl text-center text-gray-700 dark:text-white">
            Built with <span className="text-purple-600">trusted</span>{" "}
            web3 technology providers.
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-6 md:justify-around bg-gray-300 rounded-2xl">
          <div className="pt-1 text-gray-400 dark:text-gray-400 mt-16">
            <Image
              src="/img/wagmiLogo.svg"
              width="200"
              height="100"
              alt="wagmi"
              />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400 mb-4">
            <Image
              src="/img/thirdweb.svg"
              width="220"
              height="200"
              alt="thirdweb"
            />
            </div>
            <div className="text-gray-400 dark:text-gray-400 mt-16">
            <Image
              src="/img/reservoir.svg"
              width="230"
              height="70"
              alt="reservoir"
            />
            </div>
            <div className="text-gray-400 dark:text-gray-400 mt-16 mb-16">
            <Image
              src="/img/alchemy.svg"
              width="200"
              height="200"
              alt="alchemy"
            />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}







