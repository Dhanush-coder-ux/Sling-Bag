import React from 'react'

import { ScrollArea, ScrollBar } from "../components/ui/scroll-area"
import Title from './Title'
import { Products } from '../constant'




const LatestProduct = () => {
  return (
    <div>
      <div className='text-center py-8 text-4xl  '>
        <Title text1={'Fresh'} text2={'Finds'} />
               <hr className="w-full border-none h-[1.5px] bg-gray-400 " />
      </div>
        <ScrollArea className="w-full rounded-md my-10 border whitespace-nowrap">
      <div className="flex w-max space-x-4 p-4">
        {Products.map(({ Product,image,prize }) => (
          <figure key={Product} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <img
                src={image}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="text-muted-foreground flex flex-col pt-2 text-xs">
              <span className="text-foreground text-2xl font-semibold">
                {Product}
              </span>
              <span className="text-xl  font-semibold">
                {prize}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
    </div>

  )
}

export default LatestProduct
