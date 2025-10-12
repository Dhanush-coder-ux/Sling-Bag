import React, { useContext, useEffect, useState } from 'react'
import { MobileAppBar } from '../section/MobileAppBar';
import { ProductCard } from '../components/ProductCard';
import { isMobile } from 'react-device-detect';
import NavBar from '../section/NavBar';
import { chips } from '../constant';
import { Chip } from '../components/Chip';
import { ProductContext } from '../context/ProductContext';
import { ProductSkeleton } from "../components/ProductSkeleton";


export const ProductsPage = () => {

  const [loading, setLoading] = useState(true);
  const [selectedChipText,setChipClicked]=useState("All");

  const { getProducts,products,setProducts, setProductInfo } = useContext(ProductContext);

      useEffect(() => {
        setProductInfo({})
        getProducts({setLoading})
      }, []);


  // Toggle category filter
const toggle = (value) => {

  if (value === "All") {
    setProducts(prev=>({
      ...prev,
      filteredProducts:prev.allProducts
    }))
    
    return 
    
  }
  if (value=="low to high") {
    setProducts(prev=>({...prev,filteredProducts:products.allProducts.sort((a, b) => a.price - b.price)}));
  } else if (value=="high to low") {
    setProducts(prev=>({...prev,filteredProducts:products.allProducts.sort((a, b) => b.price - a.price)}));
  }else{
    setProducts(prev=>({...prev,filteredProducts:products.allProducts.filter((item)=>item['category']==value)}))
  }
};



  return (
    <>
      {isMobile ? (
        <MobileAppBar appbarTitle="Products" withBackArrow={false} />
      ) : (
        <NavBar />
      )}

      {/* Filters */}
      <div className="flex mt-5 mx-8 max-sm:mx-2 max-sm:mt-15 max-md:mt-10">
        <h1 className="text-2xl font-semibold max-sm:text-sm">Filters</h1>
      </div>

      <div className="flex flex-row mt-4 gap-1.5 mx-8 overflow-x-auto whitespace-nowrap no-scrollbar max-sm:mx-2">
         {chips.map((value) => (
                <Chip
                  key={value} // ✅ Add this line
                  text={value}
                  className="mr-3.5 max-sm:scale-90 max-sm:mr-1"
                  selectedChip={selectedChipText}
                  setChipClicked={setChipClicked}
                  toggle={toggle}
                />
              ))}
      </div>

      {/* Products */}
     <div className="grid lg:grid-cols-4 max-sm:grid-cols-2 max-sm:mb-20 gap-4 mt-8 mx-2 md:mx-8 md:grid-cols-2 md:mb-20">
  {loading ? (
    Array(8) // show 8 skeletons
      .fill(0)
      .map((_, index) => <ProductSkeleton key={index} />)
  ) : (
    products.filteredProducts.map((item, index) => (
      <ProductCard
        key={index}
        id={item.id}
        title={item.title}
        description={item.description}
        price={item.price}
        images={item.image_urls}
        isLatest={item.is_latest}
      />
    ))
  )}
</div>

    </>
  );
};
