
import { NavLink } from "react-router-dom";



export const ProductCard = ({id,title,description,price,images}) => {
   
    
    return (
        <NavLink to={`/product/${id}`} >
            <div key={id} className ="w-full max-w-sm bg-white border border-gray-200 rounded  shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="p-8 max-sm:p-2 rounded-t-lg" src={images[0]} alt="product image" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1 max-sm:text-sm">{title}</h5>
                        <h5 className="text-xl max-sm:text-sm font-semibold tracking-tight text-gray-700 line-clamp-2">{description}</h5>
                    </a>
                
                    <div className="flex items-center justify-between">
                        <span className="text-3xl max-sm:text-xl  font-bold py-4 max-sm:py-2  dark:text-white line-clamp-1">{`₹ ${price}`}</span>
           
                    </div>
                </div>
            </div>
        </NavLink>

    )
}

