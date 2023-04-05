import Image from "next/image";
import React from "react";
import Container from "./container";

import collectionOne from "public/img/bogc1.png";
import collectionTwo from "public/img/unickLogo.png";
import BOGC from "public/img/bogc.gif";
import unickMember from "public/img/unickMember.jpg";

export default function Collections() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col items-center justify-between w-full h-full bg-gray-400 px-14 rounded-2xl py-14 dark:bg-gray-700">
          <Image 
          className="align-middle"
          src={BOGC}
          width="400"
          height="500"
          alt="blockheads"
          />
            <Avatar
              image={collectionOne}
              name="Blockheads OG Club"
              title="UnickLabs"
              alt="blockheads"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center justify-between w-full h-full bg-gray-300 px-14 rounded-2xl py-14 dark:bg-gray-500">
          <Image 
          className="ml-4"
          src={unickMember}
          width="340"
          height="400"
          alt="blockheads"
          />
            <Avatar
              image={collectionTwo}
              name="Unick Membership Card"
              title="Unick.io"
              alt="blockheads"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col items-center justify-between w-full h-full bg-gray-400 px-14 rounded-2xl py-14 dark:bg-gray-700">
            <p className="text-2xl leading-normal ">
              Apply for <Mark>Launchpad</Mark> and your collection will appear here!
            </p>

            <Avatar
              image={collectionTwo}
              name="Your Collection"
              title="Apply for launchpad"
              alt="blockheads"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-purple-800 bg-purple-100 rounded-md ring-purple-100 ring-4 dark:ring-purple-900 dark:bg-purple-900 dark:text-purple-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
