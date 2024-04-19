import { ShopItem,ShopItemParams } from "./item"
import { Product,mock_data } from "../../utils/fake_data"
  
export async function ShopList() {
    const handleAddToCart = async (name:string) => {
        'use server';
        
    };
    const prodlist:Product[] = await mock_data();

    const shopItemProps: ShopItemParams[] = prodlist.map((product) => ({
        prod: product,
        submitFunction: handleAddToCart,
    }));

    return (
        
            <div className="mx-auto grid max-w-[1040px] grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch md:grid-cols-3 md:gap-4 lg:gap-6"> 
                {shopItemProps.map((itemProps) => (
                    <>
                        <ShopItem {...itemProps} />  
                    </>
                ))}
            </div>
        
    );
}

