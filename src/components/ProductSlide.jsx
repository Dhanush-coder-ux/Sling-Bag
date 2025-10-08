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
          {image.map((src, index) => (
            <CarouselItem key={index} className="flex justify-center items-center">
              <img
                src={src}
                alt={`Product ${index + 1}`}
                width={400}
                height={300}
                className="rounded-lg object-cover"
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
