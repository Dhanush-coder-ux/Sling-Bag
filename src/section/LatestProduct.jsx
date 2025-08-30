import React, { useContext } from 'react'

import { ScrollArea, ScrollBar } from "../components/ui/scroll-area"
import Title from '../components/Title'
import { Link } from 'react-router-dom'
import { BagContext } from '../context/BagContext'





const LatestProduct = () => {
  const {Productsjson} = useContext(BagContext)
  return (
    <div>
      <div className='text-center my-10 text-4xl'>
        <Title text1={'Fresh'} text2={'Finds'} text1ClassName={"font-bold text-[30px]"} text2ClassName={"font-bold"} divClassName={"mb-5"}/>
               <hr className="w-full border-none h-[1.5px] bg-gray-400 " />
      </div>
        <ScrollArea className="w-full rounded-md my-10 py-5 border whitespace-nowrap">
      <div className="flex w-max space-x-4 py-4">
        {Productsjson.map(({id, image,title,price}) => (
          <Link to={`/product/${id}`} key={id} className="shrink-0 mx-8 w-[200px]">
            <div className="overflow-hidden rounded-md">
              <img
                src={image[0]}
                className="aspect-[3/4] h-fit w-fit object-cover"
              />
            </div>
            <figcaption className="text-muted-foreground flex flex-col pt-2  text-xs">
              <span className="text-foreground line-clamp-1 text-2xl font-semibold">
                {title}
              </span>
              <span className="text-xl line-clamp-1 mt-3 font-semibold">
                {price}
              </span>
            </figcaption>
          </Link>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
    </div>

  )
}

export default LatestProduct
