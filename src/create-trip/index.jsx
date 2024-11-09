import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../service/firebaseConfig";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelesList, AI_PROMPT } from "@/constants/options";
import { Button } from "@/components/ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "sonner";
import { chatSession } from "@/service/AImodel";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handeInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  useEffect(() => {
    // For debugging form data
    console.log(formData);
  }, [formData]);

  const onGenerateTrip = async () => {
    if (formData?.noOfDays > 7 || !formData?.location || !formData?.budget || !formData?.people) {
      toast("Please fill all the details.");
      return;
    }

    console.log(formData);
    setLoading(true);

    const FINAL_PROMPT = AI_PROMPT
      .replace('{location}', formData?.location)
      .replace('{totalDays}', formData?.noOfDays)
      .replace('{traveler}', formData?.people)
      .replace('{budget}', formData?.budget);

    console.log(FINAL_PROMPT);

    // Getting data from API
    try {
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      console.log("--", result?.response?.text());
      SaveAITrip(result?.response?.text());
    } catch (error) {
      console.error("Error generating trip:", error);
      toast("Error generating trip, please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to save generated trip to the database
  const SaveAITrip = async (TripData) => {
    setLoading(true);
    const docID = Date.now().toString();

    await setDoc(doc(db, "AITrips", docID), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      id: docID
    });

    setLoading(false);
    toast("✅ Trip Generated Successfully");
    navigate("/view-trip/" + docID);
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preferences 🌴📍</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </p>

      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">What is your destination of choice?</h2>
          <Input
            placeholder="India"
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            onBlur={() => handeInputChange('location', place)}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">How many days are you planning for your trip?</h2>
          <Input
            placeholder="Ex. 3"
            type="number"
            onChange={(e) => handeInputChange('noOfDays', e.target.value)}
          />
        </div>
      </div>

      <div>
        <h2 className='text-xl my-3 font-medium'>What is your budget?</h2>
        <div className="grid grid-flow-col gap-5 mt-4">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => handeInputChange('budget', item.title)}
              className={`text-black p-4 border rounded-lg hover:shadow-lg cursor-pointer bg-white ${formData?.budget === item.title && 'shadow-lg border-black'}`}
            >
              <h2 className="text-xl">{item.icon}</h2>
              <h2 className="font-bold">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className='text-xl my-3 font-medium'>Who do you plan on traveling with?</h2>
        <div className="grid grid-flow-col gap-5 mt-4">
          {SelectTravelesList.map((item, index) => (
            <div
              key={index}
              onClick={() => handeInputChange('people', item.people)}
              className={`text-black p-4 border rounded-lg hover:shadow-lg cursor-pointer bg-white ${formData?.people === item.people && 'shadow-lg border-black'}`}
            >
              <h2 className="text-xl">{item.icon}</h2>
              <h2 className="font-bold">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10 justify-end flex">
        <Button onClick={onGenerateTrip}>
          {loading ? (
            <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
          ) : (
            "Generate Trip"
          )}
        </Button>
      </div>
    </div>
  );
}

export default CreateTrip;
