import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DocumentTextIcon,
  AdjustmentsIcon,
  CurrencyDollarIcon,
  FastForwardIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "public/img/benefit-one.png";
import benefitTwoImg from "public/img/benefit-two.png";

const benefitOne = {
  title: "For Noobies, Flippers & Collectors",
  desc: "Regardless to your experience, Unick.io is the marketplace of your choice. All major markets and blockchains are available to you instantly. No nonsense charts, graphs, or gimmicks, just a simple to use, intuitive interface that delivers best experience. ",
  image: benefitOneImg,
  bullets: [
    {
      title: "User Friendly Interface",
      desc: "Unick.io offers user friendly, intuitive interface.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "All markets and major blockchains in one place",
      desc: "Eliminated the need of switching between different marketplaces.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "One click token wrapper",
      desc: "Make offers on NFTs or collection with 1-click token wrapping.",
      icon: <CursorClickIcon />,
    },
    {
      title: "Instant( Flash) Sell",
      desc: "Sell your NFTs with one-click of the button.",
      icon: <FastForwardIcon />,
    },
  ],
};

const benefitTwo = {
  title: "For Artists and Creators",
  desc: "You can get your NFT collection of the ground in no time and no up-front costs. Easy on-boarding process and no code solution. You are an artist not a coder, so we will all of the hard lifting for you!",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Smart Contracts Covered",
      desc: "We will create ERC721 or ERC1155 smart contract if required.",
      icon: <DocumentTextIcon />,
    },
    {
      title: "Easy On-boarding Process",
      desc: "No coding experience needed, we will do all of the hard work for you.",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Low Minting Fees",
      desc: "Our minting fees are on average 25% lower than competitors. ",
      icon: <CurrencyDollarIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
