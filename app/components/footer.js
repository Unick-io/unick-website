import Link from "next/link";
import React from "react";
import Container from "./container";
import { SocialIcon } from 'react-social-icons';
import Image from "next/image";

export default function Footer() {

  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-gray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link href="/">
                <div className="flex items-center space-x-2 text-2xl font-medium text-black-500 dark:text-gray-100">
                  <span>
                    <Image
                      src="/img/unickLogo.png"
                      alt="N"
                      width="32"
                      height="32"
                      className="w-8"
                    />
                  </span>
                  <span>Unick.io</span>
                </div>
              </Link>
            </div>
            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
            Unick.io is a platform for NFTs that operates across multiple blockchains, including Ethereum, Polygon, Arbitrum, Optimism, and Goerli testnet. 
            It offers users a secure and seamless way to buy, sell, trade, and collect NFTs. With its NFT launchpad, staking, and minting capabilities, 
            as well as a powerful marketplace aggregator, it is the ultimate destination for all NFT enthusiasts.       
            {''}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
            <ul className="cursor-pointer">
          <li>
            <Link href="/" id="home">
              <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none dark:focus:bg-gray-700">
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link href="https://marketplace.unick.io" id="marketplace">
              <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none dark:focus:bg-gray-700">
                Marketplace
              </div>
            </Link>
          </li>

          <li>
            <Link href="launchpad.unick.io" id="launchpad">
              <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none dark:focus:bg-gray-700">
                Launchpad
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about" id="about">
              <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none dark:focus:bg-gray-700">
                About
              </div>
            </Link>
          </li>
          <li>
            <Link href="/blog" id="blog">
              <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none dark:focus:bg-gray-700">
                Blog
              </div>
            </Link>
          </li>
        </ul>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
            <ul className="cursor-pointer">
          <li>
            <Link href="https://docs.unick.io" id="documentation">
              <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none dark:focus:bg-gray-700">
                Docs
              </div>
            </Link>
          </li>
          <li>
            <Link href="/terms" id="terms & conditions">
              <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none dark:focus:bg-gray-700">
                Terms
              </div>
            </Link>
          </li>

          <li>
            <Link href="/policy" id="privacy policy">
              <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none dark:focus:bg-gray-700">
                Privacy Policy
              </div>
            </Link>
          </li>
        </ul>
            </div>
          </div>
          <div>
            <div>Follow our socials</div>
              <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <Link legacyBehavior href="https://twitter.com/unick_io">
                <a>
                <SocialIcon network="twitter" style={{ height: 24, width: 24 }} key="a" target="_blank" />
                </a>
              </Link>
              <Link legacyBehavior href="https://www.instagram.com/unick_io/">
                <a>
                <SocialIcon network="instagram" style={{ height: 24, width: 24 }} key="b" target="_blank" />
                </a>
              </Link>
              <Link legacyBehavior href="https://discord.gg/gpnzJXBG8m">
                <a>
                <SocialIcon network="discord" style={{ height: 24, width: 24 }} key="c" target="_blank" />
                </a>
              </Link>         
            </div>
          </div>
        </div>
        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by UnickLabs. <br />

          Illustrations from{" "}
          <div
            href="https://www.glazestock.com/"
            target="_blank"
            rel="noopener ">
            Glazestock
          </div>
        </div>
      </Container>

    </div>
  );
}