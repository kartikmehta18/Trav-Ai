import { GoogleGenerativeAI, } from "@google/generative-ai";

// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/generative-ai");
//   const { GoogleAIFileManager } = require("@google/generative-ai/server");

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
//   const fileManager = new GoogleAIFileManager(apiKey);

/**
 * Uploads the given file to Gemini.
 *
 * See https://ai.google.dev/gemini-api/docs/prompting_with_media
 */
//   async function uploadToGemini(path, mimeType) {
//     const uploadResult = await fileManager.uploadFile(path, {
//       mimeType,
//       displayName: path,
//     });
//     const file = uploadResult.file;
//     console.log(`Uploaded file ${file.displayName} as: ${file.name}`);
//     return file;
//   }

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


// TODO Make these files available on the local file system
// You may need to update the file paths
// const files = [
//   await uploadToGemini("image_food4.jpeg", "image/jpeg"),
// ];

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        // {
        //   fileData: {
        //     mimeType: files[0].mimeType,
        //     fileUri: files[0].uri,
        //   },
        // },
        { text: "enerate Travel Plan for Location: mumbai, for 1 Days for 1 People with a Moderate budget, give me Hotels option list with HotelName,HotelAddress Price,imageurl, geocordination ,rating, description and suggest iteneary with placeName, PlaceDetails, placeImageUel, GeoCordinates, tickitPricing, time for 1 days with each day plan with best time to visit in JSON format." },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n{\"hotels\": [{\"HotelName\": \"The Taj Mahal Palace, Mumbai\", \"HotelAddress\": \"Apollo Bunder, Colaba, Mumbai, Maharashtra 400001\", \"Price\": \"₹15,000 - ₹30,000\", \"imageurl\": \"https://www.tajhotels.com/content/dam/taj/images/hotels/india/mumbai/the-taj-mahal-palace-mumbai/hotel-gallery/exterior-views/the-taj-mahal-palace-mumbai-exterior-1.jpg\", \"geocordination\": \"18.9221, 72.8347\", \"rating\": \"4.5\", \"description\": \"A historic and iconic hotel in Mumbai, known for its luxurious accommodations, fine dining, and stunning views of the Arabian Sea.\"}, {\"HotelName\": \"The Oberoi Mumbai\", \"HotelAddress\": \"Nariman Point, Mumbai, Maharashtra 400021\", \"Price\": \"₹12,000 - ₹25,000\", \"imageurl\": \"https://www.oberoihotels.com/media/images/hotels/mumbai/the-oberoi-mumbai/hotel-gallery/exterior-views/the-oberoi-mumbai-exterior-2.jpg\", \"geocordination\": \"18.9324, 72.8280\", \"rating\": \"4.8\", \"description\": \"A sophisticated and elegant hotel in Mumbai, offering luxurious rooms, world-class amenities, and exceptional service.\"}, {\"HotelName\": \"The Leela Palace Mumbai\", \"HotelAddress\": \"Andheri East, Mumbai, Maharashtra 400093\", \"Price\": \"₹10,000 - ₹20,000\", \"imageurl\": \"https://www.theleela.com/content/dam/theleela/hotels/mumbai/gallery/exterior/leela-palace-mumbai-exterior-01.jpg\", \"geocordination\": \"19.1046, 72.8682\", \"rating\": \"4.6\", \"description\": \"A grand and luxurious hotel in Mumbai, featuring spacious rooms, multiple dining options, and a tranquil spa.\"}, {\"HotelName\": \"The Trident, Mumbai\", \"HotelAddress\": \"Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051\", \"Price\": \"₹8,000 - ₹18,000\", \"imageurl\": \"https://www.thetridenthotels.com/media/images/hotels/mumbai/the-trident-mumbai/hotel-gallery/exterior-views/the-trident-mumbai-exterior-2.jpg\", \"geocordination\": \"19.0665, 72.8655\", \"rating\": \"4.4\", \"description\": \"A modern and stylish hotel in Mumbai, offering comfortable accommodations, a rooftop pool, and a vibrant dining scene.\"}], \"iteneary\": [{\"day\": 1, \"plan\": [{\"placeName\": \"Gateway of India\", \"PlaceDetails\": \"A historic arch monument built in 1924 to commemorate the arrival of King George V and Queen Mary.\", \"placeImageUel\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Gateway_of_India_at_sunset.jpg/1024px-Gateway_of_India_at_sunset.jpg\", \"GeoCordinates\": \"18.9220, 72.8348\", \"tickitPricing\": \"Free\", \"time\": \"30 minutes\"}, {\"placeName\": \"Elephanta Caves\", \"PlaceDetails\": \"Ancient cave temples dedicated to the Hindu god Shiva, located on an island in the harbor.\", \"placeImageUel\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Elephanta_Caves.jpg/1280px-Elephanta_Caves.jpg\", \"GeoCordinates\": \"18.9827, 73.0460\", \"tickitPricing\": \"₹30 for Indians, ₹600 for foreigners\", \"time\": \"1 hour\"}, {\"placeName\": \"Dhobi Ghat\", \"PlaceDetails\": \"A massive open-air laundry where thousands of clothes are washed and dried every day.\", \"placeImageUel\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Dhobi_Ghat_%28Mumbai%29.jpg/1024px-Dhobi_Ghat_%28Mumbai%29.jpg\", \"GeoCordinates\": \"19.0145, 72.8269\", \"tickitPricing\": \"Free\", \"time\": \"30 minutes\"}, {\"placeName\": \"Chhatrapati Shivaji Maharaj Terminus\", \"PlaceDetails\": \"A UNESCO World Heritage Site, this grand railway station is a masterpiece of Victorian Gothic Revival architecture.\", \"placeImageUel\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Chhatrapati_Shivaji_Terminus_02.jpg/1024px-Chhatrapati_Shivaji_Terminus_02.jpg\", \"GeoCordinates\": \"18.9428, 72.8344\", \"tickitPricing\": \"Free\", \"time\": \"30 minutes\"}, {\"placeName\": \"Marine Drive\", \"PlaceDetails\": \"A scenic promenade along the waterfront, known as the \\\"Queen's Necklace\\\" for its glittering lights at night.\", \"placeImageUel\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Marine_Drive_%28Mumbai%29.jpg/1280px-Marine_Drive_%28Mumbai%29.jpg\", \"GeoCordinates\": \"18.9436, 72.8296\", \"tickitPricing\": \"Free\", \"time\": \"30 minutes\"}]}]}\n\n```" },
      ],
    },
  ],
});



