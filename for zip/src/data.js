import { ShieldCheck, Truck, RotateCcw, Award } from "lucide-react";
import {
  HornIcon, HornPairIcon, MugIcon, ScaleIcon, BasketIcon,
  VaseIcon, BowlIcon, FigurineIcon, BoneIcon, SparkleIcon,
} from "./components/Icons.jsx";

export const categories = [
  { name: "Viking Horn", icon: HornIcon, image: "/images/categories/viking-horn.jpg" },
  { name: "Scales", icon: ScaleIcon, image: "/images/categories/scales.jpg" },
  { name: "Ram's Horn", icon: HornIcon, image: "/images/categories/rams-horn.jpg" },
  { name: "Horn & Bone Items", icon: BoneIcon, image: "/images/categories/horn-bone-items.jpg" },
  { name: "Rattan Products", icon: BasketIcon, image: "/images/categories/rattan-products.jpg" },
  { name: "Resin Products", icon: FigurineIcon, image: "/images/categories/resin-products.jpg" },
  { name: "Wooden Products", icon: BowlIcon, image: "/images/categories/wooden-products.jpg" },
  { name: "Ceramic Products", icon: VaseIcon, image: "/images/categories/ceramic-products.jpg" },
  { name: "Horn Product", icon: MugIcon, image: "/images/categories/horn-product.jpg" },
  { name: "New Arrivals", icon: SparkleIcon, image: "/images/categories/new-arrivals.jpg" },
];

/* Featured 5, shown on the homepage */
export const products = [
  { name: "Shofar Ram Horn", price: "$34.00", icon: HornIcon, category: "Ram's Horn", image: "/images/products/shofar-ram-horn.jpg" },
  { name: "Kosher Polish Shofar Ram's Horn", price: "$7.00", icon: HornIcon, category: "Ram's Horn", image: "/images/products/kosher-polish-shofar.jpg" },
  { name: "Ram's Horn", price: "$8.00", icon: HornIcon, category: "Ram's Horn", image: "/images/categories/rams-horn.jpg" },
  { name: "Ram's Horn Pair", price: "$50.00", icon: HornPairIcon, category: "Ram's Horn", image: "/images/products/rams-horn-pair.jpg" },
  { name: "Horn Mug", price: "$18.00", icon: MugIcon, category: "Horn Product", image: "/images/products/horn-mug.jpg" },
];

/* Full shop catalog */
export const allProducts = [
  ...products,
  { name: "Viking Drinking Horn", price: "$29.00", icon: HornIcon, category: "Viking Horn", isNew: true, image: "/images/products/viking-drinking-horn.jpg" },
  { name: "Engraved Viking Horn", price: "$42.00", icon: HornIcon, category: "Viking Horn", isNew: true, image: "/images/products/engraved-viking-horn.jpg" },
  { name: "Brass Balance Scale", price: "$65.00", icon: ScaleIcon, category: "Scales", image: "/images/products/brass-balance-scale.jpg" },
  { name: "Vintage Weighing Scale", price: "$58.00", icon: ScaleIcon, category: "Scales", image: "/images/products/vintage-weighing-scale.jpg" },
  { name: "Carved Bone Pendant", price: "$14.00", icon: BoneIcon, category: "Horn & Bone Items", isNew: true, image: "/images/products/carved-bone-pendant.jpg" },
  { name: "Bone Inlay Box", price: "$36.00", icon: BoneIcon, category: "Horn & Bone Items", image: "/images/products/bone-inlay-box.jpg" },
  { name: "Woven Rattan Basket", price: "$22.00", icon: BasketIcon, category: "Rattan Products", image: "/images/products/woven-rattan-basket.jpg" },
  { name: "Rattan Storage Set (2 pc)", price: "$38.00", icon: BasketIcon, category: "Rattan Products", isNew: true, image: "/images/products/rattan-storage-set.jpg" },
  { name: "Resin Figurine", price: "$26.00", icon: FigurineIcon, category: "Resin Products", image: "/images/products/resin-figurine.jpg" },
  { name: "Resin Decor Bowl", price: "$31.00", icon: FigurineIcon, category: "Resin Products", image: "/images/products/resin-decor-bowl.jpg" },
  { name: "Wooden Serving Bowl", price: "$24.00", icon: BowlIcon, category: "Wooden Products", image: "/images/products/wooden-serving-bowl.jpg" },
  { name: "Hand-Carved Wooden Tray", price: "$27.00", icon: BowlIcon, category: "Wooden Products", isNew: true, image: "/images/products/hand-carved-wooden-tray.jpg" },
  { name: "Ceramic Vase Duo", price: "$33.00", icon: VaseIcon, category: "Ceramic Products", image: "/images/products/ceramic-vase-duo.jpg" },
  { name: "Matte Ceramic Vase", price: "$21.00", icon: VaseIcon, category: "Ceramic Products", isNew: true, image: "/images/products/matte-ceramic-vase.jpg" },
];

export const newArrivals = allProducts.filter((p) => p.isNew);

export const features = [
  { icon: Award, title: "Premium Quality", subtitle: "Finest Handcrafted Products" },
  { icon: ShieldCheck, title: "Secure Shopping", subtitle: "100% Safe & Secure" },
  { icon: Truck, title: "Worldwide Shipping", subtitle: "Fast & Reliable Delivery" },
  { icon: RotateCcw, title: "Easy Returns", subtitle: "Hassle Free Returns" },
];
