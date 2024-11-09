import { FaMapLocationDot } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
function PlaceCardItem({ place }) {
    return (
        <Link target="_blank" to={`https://www.google.com/maps/search/?api=1&query=` + place.placeName + ',' + place.PlaceDetails} >
            <div className="  border felx gap-5 p-3 shadow-md mt-2 bg-gray-100 rounded-md hover:scale-90  transition-all cursor-pointer hover:rotate-2 hover:border-orange-500">
                <img src="https://i.pinimg.com/originals/04/c5/09/04c5090dc897a4f98ac7b5f80d3e0d24.png" className=" w-[130px]  rounded-xl" />
                
                <div className=" ">
                    <h2 className="font-bold text-lg">{place.placeName}</h2>
                    <h2 className="text-sm text-gray-400">📍{place.PlaceDetails}</h2>
                    <h2 className="font-sm ">💰{place.tickitPricing}</h2>
                    <h2 className=" flex justify-between font-medium text-orange-500">🕛{place.time}<span className="mt-2"><FaMapLocationDot /></span></h2>
                    
                    {/* <Button className='shadow-md shadow-orange-200' onClic><FaMapLocationDot /></Button> */}


                </div>
            </div>
        </Link>

    )
}

export default PlaceCardItem
