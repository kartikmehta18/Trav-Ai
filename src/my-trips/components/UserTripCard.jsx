import { Link } from "react-router-dom"


function UserTripCard({trip} ) {
  return (
    <Link to={`/view-trip/${trip.id}`} >
    <div className=" mb-10 border felx gap-5 p-3 shadow-md mt-2 bg-gray-100 rounded-md hover:scale-90  transition-all cursor-pointer hover:rotate-2 hover:border-orange-500">
        <img src="https://i.pinimg.com/originals/04/c5/09/04c5090dc897a4f98ac7b5f80d3e0d24.png" className="object-cover rounded-md" />
     <div>
        <h2 className="font-bold text-lg">{trip?.userSelection?.location.toUpperCase()}</h2>
        <h2 className="font-sm text-gray-500">{trip?.userSelection?.noOfDays} Days Trip with {trip?.userSelection?.budget}</h2>
     </div>
    </div>
    </Link>
  )
}

export default UserTripCard
