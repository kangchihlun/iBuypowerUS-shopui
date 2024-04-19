import Image from "next/image";
import { ShopList } from "./components/itemList"

export default function Home() {
  return (
    <>
      <div id="items" className="py-16 bg-white md:py-44 lg:py-40">
            <div className="px-5 md:px-10">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="mx-auto w-full max-w-3xl">
                        <div className="text-center">
                            <div className="mx-auto font-bold mt-4 max-w-[528px] mb-8 md:mb-12 lg:mb-16">
                                <h2 className="text-3xl text-black">Best Seller Gaming PC</h2>
                                <p className="text-lg text-black">Prebuilt & Custom</p>
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                    <ShopList/>
                </div>
            </div>
        </div>
    </>
    
  );
}
