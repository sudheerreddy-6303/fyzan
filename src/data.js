import { ShieldCheck, Truck, RotateCcw, Award } from "lucide-react";
import { categoryImages, productImages } from "./imageUrls.js";

export const categories = [
  { name: "Viking Horn", image: categoryImages.vikingHorn },
  { name: "Scales", image: categoryImages.scales },
  { name: "Ram's Horn", image: categoryImages.ramsHorn },
  { name: "Horn & Bone Items", image: categoryImages.hornBone },
  { name: "Rattan Products", image: categoryImages.rattan },
  { name: "Resin Products", image: categoryImages.resin },
  { name: "Wooden Products", image: categoryImages.wooden },
  { name: "Ceramic Products", image: categoryImages.ceramic },
  { name: "Horn Product", image: categoryImages.hornProduct },
  { name: "New Arrivals", image: categoryImages.newArrivals },
];

/* Featured 5, shown on the homepage */
export const products = [
  { name: "Shofar Ram Horn", price: "$34.00", category: "Ram's Horn", image: productImages.shofarRamHorn },
  { name: "Kosher Polish Shofar Ram's Horn", price: "$7.00", category: "Ram's Horn", image: productImages.kosherPolishShofar },
  { name: "Ram's Horn", price: "$8.00", category: "Ram's Horn", image: productImages.ramsHorn },
  { name: "Ram's Horn Pair", price: "$50.00", category: "Ram's Horn", image: productImages.ramsHornPair },
  { name: "Horn Mug", price: "$18.00", category: "Horn Product", image: productImages.hornMug },
];

/* Full shop catalog */
export const allProducts = [
  ...products,
  { name: "Viking Drinking Horn", price: "$29.00", category: "Viking Horn", isNew: true, image: productImages.vikingDrinkingHorn },
  { name: "Engraved Viking Horn", price: "$42.00", category: "Viking Horn", isNew: true, image: productImages.engravedVikingHorn },
  { name: "Brass Balance Scale", price: "$65.00", category: "Scales", image: productImages.brassBalanceScale },
  { name: "Vintage Weighing Scale", price: "$58.00", category: "Scales", image: productImages.vintageWeighingScale },
  { name: "Carved Bone Pendant", price: "$14.00", category: "Horn & Bone Items", isNew: true, image: productImages.carvedBonePendant },
  { name: "Bone Inlay Box", price: "$36.00", category: "Horn & Bone Items", image: productImages.boneInlayBox },
  { name: "Woven Rattan Basket", price: "$22.00", category: "Rattan Products", image: productImages.wovenRattanBasket },
  { name: "Rattan Storage Set (2 pc)", price: "$38.00", category: "Rattan Products", isNew: true, image: productImages.rattanStorageSet },
  { name: "Resin Figurine", price: "$26.00", category: "Resin Products", image: productImages.resinFigurine },
  { name: "Resin Decor Bowl", price: "$31.00", category: "Resin Products", image: productImages.resinDecorBowl },
  { name: "Wooden Serving Bowl", price: "$24.00", category: "Wooden Products", image: productImages.woodenServingBowl },
  { name: "Hand-Carved Wooden Tray", price: "$27.00", category: "Wooden Products", isNew: true, image: productImages.handCarvedWoodenTray },
  { name: "Ceramic Vase Duo", price: "$33.00", category: "Ceramic Products", image: productImages.ceramicVaseDuo },
  { name: "Matte Ceramic Vase", price: "$21.00", category: "Ceramic Products", isNew: true, image: productImages.matteCeramicVase },
];

export const newArrivals = allProducts.filter((p) => p.isNew);

export const features = [
  { icon: Award, title: "Premium Quality", subtitle: "Finest Handcrafted Products" },
  { icon: ShieldCheck, title: "Secure Shopping", subtitle: "100% Safe & Secure" },
  { icon: Truck, title: "Worldwide Shipping", subtitle: "Fast & Reliable Delivery" },
  { icon: RotateCcw, title: "Easy Returns", subtitle: "Hassle Free Returns" },
];
