import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "allium",
    description:
      "Organically grown fresh allium vegetables",
  },
  {
    _id: uuid(),
    categoryName: "fruit",
    description:
      "Organically grown fresh fruits",
  },
  {
    _id: uuid(),
    categoryName: "leafy",
    description:
      "Organically grown fresh leafy vegetables",
  },
  {
    _id: uuid(),
    categoryName: "cruciferous",
    description:
      "Organically grown fresh cruciferous vegetables",
  },
  {
    _id: uuid(),
    categoryName: "marrow",
    description:
      "Organically grown fresh marrow vegetables",
  },
  {
    _id: uuid(),
    categoryName: "root",
    description:
      "Organically grown fresh root vegetables",
  },
];
