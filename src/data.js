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

export const products = [
  { name: "Shofar Ram Horn", price: "$34.00", icon: HornIcon },
  { name: "Kosher Polish Shofar Ram's Horn", price: "$7.00", icon: HornIcon },
  { name: "Ram's Horn", price: "$8.00", icon: HornIcon },
  { name: "Ram's Horn Pair", price: "$50.00", icon: HornPairIcon },
  { name: "Horn Mug", price: "$18.00", icon: MugIcon },
];

export const features = [
  { icon: Award, title: "Premium Quality", subtitle: "Finest Handcrafted Products" },
  { icon: ShieldCheck, title: "Secure Shopping", subtitle: "100% Safe & Secure" },
  { icon: Truck, title: "Worldwide Shipping", subtitle: "Fast & Reliable Delivery" },
  { icon: RotateCcw, title: "Easy Returns", subtitle: "Hassle Free Returns" },
];
