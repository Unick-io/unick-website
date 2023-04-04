'use client'
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";


export default function Navbar() {

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}

            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <div className="flex items-center space-x-2 text-2xl font-medium text-black-500 dark:text-gray-100">
                    <span>
                      <img
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
            </>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex cursor-pointer">
          <li>
            <Link href="https://marketplace.unick.io" id="marketplace">
              <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none dark:focus:bg-gray-700">
                Marketplace
              </div>
            </Link>
          </li>
          <li>
            <Link href="https://launchpad.unick.io" id="launchpad">
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
            <li>
            <Link href="/" id="merchandise">
              <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none dark:focus:bg-gray-700">
                Merch (coming soon)
              </div>
            </Link>
          </li>
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link href="https://docs.unick.io"
                target="_blank"
                rel="window">
            <div className="px-6 py-2 text-white bg-purple-600 rounded-md md:ml-5">
              View Docs
            </div>
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
