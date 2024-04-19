import { Product } from '@/utils/fake_data';
export interface ShopItemParams {
  prod: Product
  submitFunction: (param: any) => void
}


export function ShopItem(props:ShopItemParams) {
    return (
        <>
          <div className="text-left text-lg font-bold text-black leading-tight mt-22 ml-44 w-353 h-26">{props.prod.name}</div>
        </>
    )
}