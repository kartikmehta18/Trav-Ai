import PlaceCardItem from "./PlaceCardItem"


function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-lg">Places To Visit</h2>
      <div className="xl:grid grid-cols-2 gap-4">
        {trip.tripData?.iteneary.map((item, index) => (
          <div key={index}>
            <h2 className="font-bold text-lg underline underline-offset-8 decoration-orange-500">Day  {item.day}</h2>

            {item.plan.map((place, index) => (
              <div key={index}>

                <PlaceCardItem place={place} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlacesToVisit
