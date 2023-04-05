'use client'
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export default function Navbar() {
  const navigation = [
    "Marketplace",
    "Launchpad",
    "About",
    "Blog",
  ];
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link legacyBehavior href="/">
                  <a className="flex items-center space-x-2 text-2xl font-medium text-black-500 dark:text-gray-100">
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
                  </a>
                </Link>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                  <ul>
                    <li>
                      <Link href="https://marketplace.unick.io" id="marketplace">
                        <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none dark:focus:bg-trueGray-700">
                          Marketplace
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://launchpad.unick.io" id="launchpad">
                        <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none dark:focus:bg-trueGray-700">
                          Launchpad
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" id="about">
                        <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none dark:focus:bg-trueGray-700">
                          About
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" id="blog">
                        <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none dark:focus:bg-trueGray-700">
                          Blog
                        </div>
                      </Link>
                      </li>
                      <li>
                      <Link href="/" id="merchandise">
                        <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none dark:focus:bg-trueGray-700">
                          Merch (coming soon)
                        </div>
                      </Link>
                    </li>
                  </ul>
                    <Link legacyBehavior href="https://docs.unick.io">
                      <a className="w-full px-6 py-2 mt-3 text-center text-white bg-purple-600 rounded-md lg:ml-5">
                        View Docs
                      </a>
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex cursor-pointer">
          <li>
            <Link href="https://marketplace.unick.io" id="marketplace">
              <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none dark:focus:bg-trueGray-700">
                Marketplace
              </div>
            </Link>
          </li>
          <li>
            <Link href="https://launchpad.unick.io" id="launchpad">
              <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none dark:focus:bg-trueGray-700">
                Launchpad
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about" id="about">
              <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none dark:focus:bg-trueGray-700">
                About
              </div>
            </Link>
          </li>
          <li>
            <Link href="/blog" id="blog">
              <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none dark:focus:bg-trueGray-700">
                Blog
              </div>
            </Link>
            </li>
            <li>
            <Link href="/" id="merchandise">
              <div className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-purple-500 focus:text-purple-500 focus:bg-purple-100 focus:outline-none dark:focus:bg-trueGray-700">
                Merch (coming soon)
              </div>
            </Link>
          </li>
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link legacyBehavior 
                href="https://docs.unick.io"
                target="_blank"
                rel="window">
            <a className="px-6 py-2 text-white bg-purple-600 rounded-md md:ml-5">
              View Docs
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
}