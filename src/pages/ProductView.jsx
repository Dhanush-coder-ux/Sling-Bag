import { MobileAppBar } from '../section/MobileAppBar';
import ProductSlide from '../components/ProductSlide';
import React, { useContext, useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import NavBar from '../section/NavBar';
import { Counter } from '../components/Counter';
import { platinum } from '../constant/ColorCodes';
import { ProductContext } from '../context/ProductContext';
import Button from '../components/Buttons';

const ProductView = () => {
  const { productId } = useParams();
  
const { products, productInfo ,getProductInfo} = useContext(ProductContext);

const allProducts = products.allProducts || [];


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productId) {
      setLoading(true);
      getProductInfo({ productId, setLoading });
      window.scrollTo(0, 0); 
    }
  }, [productId]);


const recommendedProducts = useMemo(() => {
  if (!productInfo) return [];
  const baseProducts =
    products.filteredProducts?.length > 0
      ? products.filteredProducts
      : products.allProducts;

  if (!Array.isArray(baseProducts) || baseProducts.length === 0) return [];

  const otherProducts = baseProducts.filter(
    p => String(p.id) !== String(productId)
  );

  const sameCategory = otherProducts.filter(
    p => p.category === productInfo.category
  );

  const others = otherProducts.filter(
    p => p.category !== productInfo.category
  );

  return [...sameCategory, ...others].slice(0, 4);
}, [products, productInfo, productId]);



useEffect(() => {
  console.log("RAW PRODUCTS:", products);
  console.log("NESTED PRODUCTS:", products?.products);
}, [products]);


  return (
    <>
      {/* Navbar */}
      {isMobile ? (
        <MobileAppBar appbarTitle="Product" withBackArrow={true} />
      ) : (
        <NavBar />
      )}

      <div className="flex flex-col items-center max-sm:mt-15 max-sm:mb-20 md:mt-10 md:mb-10 lg:mt-0 lg:mb-10">
        
        {/* --- LOADING SKELETON --- */}
        {loading ? (
          <div className="flex flex-col items-center gap-4 animate-pulse mt-10">
            <div className="w-80 h-80 bg-gray-300 rounded-lg"></div>
            <div className="w-64 h-6 bg-gray-300 rounded"></div>
            <div className="w-40 h-6 bg-gray-300 rounded"></div>
          </div>
        ) : Object.keys(productInfo).length > 0 ? (
          
          /* --- MAIN PRODUCT DETAILS --- */
          <div className="flex justify-center items-center flex-row w-200 max-sm:w-full max-sm:mx-2 md:mt-10 lg:m-0">
            <div className="flex flex-col text-center justify-center items-center">
              
              {/* Product Image Slider */}
              <div className="w-80 p-5 mt-0 lg:w-150">
                <ProductSlide image={productInfo.image_urls} />
              </div>

              {/* Product Info */}
              <div className="flex justify-start items-start w-150 max-sm:w-full max-sm:px-3">
                <div className="w-full">
                 
                  
                  <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white max-sm:text-[20px] text-start">
                    {productInfo.title}
                  </h5>
                  <p className="mb-3 text-xl max-sm:text-md text-gray-700 dark:text-gray-400 font-bold text-start">{`₹ ${productInfo.price}`}</p>
                  
                  <p className="mb-2 mt-4 font-bold text-black text-start text-1xl">Description</p>
                  <p className="mb-3 text-gray-700 dark:text-gray-400 text-start leading-relaxed">
                    {productInfo.description}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-5 max-sm:px-2 flex justify-between items-end gap-4 w-150 max-sm:w-full text-center">
                <Counter
                  key={productId}
                  productId={productId}
                  className="p-1"
                  productCurQuantity={productInfo.cart_quantity || 0}
                />
                <Button
                  text="Customize"
                  className={`bg-[${platinum}] rounded-lg text-black w-50 p-2 mb-2 text-center`}
                />
              </div>

            </div>
          </div>
        ) : (
          <center>
            <h1 className="font-bold text-2xl">No Product Found</h1>
          </center>
        )}

        {/* --- RECOMMENDED PRODUCTS SECTION --- */}
        {!loading && recommendedProducts.length > 0 && (
            <div className="w-full max-w-6xl mt-24 px-4 mb-10">
                <div className="border-t border-gray-200 pt-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center md:text-left">
                        Similar Products
                    </h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {recommendedProducts.map((item) => (
                            <Link 
                                to={`/product/${item.id}`} // Updated to use item.id
                                key={item.id} 
                                className="group block bg-white rounded-lg p-2 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 mb-3 relative">
                                    <img
                                        src={item.image_urls?.[0]}
                                        alt={item.title}
                                        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Optional Tag on Image */}
                                    {item.is_latest && (
                                        <span className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-1 uppercase tracking-wider font-bold">
                                            New
                                        </span>
                                    )}
                                </div>
                                <h4 className="text-sm font-semibold text-gray-900 truncate">
                                    {item.title}
                                </h4>
                                <p className="text-xs text-gray-500 capitalize mb-1">{item.category}</p>
                                <p className="mt-1 text-sm font-bold text-gray-900">
                                    ₹ {item.price.toLocaleString()}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )}

      </div>
    </>
  );
};

export default ProductView;