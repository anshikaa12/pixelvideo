import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Phone",
    img: "https://res.cloudinary.com/de5it79dw/image/upload/v1648491357/phone_fznttf.png",
    desc1: "Choose the Best Phone",
    desc2: "Watch these videos before you purchase your next phone.",
  },
  {
    _id: uuid(),
    categoryName: "Laptop",
    img: "https://res.cloudinary.com/de5it79dw/image/upload/v1648491384/lap_qyyy4c.png",
    desc1: "Take Expert's Opinion",
    desc2: "Need expert opinion before buying your laptop? Watch these videos.",
  },
  {
    _id: uuid(),
    categoryName: "Tech-News",
    img: "https://res.cloudinary.com/de5it79dw/image/upload/v1650437722/51OBjWrLa0L_hhcj4p.jpg",
    desc1: "Always Be Updated",
    desc2: "Latest updates and news on what's going on in the Tech World.",
  },
  {
    _id: uuid(),
    categoryName: "Tech-Conspiracy",
    img: "https://res.cloudinary.com/de5it79dw/image/upload/v1650437315/image_nwrgjv.jpg",
    desc1: "Know the Unknown",
    desc2: "Watch the Deep, Dark consipracies of the Tech World.",
  },
];
