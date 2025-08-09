
import { NavLink } from "react-router-dom";



export const ProductCard = ({id,title,description,price,images}) => {
   
    
    return (
        <NavLink to={`/product/${id}`} >
            <div key={id} className ="w-full max-w-sm bg-white border border-gray-200 rounded  shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <img className="p-8 max-sm:p-2 rounded-t-lg" src={images[0]} alt="product image" />
                </div>
                <div className="px-5 pb-5">
                    <div >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1 max-sm:text-sm">{title}</h5>
                        <h5 className="text-xl max-sm:text-sm font-semibold tracking-tight text-gray-700 line-clamp-2">{description}</h5>
                    </div>
                
                    <div className="flex items-center justify-between">
                        <span className="text-3xl max-sm:text-xl  font-bold py-4 max-sm:py-2  dark:text-white line-clamp-1">{`₹ ${price}`}</span>
           
                    </div>
                </div>
            </div>
        </NavLink>

    )
}


export const FavouriteProductCard=({product:{id,title,description,quantity,price,images}})=>{
    
    return (
        <NavLink to={`/product/${id}`}>
            <div>
                <a href="#" className="flex bg-white border border-gray-200 rounded-lg shadow-sm flex-row max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  max-sm:h-40 w-200 max-sm:w-auto">
                
                    <img className="object-cover rounded-lg h-auto w-40  my-5 mx-2 max-sm:h-30 max-sm:w-30" src={images[0]} alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal w-full">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1 max-sm:text-sm">{title}</h5>
                        <p className="mb-3 text-xl max-sm:text-sm text-gray-700 dark:text-gray-400 font-bold line-clamp-1">{`₹ ${price}`}</p>
                        <p className="mb-3 text-xl max-sm:text-sm text-gray-700 dark:text-gray-400 font-bold line-clamp-1">Qty : {quantity}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-1">{description}</p>
                    </div>
                    <div className='text-lg font-bold flex px-4 justify-center items-center'>
                        <img src="/icons/delete.svg" className='cursor-pointer h-15 w-15' alt="" />
                    </div>
                </a>
            </div>
        </NavLink>
        
    )
}
