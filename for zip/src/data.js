import { ShieldCheck, Truck, RotateCcw, Award } from "lucide-react";
import {
  HornIcon, HornPairIcon, MugIcon, ScaleIcon, BasketIcon,
  VaseIcon, BowlIcon, FigurineIcon, BoneIcon, SparkleIcon,
} from "./components/Icons.jsx";

export const categories = [
  { name: "Viking Horn", icon: HornIcon },
  { name: "Scales", icon: ScaleIcon },
  { name: "Ram's Horn", icon: HornIcon },
  { name: "Horn & Bone Items", icon: BoneIcon },
  { name: "Rattan Products", icon: BasketIcon },
  { name: "Resin Products", icon: FigurineIcon },
  { name: "Wooden Products", icon: BowlIcon },
  { name: "Ceramic Products", icon: VaseIcon },
  { name: "Horn Product", icon: MugIcon },
  { name: "New Arrivals", icon: SparkleIcon },
];

/* Featured 5, shown on the homepage */
export const products = [
  { name: "Shofar Ram Horn", price: "$34.00", icon: HornIcon, category: "Ram's Horn" },
  { name: "Kosher Polish Shofar Ram's Horn", price: "$7.00", icon: HornIcon, category: "Ram's Horn" },
  { name: "Ram's Horn", price: "$8.00", icon: HornIcon, category: "Ram's Horn" },
  { name: "Ram's Horn Pair", price: "$50.00", icon: HornPairIcon, category: "Ram's Horn" },
  { name: "Horn Mug", price: "$18.00", icon: MugIcon, category: "Horn Product" },
];

/* Full shop catalog */
export const allProducts = [
  ...products,
  { name: "Viking Drinking Horn", price: "$29.00", icon: HornIcon, category: "Viking Horn", isNew: true },
  { name: "Engraved Viking Horn", price: "$42.00", icon: HornIcon, category: "Viking Horn", isNew: true },
  { name: "Brass Balance Scale", price: "$65.00", icon: ScaleIcon, category: "Scales" },
  { name: "Vintage Weighing Scale", price: "$58.00", icon: ScaleIcon, category: "Scales" },
  { name: "Carved Bone Pendant", price: "$14.00", icon: BoneIcon, category: "Horn & Bone Items", isNew: true },
  { name: "Bone Inlay Box", price: "$36.00", icon: BoneIcon, category: "Horn & Bone Items" },
  { name: "Woven Rattan Basket", price: "$22.00", icon: BasketIcon, category: "Rattan Products" },
  { name: "Rattan Storage Set (2 pc)", price: "$38.00", icon: BasketIcon, category: "Rattan Products", isNew: true },
  { name: "Resin Figurine", price: "$26.00", icon: FigurineIcon, category: "Resin Products" },
  { name: "Resin Decor Bowl", price: "$31.00", icon: FigurineIcon, category: "Resin Products" },
  { name: "Wooden Serving Bowl", price: "$24.00", icon: BowlIcon, category: "Wooden Products" },
  { name: "Hand-Carved Wooden Tray", price: "$27.00", icon: BowlIcon, category: "Wooden Products", isNew: true },
  { name: "Ceramic Vase Duo", price: "$33.00", icon: VaseIcon, category: "Ceramic Products" },
  { name: "Matte Ceramic Vase", price: "$21.00", icon: VaseIcon, category: "Ceramic Products", isNew: true },
];

export const newArrivals = allProducts.filter((p) => p.isNew);

export const features = [
  { icon: Award, title: "Premium Quality", subtitle: "Finest Handcrafted Products" },
  { icon: ShieldCheck, title: "Secure Shopping", subtitle: "100% Safe & Secure" },
  { icon: Truck, title: "Worldwide Shipping", subtitle: "Fast & Reliable Delivery" },
  { icon: RotateCcw, title: "Easy Returns", subtitle: "Hassle Free Returns" },
];
