import { Product } from '@/utils/fake_data';
export interface ShopItemParams {
  prod: Product
  submitFunction: (param: any) => void
}


export function ShopItem(props:ShopItemParams) {
    return (
        <>
          <div className="flex h-full shrink-0 flex-col justify-between rounded-[10px] bg-white [box-shadow:rgb(0,_0,_0)] shadow-lg !mx-[12.5px] text-ellipsis whitespace-nowrap 3xs:w-[280px] 3xsMax:w-[260px] 2xs:w-[350px]">
            <div className="relative flex h-full flex-col gap-2 !p-5 overflow-hidden text-ellipsis whitespace-nowrap">
              <span className="absolute left-5 top-6 flex h-7 w-[70px] justify-start">
                <img alt="prebuild" loading="lazy" width="70" height="22" decoding="async" data-nimg="1" src="https://content.ibuypower.com/production/assets/icons/svg/prebuild_badge.svg"></img>
              </span>
              <div className="relative flex justify-center">
                <a className="!mt-4" href="/store/rdy-y60-004">
                  <img alt="RDY Y60 004" loading="lazy" width="200" height="200" decoding="async" data-nimg="1" src={props.prod.image}/>
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="!m-0 line-clamp-2 min-h-[40px] text-ellipsis text-black whitespace-normal text-[16px] font-bold leading-[20px] hover:text-[#fe1b1b]">{props.prod.name}</h4>
                <span className='relative !top-[2px] h-[20px] !px-1'></span>
                <ul className='flex flex-col items-start gap-2 text-black overflow-hidden md:gap-1'>
                  <li className='list-none whitespace-normal text-start text-xs xl:text-sm'>{props.prod.spec["Operating System"]}</li>
                  <li className='list-none whitespace-normal text-start text-xs xl:text-sm'>{props.prod.spec["CPU"]}</li>
                  <li className='list-none whitespace-normal text-start text-xs xl:text-sm'>{props.prod.spec["Memory"]}</li>
                  <li className='list-none whitespace-normal text-start text-xs xl:text-sm'>{props.prod.spec["Graphic"]}</li>
                  <li className='list-none whitespace-normal text-start text-xs xl:text-sm'>{props.prod.spec["Storage"]}</li>
                </ul>
              </div> 
            </div>
            <div className='flex flex-col justify-between rounded-b-[10px] bg-[#F2F6FA] !p-5'>
              <div className='flex flex-col'>
                <div className='flex w-fit !border-0 bg-[#fe1b1b] py-1 text-white gap-1 rounded-full px-2 text-[11px]'>
                  <span>SAVE</span>
                  <span>$4500</span>
                </div>
              </div>
              <div className=' flex justify-between gap-2  xl:!gap-1 mt-5 3xs:!flex-col 3xsMax:!flex-col 2xs:!flex-row xs:!flex-row'>
                  
              </div>
            </div>
          </div>
        </>
    )
}