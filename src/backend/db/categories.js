import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
    {
        _id: uuid(),
        categoryName: "Game Play",
    },
    {
        _id: uuid(),
        categoryName: "Strategy",
    },
    {
        _id: uuid(),
        categoryName: "Unboxing",
    },
    {
        _id: uuid(),
        categoryName: "Diy",
    },
    {
        _id: uuid(),
        categoryName: "All time favourites",
    },
];
