'use client'
import { ShopItem,ShopItemParams } from "./item"
import { Product,mock_data } from "../../utils/fake_data"
import { useState } from "react";

export function ShopList() {
    const itemsPerPage = 4;
    const [page,setPage] = useState(1);
   
    const handleAddToCart = async (name:string) => {
        console.log(`${name} added to cart `);
    };

    // do the product filtering by page and add corrisponding functions
    const prodlist:Product[] = mock_data();
    const totalPages = Math.ceil(prodlist.length / itemsPerPage);
    const displayedItems = prodlist.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );
    const shopItemProps: ShopItemParams[] = prodlist.map((product) => ({
        prod: product,
        submitFunction: handleAddToCart,
    }))

    const handlePageChange = (direction: 'left' | 'right') => {
        
        if (direction === 'left' && page > 1) {
          setPage(page - 1);
        } else if (direction === 'right' && page < totalPages) {
          setPage(page + 1);
        }
    };

    return (
        <>
            <div className="flex h-12 justify-end items-center px-4 mb-0">
                <div className="flex items-center h-6 rounded-sm cursor-pointer">
                    <button disabled={page === 1} onClick={() => handlePageChange('left')} className="w-10 h-10 bg-white border-3 font-bold text-black shadow-md rounded-sm opacity-100"> &lt; </button>
                    <button disabled={page === totalPages} onClick={() => handlePageChange('right')} className="w-10 h-10 bg-white border-3 font-bold text-black shadow-md rounded-sm opacity-100"> &gt; </button>
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

