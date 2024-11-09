// import { Button } from "@/components/ui/button";
// import { getPlaceDetail } from "../../service/GlobalApi";
// import { useEffect } from "react";


//  function InfoSection({ trip }) {

// //     useEffect(()=>{
// //         trip&&getPlacePhoto();
// //     },[trip])

// //     const getPlacePhoto = async () => {
// //         const data = {
// //             textQuery:trip?.userSelection?.location
            
// // } 

// // console.log(data);
// //         const result = await getPlaceDetail(data).then(res => {
// //             console.log(res.data);
// //         })
// //     }

//     return (
//         <div>
//             <img src='https://i.pinimg.com/originals/04/c5/09/04c5090dc897a4f98ac7b5f80d3e0d24.png' className=' h-[300px] w-full object-cover rounded-xl' />
//             <div className="flex justify-between items-center">
//                 <div className="my-5 flex flex-col gap—2">
//                     <h2 className="font-bold text-2xl">{trip?.userSelection?.location.toUpperCase()}</h2>
//                     <div className=" mt-2 flex flex-row gap-5">
                    
//                         <h2 className="p-1 px-3 bg-gray-200 rounded-md text-gray-500 text-xs md:text-lg">📅{trip?.userSelection?.noOfDays} Day</h2>
//                         <h2 className="p-1 px-3 bg-gray-200 rounded-md text-gray-500 text-xs md:text-lg">💰{trip?.userSelection?.budget} Budget</h2>
//                         <h2 className="p-1 px-3 bg-gray-200 rounded-md text-gray-500 text-xs md:text-lg">👨🏻‍💼No. of Traveler: {trip?.userSelection?.people}</h2>
//                     </div>
//                 </div>
                
//                 <Button className="mt-8 ">➤</Button>
//             </div>
//         </div>
//     )
// }

// export default InfoSection


import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { RWebShare } from 'react-web-share'

 function InfoSection({ trip }) {
    return (
        <div>
            <img
                src="https://i.pinimg.com/originals/04/c5/09/04c5090dc897a4f98ac7b5f80d3e0d24.png"
                className="h-[300px] w-full object-cover rounded-xl"
                alt="Trip Cover"
            />
            <div className="flex justify-between items-center my-5">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-2xl">
                        {trip?.userSelection?.location?.toUpperCase() || "Unknown Location"}
                    </h2>
                    <div className="mt-2 flex flex-row gap-5">
                        <h2 className="p-1 px-3 bg-gray-200 rounded-md text-gray-500 text-xs md:text-lg">
                            📅 {trip?.userSelection?.noOfDays || 0} Day
                        </h2>
                        <h2 className="p-1 px-3 bg-gray-200 rounded-md text-gray-500 text-xs md:text-lg">
                            💰 {trip?.userSelection?.budget || "N/A"} Budget
                        </h2>
                        <h2 className="p-1 px-3 bg-gray-200 rounded-md text-gray-500 text-xs md:text-lg">
                            👨🏻‍💼 No. of Travelers: {trip?.userSelection?.people || 1}
                        </h2>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <RWebShare
                        data={{
                            text: "Check out this amazing trip!",
                            url: `https://tripplannerai.vercel.app/public-trip/${trip.id}`,
                            //  url: `http://localhost:5173/view-trip/${trip.id}`,
                            title: "Trip Details",
                        }}
                        onClick={() => console.log("shared successfully!")}
                    >
                         <Button className="mt-8">➤</Button>
                    </RWebShare>
                   
                </div>
            </div>
        </div>
    );
}
export default InfoSection;