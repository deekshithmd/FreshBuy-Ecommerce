import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Allium",
    description:
      "Organically grown fresh allium vegetables",
  },
  {
    _id: uuid(),
    categoryName: "Fruit",
    description:
      "Organically grown fresh fruits",
  },
  {
    _id: uuid(),
    categoryName: "Leafy",
    description:
      "Organically grown fresh leafy vegetables",
  },
  {
    _id: uuid(),
    categoryName: "Cruciferous",
    description:
      "Organically grown fresh cruciferous vegetables",
  },
  {
    _id: uuid(),
    categoryName: "Marrow",
    description:
      "Organically grown fresh marrow vegetables",
  },
  {
    _id: uuid(),
    categoryName: "Root",
    description:
      "Organically grown fresh root vegetables",
  },
];
