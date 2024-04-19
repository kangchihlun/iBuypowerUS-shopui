'use client'
import { ShopItem,ShopItemParams } from "./item"
import { Product,mock_data } from "../../utils/fake_data"
import { useState } from "react";

export function ShopList() {
    const [page,setPage] = useState(0);
    const handleAddToCart = async (name:string) => {
        console.log(`${name} added to cart `);
    };
    const prodlist:Product[] = mock_data();

    const shopItemProps: ShopItemParams[] = prodlist.map((product) => ({
        prod: product,
        submitFunction: handleAddToCart,
    }));

    const leftClicked = () => {
        let currpage = page;
        setPage(currpage-1);
    }
    const rightClicked = () => {
        let currpage = page;
        setPage(currpage+1);
    }

    return (
        <>
            <div className="flex h-12 justify-end items-center px-4 mb-0">
                <div className="flex items-center h-6 rounded-sm cursor-pointer">
                    <button onClick={leftClicked} className="w-10 h-10 bg-white border-3 font-bold text-black shadow-md rounded-md opacity-100"> &lt; </button>
                    <button onClick={rightClicked} className="w-10 h-10 bg-white border-3 font-bold text-black shadow-md rounded-md opacity-100"> &gt; </button>
                </div>
            </div>
            <div className="mx-auto grid max-w-[1910px] grid-cols-5 justify-items-center gap-3 sm:grid-cols-2 sm:justify-items-stretch md:grid-cols-4 md:gap-4 lg:gap-3">
                {shopItemProps.map((itemProps) => (
                    <>
                        <ShopItem {...itemProps} />  
                    </>
                ))}
            </div>
        </>
        
    );
}

