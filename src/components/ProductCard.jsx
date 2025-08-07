import { useState } from "react";
import { NavLink } from "react-router-dom";



export const ProductCard = ({product:{id,title,description,price,isFavourite,images}}) => {
    const [isFav,setFavourite]=useState(isFavourite);
    
    return (
        <NavLink to={`/product/${id}`} state={isFav}>
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
                        <span className="text-2xl cursor-pointer" onClick={()=>setFavourite(!isFav)}>{ isFav ? "❤️" : "🖤"}</span>
                    </div>
                </div>
            </div>
        </NavLink>

    )
}

export const FavouriteProductCard=({product:{id,title,description,isFavourite,price,images}})=>{
    const [isFav,setFavourite]=useState(isFavourite);
    
    return (
        <NavLink to={`/product/${id}`} state={isFav}>
            <div>
                <a href="#" className="flex bg-white border border-gray-200 rounded-lg shadow-sm flex-row max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  max-sm:h-40 w-auto">
                
                    <img className="object-cover rounded-t-lg h-auto w-48 rounded-none rounded-s-lg max-sm:h-40" src={images[0]} alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1 max-sm:text-sm">{title}</h5>
                        <p className="mb-3 text-xl max-sm:text-sm text-gray-700 dark:text-gray-400 font-bold line-clamp-2">{`₹ ${price}`}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">{description}</p>
                    </div>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <span className="text-2xl cursor-pointer" onClick={()=>setFavourite(!isFav)}>{ isFav ? "❤️" : "🖤"}</span>
                    </div>
                    
                </a>
            </div>
        </NavLink>
        
    )
}