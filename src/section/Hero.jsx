import { useContext } from 'react';
import Button from '../components/Buttons';
import { FlipWords } from '../components/ui/flipwords';

const Hero = () => {
  
  return (
    <div className='max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-20 sm:py-24'>
      <div className='text-center'>
        <div className='text-4xl sm:text-5xl md:text-6xl  font-bold leading-tight'>
          <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Welcome to <br /> 
                <FlipWords
                words={["Choosing", "Customizing", "Ordering", "Sling Bag"]}
                duration={4000}
                className={'text-gray-700'}
                />
              Sling Bag
              </h1>
        </div>
        <p className='mt-6 text-lg text-gray-600 max-w-2xl mx-auto'>
          Discover the perfect sling bag that fits your style and needs. 
          Explore our collection of customizable options to create your unique look.
        </p>

        <div className='mt-8 flex flex-col sm:flex-row justify-center gap-4'>
        <Button text={'Customize Now'} className='bg-black px-6 py-3'/>
        <Button text={'Shop Ready Bags'}className='bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3' />
        

        </div>
  
    </div>
    </div>
  );
};

export default Hero;