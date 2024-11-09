import axios from "axios"

const BASE_URL ='https://places.googleapis.com/v1/places:'

const config={
    heasers:{
        'Content-Type':'application/json',
        'X-Goog-Api-Key':import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
        'X-Goog-FieldMask':[
            'place.photos',
            'place.id',
            'place.photos',
        ]
    }
}

export const getPlaceDetail=(data)=>axios.post(BASE_URL,data,config)