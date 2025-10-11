import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"



const ProductSlide = ({image}) => {


  return (
    <div className="w-full max-w-xl mx-auto">
      <Carousel>
        <CarouselContent>
          {image?.map((src, index) => (
            <CarouselItem key={index} className="flex justify-center items-center h-100 max-sm:h-80 ">
              <img
                src={src}
                alt={`Product ${index + 1}`}
                width={400}
                height={300}
                className="rounded-lg cursor-pointer"
                onClick={()=>{window.open(src)}}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default ProductSlide
