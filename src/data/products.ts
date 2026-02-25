import maheshwariImg from "@/assets/product-maheshwari.webp";
import ikatImg from "@/assets/product-ikat.webp";
import chanderiImg from "@/assets/product-chanderi.webp";
import banarasiImg from "@/assets/product-banarasi.webp";
import kalamkariImg from "@/assets/product-kalamkari.webp";
import type { Product } from "@/store/cartStore";

export const products: Product[] = [
  {
    id: "1",
    name: "Maheshwari Silk Saree",
    price: 12500,
    image: maheshwariImg,
    category: "Sarees",
    artisan: "Rajan Malviya, Maheshwar",
    description: "Hand-woven Maheshwari silk with traditional reversible border and zari work.",
  },
  {
    id: "2",
    name: "Ikat Dress Material",
    price: 4800,
    image: ikatImg,
    category: "Dress Materials",
    artisan: "Lakshmi Devi, Pochampally",
    description: "Double ikat handloom fabric in indigo, resist-dyed with natural colors.",
  },
  {
    id: "3",
    name: "Chanderi Cotton Dupatta",
    price: 3200,
    image: chanderiImg,
    category: "Dupattas",
    artisan: "Amina Bi, Chanderi",
    description: "Lightweight Chanderi cotton with shimmering gold buttis and tissue borders.",
  },
  {
    id: "4",
    name: "Banarasi Silk Stole",
    price: 8900,
    image: banarasiImg,
    category: "Stoles",
    artisan: "Mohammad Irfan, Varanasi",
    description: "Pure silk Banarasi stole with intricate jangla pattern and zari highlights.",
  },
  {
    id: "5",
    name: "Kalamkari Table Runner",
    price: 2400,
    image: kalamkariImg,
    category: "Home Decor",
    artisan: "Padma Rao, Srikalahasti",
    description: "Hand-painted Kalamkari on cotton using natural vegetable dyes.",
  },
  {
    id: "6",
    name: "Pochampally Ikat Saree",
    price: 9500,
    image: ikatImg,
    category: "Sarees",
    artisan: "Suresh Kumar, Pochampally",
    description: "Geometric double-ikat silk saree in teal and orange, a GI-tagged masterpiece.",
  },
];
