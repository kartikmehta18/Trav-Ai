
export const SelectTravelesList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'A sole traveles in exploration',
        icon: '✈️',
        people: '1 People'
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'Two traveles in tandem',
        icon: '💑',
        people: '2 People'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving adv',
        icon: '🏡',
        people: '3 to 5 People'
    },
    {
        id: 4,
        title: 'Friend',
        desc: 'A group of fun loving adv',
        icon: '🫂',
        people: '3 to 9 People'
    },
]

export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: '💸',
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Stay conscious of costs',
        icon: '💰',
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Stay conscious of costs',
        icon: '💎',
    },

]

export const AI_PROMPT = "Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget, give me Hotels option list with HotelName,Hotel Address Price,image url, geo cordination ,rating, small description and suggest iteneary with placeName, Place Details, place Image Uel, Geo Cordinates, tickit Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format."