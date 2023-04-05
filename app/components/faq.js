'use client'
import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-500 hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-purple-100 focus-visible:ring-opacity-75 dark:bg-Gray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-700 bg-white rounded-2xl`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Is it free to launch an NFT collection?",
    answer: "Yes, there is no up-front cost, just 7.5% sales fee.",
  },
  {
    question: "Can you create an NFT smart contract for me?",
    answer: "Yes we can, please get in touch to discuss further.",
  },
  {
    question: "What is a marketplace fee?",
    answer:
      "Marketplace fee is a fixed amount charged for every purchase, currently 0.49%. However all fees will be refunded in Unick token in the near future. The more you trade, the bigger the airdrop.",
  },
  {
    question: "Do you offer technical support? ",
    answer:
        "Users can communicate with the team vis Discord or 'contact us' widget on the website. Creators: depending on the launch package, we can offer anything from launching a smart contract, through minting and staking page to technical support.",
  },
];
