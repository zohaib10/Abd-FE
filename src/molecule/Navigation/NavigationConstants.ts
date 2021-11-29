import { Links } from ".";

export const NavigationLinks: Links[] = [
  { name: "Home", link: "/" },
  {
    name: "Mens",
    children: [
      { name: "Clothes", link: "/mens/clothes" },
      { name: "Shoes", link: "/mens/shoes" },
      { name: "Accessories", link: "/mens/accessories" },
    ],
  },
  {
    name: "Womens",
    children: [
      { name: "Clothes", link: "/womens/clothes" },
      { name: "Shoes", link: "/womens/shoes" },
      { name: "Accessories", link: "/womens/accessories" },
    ],
  },
];
