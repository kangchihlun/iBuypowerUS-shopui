import { Product } from '@/utils/fake_data';
import Image from 'next/image'
import AffirmLogo from '../../public/assets/Affirm_logo.svg.png';

export interface ShopItemParams {
  prod: Product
  submitFunction: (param: any) => void
}


export function ShopItem(props:ShopItemParams) {
    return (
        <>
          <div className="flex h-full shrink-0 flex-col justify-between rounded-[10px] bg-white [box-shadow:rgb(0,_0,_0)] shadow-lg !mx-[12.5px] text-ellipsis whitespace-nowrap 3xs:w-[280px] 3xsMax:w-[260px] 2xs:w-[398px]">
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
                <div className='flex text-black items-end gap-3 mt-3'>
                  <p className="text-[20px] font-bold">
                    {props.prod.discountPrice}
                  </p>
                  <p className='relative bottom-1 !my-0 text-xs text-gray-400 line-through'>
                    {props.prod.price}
                  </p>
                </div>
                <div className='text-black text-xs flex border-0 bg-transparent !pl-0 text-start'>
                    <p className='a-affirm-as-low-as marginBottom0'>
                      Starting at
                      <span className='p-1 text-[#1694f5]'> $126/mo</span>
                      with &nbsp;
                    </p>
                    <div className='relative bottom-1'>
                      <Image src={AffirmLogo} alt="affirm" className="w-9 h-auto "/>
                    </div>
                </div>
              </div>
              <div className=' flex justify-between gap-2  xl:!gap-1 mt-5 3xs:!flex-col 3xsMax:!flex-col 2xs:!flex-row xs:!flex-row'>
                  <div className='flex flex-col text-black items-start'>
                    <span className='text-xs font-bold'>Free Shipping</span>
                    <span className='overflow-hidden text-ellipsis whitespace-nowrap text-xs'>Delivery By Tuesday, Apr 23</span>
                  </div>
                  <div className=''>
                    <button className='bg-white hover:!bg-[#fe1b1b] hover:text-gray-50 hover:border-[#F2F6FA]
                      rounded-full py-[0.5rem] px-10 transition duration-300 ease-in-out !border 
                      !border-solid text-base  relative flex text-center text-xs
                       2xs:text-sm border-solid border-[#fe1b1b] text-[#fe1b1b] 
                       hover:!text-white !text-center !px-3 !py-1 rounded-[30px] !bg-transparent'>
                      Buy Now
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </>
    )
}