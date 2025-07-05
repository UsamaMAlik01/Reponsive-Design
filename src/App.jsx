import './App.css'
import React from 'react'
import Sidebar from './Components/Sidebar.jsx'
import Topbar from './Components/Topbar.jsx'
import PromotionHeader from './Components/PromotionHeader.jsx'
import PromotionBox from './Components/PromotionBox.jsx'
import PromotionSlider from './Components/PromotionSlider.jsx'
import PendingOrdersChart from './Components/PendingOrderChart.jsx'
import BestSelling from './Components/BestSelling.jsx'
import Demo from "./Components/Demo.jsx";
import ProductCreation from "./Components/ProductCreation.jsx";
import SummaryChart from './Components/SummaryChart.jsx';
import OrderVol from './Components/OrderVol.jsx';
import SearchBar from './Components/Searchbar.jsx'
import { EllipsisVertical } from 'lucide-react'
import MassageList from './Components/MessageList.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <>
      <div className='h-full w-full bg-[#DBDADE]'>
        <div className='hidden md:block fixed top-0 lg:left-[204px] left-23 w-[90%] lg:w-[80%] xl:w-[86.5%] transparent z-50'>
          <Topbar />
        </div>

        <div className="md:fixed sticky">
          <Sidebar />
        </div>

        <div className='md:flex'>
          <div className="invisible">
            <Sidebar />
          </div>

          <div className='md:w-full h-full bg-[#DBDADE] md:px-2'>
            <div className='hidden md:block'>
              <div className='w-full h-[100%] md:pt-[65px] grid lg:grid-cols-10 md:grid-cols-9 lg:pt-[72px]'>
                <div className='lg:col-span-7 col-span-6 h-full'>
                  <div className='grid h-full grid-rows-3 gap-2 md:p-2 md:mt-4 lg:mt-1'>
                    <div className='col-span-1 grid grid-cols-4 gap-[3%] rounded-2xl md:h-[200px] lg:h-[100%]'>
                      <PendingOrdersChart />
                      <BestSelling />
                      <Demo />
                      <ProductCreation />
                    </div>

                    <div className='lg:row-span-3 grid grid-cols-2 gap-2 md:h-[500px] lg:h-[700px] md:mt-[-140px] lg:mt-0'>
                      <div className='col-span-1 h-full rounded-xl'>
                        <SummaryChart />
                      </div>
                      <div className='col-span-1 h-full rounded-xl'>
                        <OrderVol />
                      </div>

                      <div className='col-span-2 w-full grid grid-col-5 '>
                        <div className='col-span-1 bg-white flex justify-between items-center lg:mt-2 lg:rounded-t md:rounded-t-sm '>
                          <div className='lg:text-lg font-bold text-lg lg:p-5 p-2 md:py-4 lg:py-0'>
                            <h1>Announcements</h1>
                          </div>
                          <div className='flex md:mr-1 lg:mr-0 lg:py-2'>
                            <SearchBar />
                            <EllipsisVertical className='lg:block hidden' size={38} color='#6F6B7D' />
                          </div>
                        </div>

                        <div className='col-span-1  rounded-md bg-white  '>
                          <div className='border-t-2 border-[#979797] lg:h-[740px] md:w-[428px] md:h-[467px] lg:w-full lg:rounded-b md:rounded-b-sm  lg:mb-[-420px]'>
                            <MassageList />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-span-3'>
                  <PromotionHeader />
                  <PromotionBox />
                  <PromotionBox />
                  <PromotionBox promotionId={2} />
                  <PromotionBox promotionId={2} />
                  
                </div>
              </div>

              <Footer />
            </div>

            {/* Mobile Interface */}
            <div className='block md:hidden'>
              <div className='w-screen md:w-[98%] h-[100%]'>
                <div className='px-3 mt-[-40px] font-semibold'>
                  <h2>Promotions</h2>
                </div>
                <PromotionSlider />
                <div className='grid grid-cols-2 grid-rows-2 h-[600px] w-[95%] mx-auto gap-2 mt-8'>
                  <PendingOrdersChart />
                  <BestSelling />
                  <Demo />
                  <ProductCreation />
                </div>
                <div className='px-3 font-semibold mt-8'>
                  <h2>Catalog Performance</h2>
                </div>
                <div className='w-[95%] mx-auto mt-2'>
                  <SummaryChart />
                </div>
              </div>
              <div className='w-[95%] mx-auto mt-2'>
                <OrderVol />
              </div>
              <div className='px-3 font-semibold mt-8 mb-2'>
                <h2>Announcements</h2>
              </div>
              <div className='flex w-[95%] mx-auto rounded-t-md items-center justify-between border-b-1 border-[#979797] p-2 bg-white'>
                <div className='px-1 font-semibold pr-2'>
                  <h2 className='text-nowrap'>This Week</h2>
                </div>
                <SearchBar />
              </div>
              <div className='w-[95%] bg-white mx-auto rounded-b-md'>
                <MassageList />
              </div>
              <div className='w-[95%] mx-auto mt-2'>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
