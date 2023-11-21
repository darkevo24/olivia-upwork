import React from 'react';
import './App.css';

function App() {

  return (
    <div className="w-full flex  bg-white">
      <div className='w-1/4 bg-side-bar relative min-h-screen bg-[#6941C6] text-base hidden md:block'>
        <div className='w-full flex items-center justify-center flex-col pt-[69px] px-[127px] pb-[27px] cursor-pointer'>
          <img src={require("./Logo/Logo.png")} className="w-10 h-10" alt="logo" />
          <p className='text-white'>Logo</p>
        </div>
        <div className='mt-2 w-full flex justify-center'>
          <div className='flex items-center justify-start w-10/12 py-2 px-3 m-[6px] hover:bg-side-bar-hover rounded-md cursor-pointer'>
            <img src={require("./Logo/bar-chart.png")} className="w-6 h-6" alt="bar-chart" />
            <p className='ml-3 text-white'>Overview</p>
          </div>
        </div>
        <div className='mt-2 w-full flex justify-center'>
          <div className='flex items-center justify-start w-10/12 py-2 px-3 m-[6px] hover:bg-side-bar-hover rounded-md cursor-pointer'>
            <img src={require("./Logo/calendar.png")} className="w-6 h-6" alt="bar-chart" />
            <p className='ml-3 text-white'>Visits</p>
          </div>
        </div>
        <div className='mt-2 w-full flex justify-center'>
          <div className='flex items-center justify-start w-10/12 py-2 px-3 m-[6px] hover:bg-side-bar-hover rounded-md cursor-pointer'>
            <img src={require("./Logo/coins-hand.png")} className="w-6 h-6" alt="bar-chart" />
            <p className='ml-3 text-white'>Earnings</p>
          </div>
        </div>
        <div className='mt-2 w-full flex justify-center'>
          <div className='flex items-center justify-start w-10/12 py-2 px-3 m-[6px] hover:bg-side-bar-hover rounded-md cursor-pointer'>
            <img src={require("./Logo/star.png")} className="w-6 h-6" alt="bar-chart" />
            <p className='ml-3 text-white'>Reviews</p>
          </div>
        </div>

        <div className='flex flex-col absolute bottom-8 text-white px-4 w-full'>
          <div className='w-full flex items-center mb-3 py-2 px-3 m-[6px] hover:bg-side-bar-hover rounded-md cursor-pointer'>
            <img src={require("./Logo/life.png")} className="w-6 h-6" alt="bar-chart" />
            <p className='ml-3'>Support</p>
          </div>
          <div className='w-full flex items-center py-2 px-3 m-[6px] hover:bg-side-bar-hover rounded-md cursor-pointer'>
            <img src={require("./Logo/settings.png")} className="w-6 h-6" alt="bar-chart" />
            <p className='ml-3'>Settings</p>
          </div>
        </div>
      </div>

      <div className='w-full'>
        <div className='w-full shadow-xl flex justify-end h-[69px] items-center'>
          <img src={require("./Logo/ntify.png")} className="w-11 h-11 mr-6 cursor-pointer hover:opacity-80" alt="ntify" />
          <img src={require("./Logo/notifacation.png")} className="w-11 h-11 mr-6 cursor-pointer hover:opacity-80" alt="notifacation" />
          <div className='flex mr-6 p-2'>
            <img src={require("./Logo/Avatar.png")} className="w-8 h-8 cursor-pointer hover:opacity-80" alt="Avatar" />
            <div className='text-[10px] flex flex-col justify-center'>
              <p className='foont-bold'>Olivia CGiver</p>
              <p>olivia@cae.com</p>
            </div>
          </div >
          <div className='w-[68px] h-[69px] flex justify-center items-center bg-[#7F56D9] cursor-pointer hover:opacity-80'>
            <img src={require("./Logo/Button.png")} className="w-9 h-9" alt="Button" />
          </div>
        </div >

        <div className='p-8'>
          <p className='text-3xl font-bold'>Welcome back <span className='text-[#7F56D9]'>Olivia</span></p>
          <p className='p-1 text-[#475467]'>Your Current account summary and activity</p>
          <div className='flex justify-center items-center mt-6'>
            <div className='flex items-center md:w-2/3 flex-col'>
              <div className='md:flex items-center w-full'>
                <div className='w-full border border-[rgb(234,236,240)] rounded-md p-4'>
                  <div className='flex items-center '>
                    <img src={require("./Logo/coins-stacked-02.png")} className="w-7 h-7" alt="coins-stacked-02" />
                    <p className='ml-3'>Total Earnings</p>
                    <img src={require("./Logo/arrow-narrow-right.png")} className="w-8 h-8 ml-auto" alt="arrow-narrow-right" />
                  </div>
                  <p className='text-3xl mt-5'>35 $</p>
                </div>
                <div className='w-full border border-[#EAECF0] rounded-md md:ml-2 mt-2 md:mt-0 p-4'>
                  <div className='flex items-center  '>
                    <img src={require("./Logo/calendar-check.png")} className="w-7 h-7" alt="coins-stacked-02" />
                    <p className='ml-3'>Appointments</p>
                    <img src={require("./Logo/arrow-narrow-right.png")} className="w-8 h-8 ml-auto" alt="arrow-narrow-right" />
                  </div>
                  <p className='text-3xl mt-5'>1/4</p>
                </div>
              </div>
              <div className='w-full rounded-md border border-[#EAECF0] mt-4'>
                <div className='flex items-center justify-between p-4 w-full' >
                  <div>
                    <div className='flex items-center'>
                      <p className='font-bold text-[#101828]'>Appointments</p>
                      <div className='flex items-center px-auto rounded-lg border border-[#D0D5DD] px-2 py-1 text-[12px] ml-2 text-[#344054]'>
                        <p>4 appointments</p>
                      </div>
                    </div>
                    <p className='text-gray text-sm mt-1'>Keep track of your appointments and their dates.</p>
                  </div>
                  <p className='text-[#7F56D9] text-base underline cursor-pointer'>See all</p>
                </div>
                <div className='flex items-center bg-[#FCFCFD] text-[#475467]'>
                  <div className='md:p-4 p-2 w-full'>
                    <p className='text-[14px]'>Name</p>
                  </div>
                  <div className='md:p-4 p-2  w-full'>
                    <p className='text-[14px]'>Gender</p>
                  </div>
                  <div className='md:p-4 p-2  w-full'>
                    <p className='text-[14px]'>Time</p>
                  </div>
                  <div className='md:p-4 p-2  w-full'>
                    <p className='text-[14px]'>Status</p>
                  </div>
                </div>

                <div className='flex items-center text-sm'>
                  <div className='md:p-4 p-2  w-full'>
                    <p className='text-[14px] w-16'>Catalina</p>
                  </div>
                  <div className='md:p-4 p-2  w-full'>
                    <p className='text-[14px] w-12'>Female</p>
                  </div>
                  <div className='md:p-4 p-2  w-full'>
                    <p className='text-[14px] text-[#475467] w-16'>12:00 AM</p>
                  </div>
                  <div className='md:p-4 p-2  w-full flex items-center justify-center'>
                    <div className='rounded-full flex items-center justify-center px-2 py-0.5 text-[#5925DC] border border-[#D9D6FE] bg-[#F4F3FF] '>
                      <p className='text-[12px] '>PENDING</p>
                    </div>
                  </div>
                </div>

                <div className='flex items-center text-sm'>
                  <div className='md:p-4 p-2  w-full'>
                    <p className='text-[14px] w-16'>John</p>
                  </div>
                  <div className='md:p-4 p-2  w-full'>
                    <p className='text-[14px] w-12'>Male</p>
                  </div>
                  <div className='md:p-4 p-2  w-full'>
                    <p className='text-[14px] text-[#475467] w-16'>12:00 AM</p>
                  </div>
                  <div className='md:p-4 p-2  w-full flex items-center justify-center'>
                    <div className='rounded-full flex items-center justify-center px-2 py-0.5 border bg-[#ECFDF3]  border-[#ABEFC6] '>
                      <p className='text-[12px] text-[#067647] '>COMPLETED</p>
                    </div>
                  </div>
                </div>

                <div className='flex items-center text-sm'>
                  <div className='md:p-4 p-2  w-full'>
                    <p className='text-[14px] w-16'>Martin</p>
                  </div>
                  <div className='md:p-4 p-2  w-full'>
                    <p className='text-[14px] w-12'>Male</p>
                  </div>
                  <div className='md:p-4 p-2  w-full'>
                    <p className='text-[14px] w-16 text-[#475467]'>12:00 AM</p>
                  </div>
                  <div className='md:p-4 p-2  w-full flex items-center justify-center'>
                    <div className='rounded-full flex items-center justify-center px-2 py-0.5 text-[#B42318] border border-[#FECDCA] bg-[#FEF3F2] '>
                      <p className='text-[12px] '>PENDING</p>
                    </div>
                  </div>
                </div>

                <div className='flex items-center text-sm'>
                  <div className='p-4 w-full'>
                    <p className='text-[14px] w-16'>Martin</p>
                  </div>
                  <div className='p-4 w-full'>
                    <p className='text-[14px] w-12'>Male</p>
                  </div>
                  <div className='p-4 w-full'>
                    <p className='text-[14px] w-16 text-[#475467]'>12:00 AM</p>
                  </div>
                  <div className='p-4 w-full flex items-center justify-center'>
                    <div className='rounded-full flex items-center justify-center px-2 py-0.5 text-[#5925DC] border border-[#D9D6FE] bg-[#F4F3FF] '>
                      <p className='text-[12px]'>PENDING</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
