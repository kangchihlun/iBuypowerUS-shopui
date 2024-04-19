import Image from "next/image";
import { ShopList } from "./components/itemList"

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center text bg-white p-24">
        <div className="text-center text-xl font-bold text-black leading-loose pt-12 pl-28 pr-28 pb-2">Best Selling Gaming PC</div>
        <div className="text-center text-xl font-bold text-black leading-tight mt-36 ml-20 w-274 h-33">Prebuilt & Custom</div>
        <ShopList/>
      </div>
      
    </>
    
  );
}
