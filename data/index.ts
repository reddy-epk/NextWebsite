import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Quiz Application",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "PodSify",
    des: "Take control of your podcast experience with my powerful React app. ",
    img: "https://res.cloudinary.com/dqfqwre2q/image/upload/v1718218039/posifyme.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "https://res.cloudinary.com/dqfqwre2q/image/upload/v1718819438/jsim_ver3hl.jpg",
    ],
    link: "https://github.com/reddy-epk/podistry",
    live: "https://podsify.ccbp.tech/",
  },
  {
    id: 2,
    title: "NxtMart",
    des: "Log-in, Browse, search & buy high-quality food products. Easy login & cool features make shopping a delight.",
    img: "https://res.cloudinary.com/dqfqwre2q/image/upload/v1718818559/NxtMart.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "https://res.cloudinary.com/dqfqwre2q/image/upload/v1718819186/Gemini_Generated_Image_1zidw91zidw91zid_trz0fh.jpg",
    ],
    link: "https://github.com/reddy-epk/NxtMart",
    live: "https://pknxtmart.ccbp.tech/",
  },
    {
    id: 3,
    title: "Chartify",
    des: "A Software that creates charts with data.",
    img: "https://res.cloudinary.com/dqfqwre2q/image/upload/v1719497743/Screenshot_2721_mayr6h.png",
    iconLists: ["/re.svg", "/tail.svg",],
    link: "https://github.com/reddy-epk/chartify",
    live: "https://chartify.ccbp.tech/",
  },
  {
    id: 4,
    title: "NxtTrendz",
    des: "Shop the latest trends with a seamless experience - fashion e-commerce app.",
    img: "https://res.cloudinary.com/dqfqwre2q/image/upload/v1718817240/nxtrendz.png",
    iconLists: [
      "/re.svg",
      "https://res.cloudinary.com/dqfqwre2q/image/upload/v1718819186/Gemini_Generated_Image_1zidw91zidw91zid_trz0fh.jpg",
      "/tail.svg",
    ],
    link: "https://github.com/reddy-epk/NXTRENDZ",
    live: "https://epknxttrendz.ccbp.tech/",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/reddy-epk",
  },

  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/reddyepk/",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dqfqwre2q/image/upload/v1719740455/gotoepk.jpg",
    link: "https://wa.me/7660861957",
  },
];
