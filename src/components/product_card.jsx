import Button from "./Buttons"

export const ProductCard = () => {
  return (
    
 
<div className ="w-full max-w-sm bg-white border border-gray-200 rounded  shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="p-8 max-sm:p-2 rounded-t-lg" src="/images/bag.png" alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl max-sm:text-sm font-semibold tracking-tight text-gray-700 ">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
        </a>
      
        <div className="flex items-center justify-between">
            <span className="text-3xl max-sm:text-xl  font-bold py-4 max-sm:py-2  dark:text-white">₹599</span>
           <img src="" alt="" />
        </div>
    </div>
</div>

  )
}