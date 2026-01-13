import { NavLink } from "react-router-dom";
import { Trash2, ShoppingBag, Plus } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const ProductCard = ({ id, title, description, price, images, isLatest = true }) => {
    const rupees = "₹";

    return (
        <NavLink to={`/product/${id}`} className="group block">
            <div className="relative w-full max-w-sm overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-xl border border-gray-100">
                
                {/* Image Container with Zoom Effect */}
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                    <img 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        src={images[0]} 
                        alt={title} 
                    />
                    
                    {/* Overlay Gradient (Optional, adds depth text readability if you overlay text) */}
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5" />

                    {/* Latest Badge - Glassmorphism */}
                    {isLatest && (
                        <div className="absolute top-3 left-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-black backdrop-blur-md shadow-sm border border-white/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                                Latest
                            </span>
                        </div>
                    )}

                    {/* Quick Action Button (Appears on Hover) */}
                    {/* <div className="absolute bottom-4 right-4 translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-gray-800">
                            <Plus size={20} />
                        </button>
                    </div> */}
                </div>

                {/* content */}
                <div className="p-5">
                    <div className="mb-2">
                        <h5 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-gray-700 transition-colors">
                            {title}
                        </h5>
                        <p className="text-sm text-gray-500 line-clamp-1 mt-1">
                            {description}
                        </p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <span className="text-xl font-bold text-gray-900">
                            {rupees} {price.toLocaleString()}
                        </span>
                      
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export const CartProductCard = ({ product: { id, title, description, quantity, price, images } }) => {
    const { deleteCartProduct } = useContext(CartContext);

    return (
        <div className="group relative flex w-full flex-row items-center gap-4 rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition-all hover:shadow-md hover:border-gray-200">
            
            {/* Image Thumbnail */}
            <NavLink to={`/product/${id}`} className="shrink-0 relative h-24 w-24 overflow-hidden rounded-lg bg-gray-100">
                <img 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    src={images[0]} 
                    alt={title} 
                />
            </NavLink>

            {/* Content Info */}
            <div className="flex flex-1 flex-col justify-between py-1">
                <div className="flex justify-between items-start">
                    <div>
                        <h5 className="text-base font-bold text-gray-900 line-clamp-1">{title}</h5>
                        <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{description}</p>
                    </div>
                    
                    {/* Delete Button - Top Right for easy access */}
                    <button 
                        onClick={() => deleteCartProduct({ productId: id })}
                        className="rounded-full p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
                        aria-label="Remove item"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>

                <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-gray-500">Qty:</span>
                        <span className="rounded-md bg-gray-100 px-2 py-0.5 text-sm font-semibold text-gray-900">
                            {quantity}
                        </span>
                    </div>
                    <p className="text-lg font-bold text-gray-900">₹ {price.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};