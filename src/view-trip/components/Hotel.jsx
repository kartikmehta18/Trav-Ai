

// import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Hotel({ trip }) {
    const [responseId, setResponseId] = useState("");
    const [responseState, setResponseState] = useState("");
    const [loading, setLoading] = useState(false);

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;

            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const createRazorpayOrder = async () => {
        const data = JSON.stringify({
            amount: 100, // Amount in paise (100 paise = 1 INR)
            currency: "INR",
        });

        const config = {
            method: "post",
            maxBodyLength: Infinity,
            url: "https://travai.onrender.com/orders",
            //   url: " http://localhost:3000/orders",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios.request(config)
            .then((response) => {
                console.log("Order created:", response.data);
                handleRazorpayScreen(response.data.amount, response.data.order_id);
            })
            .catch((error) => {
                console.error("Error creating order:", error);
            });
            setLoading(true)
    };

    const handleRazorpayScreen = async (amount, orderId) => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const options = {
            key: "rzp_test_VIETwGSQnb8sjv",
            amount: amount,
            currency: "INR",
            name: "TravAI",
            description: "Thank you for booking",
            image: "/logo.png",
            order_id: orderId, // Pass the order ID to Razorpay
            handler: function (response) {
                setResponseId(response.razorpay_payment_id);
                console.log("Payment successful:", response);
                fetchPaymentDetails(response.razorpay_payment_id);
            },
            prefill: {
                name: "TravAI",
                email: "kartik@example.com",
            },
            theme: {
                color: "#f97316",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        setLoading(false)
    };

    const fetchPaymentDetails = (paymentId) => {
        axios.get(`https://travai.onrender.com/payment/${paymentId}`)
        // axios.get(`http://localhost:3000/payment/${paymentId}`)

            .then((res) => {
                console.log("Payment details:", res.data);
                setResponseState(res.data);
            })
            .catch((error) => {
                console.error("Error fetching payment details:", error);
            });
    };

    return (
        <div>
            <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>
            <div className="grid lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {trip?.tripData?.hotels?.map((hotel, index) => (
                    <div className="bg-gray-100 p-2 rounded-xl hover:shadow-lg" key={index}>
                        <Link target="_blank" to={`https://www.google.com/maps/search/?api=1&query=${hotel.HotelName},${hotel.HotelAddress}`}>
                            <div className="hover:scale-105 transition-all cursor-pointer">
                                <img src="https://i.pinimg.com/originals/04/c5/09/04c5090dc897a4f98ac7b5f80d3e0d24.png" className="rounded-xl mt-2" />
                                <div className="my-4 flex flex-col gap-1">
                                    <h2 className="font-medium">{hotel.HotelName}</h2>
                                    <h2 className="text-xs text-gray-500">📍{hotel.HotelAddress}</h2>
                                    <h2 className="font-sm">💰{hotel.Price}</h2>
                                    <h2 className="font-sm">⭐{hotel.rating}</h2>
                                </div>
                            </div>
                        </Link>


                        <button className="btun"  onClick={() => createRazorpayOrder()}>
                            <span className="circle1"></span>
                            <span className="circle2"></span>
                            <span className="circle3"></span>
                            <span className="circle4"></span>
                            <span className="circle5"></span>
                           
                            {loading ?
            <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" /> : "Buy now"
          }
                        </button>


                        {/* <Button
                            onClick={() => createRazorpayOrder()}
                        >
                            Buy now
                        </Button> */}
                        {responseId &&
                        
                        <h2 className="text-green-500">Success ✅:  {responseId}</h2>}
                        
                        {responseState && (
                            <div>
                                <h2>Payment Status: {responseState.status}</h2>
                                <h2>Amount: {responseState.amount}</h2>
                                <h2>Method: {responseState.method}</h2>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hotel;