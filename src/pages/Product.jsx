import React, { useContext, useEffect, useState } from 'react'
import { MobileAppBar } from '../section/MobileAppBar';
import { ProductCard } from '../components/ProductCard';
import { isMobile } from 'react-device-detect';
import NavBar from '../section/NavBar';
import { BagContext } from '../context/BagContext';
import { chips } from '../constant';
import { Chip } from '../components/Chip';

export const ProductsPage = () => {
  const { Productsjson } = useContext(BagContext);
  const [category, setCategory] = useState([]);
  const [filterproduct, setFilterProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedChipText,setChipClicked]=useState("All");

  // Initial load
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setFilterProduct(Productsjson);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [Productsjson]);


  // Toggle category filter
const toggle = (value) => {

  if (value === "All") {
    
    setFilterProduct(Productsjson)
     // clear all filters
    return 
    
  }
  if (value=="low to high") {
    setFilterProduct(Productsjson.sort((a, b) => a.price - b.price));
  } else if (value=="high to low") {
    setFilterProduct(Productsjson.sort((a, b) => b.price - a.price));
  }else{
    setFilterProduct(Productsjson.filter((item)=>item['category']==value))
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
          <p>Loading...</p>
        ) : (
          filterproduct.map((item, index) => (
            <ProductCard
              key={index}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              images={item.image}
            />
          ))
        )}
      </div>
    </>
  );
};
