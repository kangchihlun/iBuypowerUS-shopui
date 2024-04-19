'use client'
import { ShopItem,ShopItemParams } from "./item"
import { Product,mock_data } from "../../utils/fake_data"
import { useState } from "react";

export async function ShopList() {
    const [page,setPage] = useState(0);
    const handleAddToCart = async (name:string) => {
        console.log(`${name} added to cart `);
    };
    const prodlist:Product[] = await mock_data();

    const shopItemProps: ShopItemParams[] = prodlist.map((product) => ({
        prod: product,
        submitFunction: handleAddToCart,
    }));

    return (
        
        <div className="mx-auto grid max-w-[1910px] grid-cols-5 justify-items-center gap-3 sm:grid-cols-2 sm:justify-items-stretch md:grid-cols-4 md:gap-4 lg:gap-3">
            {shopItemProps.map((itemProps) => (
                <>
                    <ShopItem {...itemProps} />  
                </>
            ))}
        </div>
        
    );
}

