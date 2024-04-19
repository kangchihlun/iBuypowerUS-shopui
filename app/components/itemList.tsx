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
        <>
            {shopItemProps.map((itemProps) => (
                <>
                    <ShopItem {...itemProps} />  
                </>
            ))}
        </>
    );
}

