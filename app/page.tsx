import Image from "next/image";
import { ShopList } from "./components/itemList"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white p-24">
      <ShopList/>
    </main>
  );
}
