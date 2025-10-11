import { NavLink } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export const ProductCard = ({id, title, description, price, images,isLatest=true}) => {
    const rupees = "₹"
    
    return (
        <NavLink to={`/product/${id}`} >
            <div key={id} className="w-full max-w-sm bg-white border border-gray-200 rounded shadow-sm dark:bg-gray-800 dark:border-gray-700 relative">
                {/* Latest Badge */}
                {isLatest && <div className="absolute top-2 left-2">
                    <span className="bg-gradient-to-r from-green-500 via-green-300 to-green-200 text-green-800 font-bold px-3 py-1 rounded-r-md text-sm 
                                     shadow-sm shadow-green-300 border-2 border-green-200 backdrop-blur">
                        Latest
                    </span>
                </div>}

                <div className="w-full h-60 max-sm:h-40">
                    <img className="p-5 w-full h-full max-sm:px-2 max-sm:pb-2 rounded-t-lg" src={images[0]} alt="product image" />
                </div>
                
                <div className="px-5 pb-5">
                    <div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1 max-sm:text-sm">
                            {title}
                        </h5>
                        <h5 className="text-xl max-sm:text-sm font-semibold tracking-tight text-gray-700 line-clamp-2">
                            {description}
                        </h5>
                    </div>
                
                    <div className="flex items-center justify-between">
                        <span className="text-3xl max-sm:text-xl font-bold py-4 max-sm:py-2 dark:text-white line-clamp-1">
                            {`${rupees} ${price}`}
                        </span>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}



export const CartProductCard=({product:{id,title,description,quantity,price,images}})=>{
    const {deleteCartProduct}=useContext(CartContext)
    return (
       
            <div>
                <div className="flex bg-white border border-gray-200 rounded-lg shadow-sm flex-row max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700  max-sm:h-40 w-200 max-sm:w-auto ">
                    <NavLink to={`/product/${id}`} className={"flex justify-center items-center w-100 h-50 m-2 max-sm:w-60 max-sm:h-full max-sm:m-0"}>
                        <img className="rounded-xl w-full h-full" src={images[0]} alt=""/>
                    </NavLink>
                    <div className="flex flex-col justify-between p-4 leading-normal w-full">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1 max-sm:text-sm">{title}</h5>
                        <p className="mb-3 text-xl max-sm:text-sm text-gray-700 dark:text-gray-400 font-bold line-clamp-1">{`₹ ${price}`}</p>
                        <p className="mb-3 text-xl max-sm:text-sm text-gray-700 dark:text-gray-400 font-bold line-clamp-1">Qty : {quantity}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-1">{description}</p>
                    </div>
                    <div className='text-lg font-bold flex p-2 justify-center items-start'>
                        {/* <img src="/icons/delete.svg" className='cursor-pointer h-10 w-10' alt="" /> */}
                        <Trash2 color="red" cursor={'pointer'} onClick={()=>deleteCartProduct({productId:id})}></Trash2>
                    </div>
                </div>
            </div>
   
        
    )
}
