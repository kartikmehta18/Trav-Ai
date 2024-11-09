import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../service/firebaseConfig";
import { toast } from "sonner";
// import InfoSection from '../components/InfoSection';
// import Hotel from '../components/Hotel';
// import PlacesToVisit from '../components/PlacesToVisit';
import InfoSection from '@/view-trip/components/InfoSection';
import Hotel from '@/view-trip/components/Hotel';
import PlacesToVisit from '@/view-trip/components/PlacesToVisit';

function PublicTrip() {
    const [trip, setTrip] = useState({});
    const { tripId } = useParams();
    useEffect(() => {
        tripId && getTripData();
    // }, [tripId])
    }, [])

    //Used to get Trip Information from Firebase

    const getTripData = async () => {
        const docRef = doc(db, "AITrips", tripId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document:", docSnap.data());
            setTrip(docSnap.data());
        } else {
            console.log("No such document");
            toast(" ❌ No such document");
        }

    }
    return (
        <div className='p-10 md:px-20 lg:44 xl:px-50'>
            {/* Information Section */}
            <InfoSection trip={trip} />
            {/* Recommended Hotels */}
            <Hotel trip={trip} />
            {/* Daily Plan */}
            <PlacesToVisit trip={trip} />
            {/* Footer */}
            {/* <Footer trip={trip} /> */}
        </div>
    )

} export default PublicTrip;
