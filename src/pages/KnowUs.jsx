import NavBar from '../section/NavBar'
import { MobileAppBar } from '../section/MobileAppBar'
import React from 'react'
import { isMobile } from 'react-device-detect'
import Title from '../components/Title'
import { GrayBgButton } from '../components/Buttons'
import { ourStory, ourWork, ourWorkImageUrl } from '../constant'

export default function KnowUsPage() {
  return (
    <>
    {/* for crossplatform appbar */}
        { isMobile ? <MobileAppBar  appbarTitle={"Know Us"}  withBackArrow={false}></MobileAppBar> : <NavBar/>}
    
    {/* Know us contents */}
    <div className='flex flex-row justify-center items-center max-sm:mt-20 max-sm:mb-20 mt-10 '>
        <div className='grid grid-cols-1 w-200'>

            {/* our story content */}
            <div className='flex flex-col justify-center items-center align-middle'>
                <div>
                    <Title text1={"Our"} text2={"Story"} text1ClassName={"font-bold text-[30px]"} text2ClassName={"font-bold"} divClassName={"mb-0"}></Title>
                </div>

                <div className='font-semibold mx-2 text-center'>
                    <h1 className='mt-5'>{ourWork}</h1>
                </div> 
            </div>

            {/* our work content */}
            <div className='flex flex-col mt-10 justify-center items-center'>
                <div>
                    <Title text1={"Our"} text2={"Work"} text1ClassName={"font-bold text-[30px]"} text2ClassName={"font-bold"}></Title>
                </div>

                <div className='font-semibold mx-2 text-center'>
                    <img src={ourWorkImageUrl} alt="" className='object-cover-border rounded-2xl h-70 w-full mt-5'/>
                    <h1 className='mt-5'>{ourWork}</h1>
                </div>  
            </div>

            {/* contact us content */}
            <div className='flex flex-col mt-10 justify-center items-center'>
                <div>
                    <Title text1={"Contact"} text2={"Us"} text1ClassName={"font-bold text-[30px]"} text2ClassName={"font-bold"}></Title>
                </div>

                <div className='text-center font-semibold mx-2 w-full'>
                    <GrayBgButton text={"Whatsapp"} canHover={true}></GrayBgButton>
                    <GrayBgButton text={"Email"} canHover={true}></GrayBgButton>
                </div>
            </div>

        </div>
    </div>
    
    
    
        
    </>
    
  )
}
