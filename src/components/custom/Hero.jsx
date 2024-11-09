import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
// 
import ContactForm from './Form'; // Adjust the path as necessary
// import { useForm } from "react-hook-form"


function Hero() {
  // const [state, handleSubmit] = useForm("mpzebwok");

  // if (state.succeeded) {
  //   return  toast("Thanks for your submission!");
  // }

  return (
    <>
      <div className='flex flex-col items-center max-56 gap-9 '>
        <h1 className='font-extrabold text-[40px] xl:text-[50px] text-center text-gray-950 mt-16' >
          <span className="text-orange-500">Discover Your Next Adventure🌏with AI:</span>Personalized Itineraries at Your Fingertips
        </h1>

        <p className='  text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>
        {/* <div className='xl:flex text-center  '>
      <div className='xl:h-20 w-20'>
        
      </div>
      <p className='  text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>

      <img 
        src="/bl1.gif" 
        alt="Awesome GIF" 
        // style={{ width: '100%', maxWidth: '500px', height: 'auto' }} 
        className=' h-auto w-auto'
      />
</div> */}

        <div className='flex'>
          <iframe className=" ml-[24px]  -mt-10 -mb-8 xl:ml-96" src="https://lottie.host/embed/bba4f323-831a-43df-8d1e-815d489ef1b1/Ae5tr6sm3O.json"></iframe>
          <img
            src="/bl1.gif"
            alt="Awesome GIF"
            // style={{ width: '100%', maxWidth: '500px', height: 'auto' }} 
            className='-ml-[116px] z-10 h-auto w-auto -mt-4 xl:ml-56'
          />
        </div>
        <Link to='/create-trip'>
          {/* <Button id="bt" className="  shadow-sm shadow-orange-500">Get Started, It&apos;s Free</Button> */}

          <button className="btn -mt-10">
            <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
              <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
            </svg>

            <span className="text">Get Started</span>
          </button>



        </Link>

        <div className='text-[30px] font-extrabold text-center'>Discover the touch of Nature⛰️🌄</div>

        <div className='grid grid-cols-1  gap-4 md:grid-cols-4 p-4  xl:grid-cols-4 xl:p-44  justify-center -mt-10'>

          <Link to={`/`}>
            <div className="relative">
              <img
                src="https://i.pinimg.com/564x/ee/48/a0/ee48a0436724b8a05e5049b95ce92e49.jpg"
                className="object-cover xl:-mt-10 rounded-md h-80 w-64  shadow-md bg-gray-100 hover:scale-90 transition-all cursor-pointer hover:rotate-2 hover:shadow-lg hover:shadow-orange-400  xl:w-[300px]"
              />
              <Button className="absolute top-0 left-0 z-10 m-2 bg-white text-orange-500">Tanzania</Button>
            </div>
          </Link>

          <Link to={`/`}>
            <div className="relative ">
              <img
                src="https://i.pinimg.com/564x/ae/9c/2a/ae9c2a887e2ab29c0a4b95928442bb0b.jpg"
                className="object-cover  xl:mt-10 rounded-md h-80  shadow-md bg-gray-100 hover:scale-90 transition-all cursor-pointer hover:rotate-2 hover:shadow-lg hover:shadow-orange-400 xl:w-[300px]"
              />
              <Button className="absolute top-0 left-0 z-10 m-2 bg-white text-orange-500">Colombia</Button>
            </div>
          </Link>

          <Link to={`/`}>
            <div className="relative">
              <img
                src="https://i.pinimg.com/564x/d1/29/b1/d129b1ea838a87a4e731a3ebe0f8234e.jpg"
                className="object-cover  xl:-mt-10 rounded-md h-80   shadow-md bg-gray-100 hover:scale-90 transition-all cursor-pointer hover:rotate-2 hover:shadow-lg hover:shadow-orange-400 xl:w-[300px]"
              />
              <Button className="absolute top-0 left-0 z-10 m-2 bg-white text-orange-500">India</Button>
            </div>
          </Link>
          <Link to={`/`}>
            <div className="relative">
              <img
                src="https://i.pinimg.com/236x/f8/69/3a/f8693a7760b7d8a83e39cb7ed20398fc.jpg"
                className="object-cover  xl:mt-10 rounded-md h-80 w-64 mb-10 shadow-md mt-2 bg-gray-100 hover:scale-90 transition-all cursor-pointer hover:rotate-2 hover:shadow-lg hover:shadow-orange-400 xl:w-[300px]"
              />
              <Button className="absolute top-0 left-0 z-10 m-2 bg-white text-orange-500">Sydney</Button>
            </div>
          </Link>
        </div>
        {/*  globe <div className="h-[340px] w-[500px] border border-2 rounded-lg border-orange-500 overflow-hidden">
  <iframe className="w-full h-full " src="https://earth3dmap.com/3d-globe/"></iframe>
</div> */}

      </div>
      {/* new section */}

      <div className='flex justify-center -mt-16  '>
        <div className=' flex-col xl:flex-row inline-flex xl:gap-24 gap-4 items-center'>
          <div >
            <h2 className='text-orange-500 font-bold items-start text-[20px] mt-4'>WHAT WE SERVE</h2>
            <h1 className='text-gray-800 font-bold text-4xl leading-10 mt-4'>Top Values <br />For You</h1>
            <h1 className=" w-60 text-gray-900/75  font-normal  leading-snug tracking-tight mt-4">Embrace life&apos;s vastness, venture forth,</h1>
          </div>
          <div className='bg-white border border-orange-500 rounded-lg p-4 hover:rotate-2 hover:scale-90 transition-all'>
            <img className=" w-24 h-20" src="./h1.svg" />
            <div className=" w-60 text-text color text-2xl font-semibold  leading-loose ">Ai Generated Trip</div>
            <div className=" w-56 text-gray-900/75 font-normal  ">Embrace vastness, venture forth,</div>
          </div>
          <div className='bg-white border border-orange-500 rounded-lg p-4 hover:rotate-2 hover:scale-90 transition-all'>
            <img className=" w-24 h-20" src="./h2.svg" />
            <div className=" w-60 text-text color text-2xl font-semibold  leading-loose ">Best Tour Guide</div>
            <div className=" w-56 text-gray-900/75 font-normal  ">Embrace vastness, venture forth,</div>
          </div>
          <div className='bg-white border border-orange-500 rounded-lg p-4 hover:rotate-2 hover:scale-90 transition-all'>
            <img className=" w-24 h-20" src="./h3.svg" />
            <div className=" w-60 text-text color text-2xl font-semibold  leading-loose ">Easy Booking</div>
            <div className=" w-56 text-gray-900/75 font-normal  ">Embrace vastness, venture forth,</div>

          </div>


        </div>
      </div>



      <div className='flex justify-center mt-20  '>
        <div className=' justify-start xl:items-end  flex-col xl:flex-row inline-flex gap-2 items-center '>

          <div className=' xl:mb-60 flex-col justify-start items-start gap-[23.67px]  '>
            <h2 className='text-orange-500 font-bold items-start text-[20px] '>OUR ACCURACY</h2>
            <h1 className='text-gray-800 font-bold text-4xl leading-10 mt-4'> Crafting <br />Unforgettable<br /> Adventures</h1>
            <h1 className=" w-60 text-gray-900    leading-snug tracking-tight mt-4">We excel in curating remarkable journeys, specializing in outdoor destinations around the globe. With a wealth of experience, we bring adventures to life and invite you to embark on your own. The call of nature awaits—begin your adventure today!</h1>
          </div>

          <div className='bg-white border border-orange-500 rounded-lg p-4 w-60 hover:rotate-2 hover:scale-90 transition-all xl:mb-24 xl:-ml-64'>

            <div className=" w-60 text-text text-orange-500 text-2xl font-semibold  leading-loose ">1,000+</div>
            <div className=" w-56 text-gray-900/75 font-normal  ">Trips generations</div>
          </div>
          <div className='bg-white border border-orange-500 rounded-lg p-4 w-60 hover:rotate-2 hover:scale-90 transition-all xl:mb-24'>

            <div className=" w-60 text-text text-orange-500 text-2xl font-semibold  leading-loose ">98%</div>
            <div className=" w-56 text-gray-900/75 font-normal  ">customer satisfaction,</div>
          </div>
          <div className='bg-white border border-orange-500 rounded-lg p-4 w-60 hover:rotate-2 hover:scale-90 transition-all xl:mb-24'>

            <div className=" w-60 text-text text-orange-500 text-2xl font-semibold  leading-loose ">5+</div>
            <div className=" w-56 text-gray-900/75 font-normal  ">Years Of Experience</div>

          </div>

          <img
            src="/image.png"
            alt="Awesome"
            // style={{ width: '100%', maxWidth: '500px', height: 'auto' }} 
            className='xl:h-[500px] md:h-[300px]  xl:w-[100%] mb-20'
          />


        </div>
      </div>

      {/* <div className='flex item-center xl:ml-40 mb-4'>

        <div className=" w-[1268.22px] h-[353.05px] shadow-xl  bg-orange-500 rounded-[29.59px] " >
          <h1 className=' mt-20 text-center text-[#292929] text-[39.45px] font-bold leading-10 tracking-tight' >Sign up to our newsletter</h1>
          <h2 className="text-center mt-4 text-white text-base font-bold leading-relaxed" >Lorem ipsum dolor sit amet consectetur. Egestas et feugiat purus enim facilisi nunc blandit nullam.</h2>

          <div className='flex justify-center items-center mt-8'>
            <div className='bg-white shadow-xl  xl:w-[400px] p-3  rounded-lg flex flex-row justify-between'>
             
              <input type="text"
                placeholder="Enter your email"
                className=" bg-white w-60 outline-none" />
              <Button
                onClick={() => toast("Subscribed Successfully!🎉")}
                className='shadow-md shadow-orange-300 hover:scale-105 transition-all'

              ><FaTelegramPlane className='h-4 ' /></Button>
            </div>
          </div>

        </div>

      </div>  */}






<ContactForm />

    </>
  )
}

export default Hero

