import { useEffect, useState } from 'react'
import { Link, useNavigation } from 'react-router-dom';
import { db } from '../service/firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";

import UserTripCard from './components/UserTripCard';
import { Button } from '@/components/ui/button';
// import { toast } from 'sonner'
function MyTrips() {
    const navigation = useNavigation();
    const [userTrips, setUserTrips] = useState([]);
    

    useEffect(() => {
        const GetUserTrips = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (!user) {
                navigation('/');
                return;
            }
            setUserTrips([]);
            const q = query(collection(db, "AITrips"), where("userEmail", "==", user?.email));
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot);
            querySnapshot.forEach((doc) => {
                const newData = doc.data();
                const newId = newData.id;
            
                setUserTrips(prevVal => {
                    // Check if the id already exists in the current state
                    const exists = prevVal.some(trip => trip.id === newId);
                    if (!exists) {
                        return [...prevVal, newData];
                    }
                    return prevVal;
                });
            });
        };

        GetUserTrips();
    }, [navigation]);


    console.log(userTrips)




    return (


        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
            <h2 className='font-bold text-3xl'>My Trip✈️</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-10'>
                {userTrips?.length > 0 ? userTrips.map((trip, index) => (

                    <UserTripCard trip={trip} key={index} />
                ))
                    : [1, 2, 3, 4, 5,6].map((item, index) => (
                        <div key={index} className=' h-[180px] w-full bg-slate-200 animate-pulse rounded-md border border-gray-300'>
                        </div>

                    ))
                }

            </div>
            <div className='flex justify-end mt-10'>
        <Link to='/'>
            <Button className="mb-4">Home</Button>
        </Link>
    </div>
        </div>
    )
}

export default MyTrips
