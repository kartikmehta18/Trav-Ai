// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '../ui/button'
import { FaTelegramPlane } from "react-icons/fa";
import { toast } from "sonner"

function ContactForm() {
    const [state, handleSubmit] = useForm("xyzgvzov");
    const [update, setUpdate] = useState();
    if (state.succeeded) {
        return <div className="flex items-center xl:ml-40 mb-4">
            {/* Newsletter */}
            <div className="flex flex-col justify-between w-full max-w-6xl h-auto p-6 shadow-xl bg-orange-500 rounded-lg xl:rounded-[29.59px]">

                {/* Top Image Aligned to Left */}
                <div className="flex justify-start -mt-10">
                    <img src="/sub1.svg" className="h-20 md:h-32 lg:h-40" />
                </div>

                {/* Heading and Description */}
                <div className=" text-center">
                    <h1 className="text-[#292929]  text-2xl md:text-3xl lg:text-[39.45px] font-bold leading-tight tracking-tight -mt-10">
                        Sign up to our newsletter
                    </h1>
                    <h2 className="mt-4 mb-4 text-white text-sm md:text-base font-bold leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Egestas et feugiat purus enim facilisi nunc blandit nullam.
                    </h2>
                </div>


                <form onSubmit={handleSubmit}>
                    {/* Input and Button */}
                    <div className="flex justify-center items-center max-sm:mt-10 max-sm:mb-20">
                        <div className="bg-white shadow-xl w-full max-w-lg p-2 rounded-lg flex flex-row justify-between">
                            <input
                                type="email"
                                name="email"
                                value={update}
                                required
                                placeholder="Enter your email"
                                className="bg-white w-full outline-none z-10"
                            />
                            <Button

                                type="submit" disabled={state.submitting}
                                onClick={() => {
                                    setUpdate("")
                                    handleSubmit();  // Submit the form or handle the submission logic
                                    toast("Subscribed Successfully!🎉");  // Show the toast notification
                                    document.querySelectorgetElementById('email').value = '';  // Clear the input field
                                }
                                }
                                className="ml-2 p-3 shadow-md shadow-orange-300 hover:scale-105 transition-all z-10"
                            >
                                <FaTelegramPlane className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </form>



                {/* Bottom Image Aligned to Right */}
                <div className="flex justify-end -mt-40 ">
                    <img src="/sub2.svg" className="h-20 md:h-32 lg:h-40" />
                </div>
            </div>
            <div className='bg-slate-800 h-2'></div>
        </div>;
    }
    return (
        <>
            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <textarea
                    id="message"
                    name="message"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form> */}


            <div className="flex items-center xl:ml-40 mb-4 ">
                {/* Newsletter */}
                <div className="flex flex-col justify-between w-full max-w-6xl h-auto p-6 shadow-xl bg-orange-500 rounded-lg xl:rounded-[29.59px]">

                    {/* Top Image Aligned to Left */}
                    <div className="flex justify-start -mt-10">
                        <img src="/sub1.svg" className="h-20 md:h-32 lg:h-40" />
                    </div>

                    {/* Heading and Description */}
                    <div className=" text-center">
                        <h1 className="text-[#292929]  text-2xl md:text-3xl lg:text-[39.45px] font-bold leading-tight tracking-tight -mt-10">
                            Sign up to our newsletter
                        </h1>
                        <h2 className="mt-4 mb-4 text-white text-sm md:text-base font-bold leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur. Egestas et feugiat purus enim facilisi nunc blandit nullam.
                        </h2>
                    </div>


                    <form onSubmit={handleSubmit}>
                        {/* Input and Button */}
                        <div className="flex justify-center items-center max-sm:mt-10 max-sm:mb-20 md:mb-4">
                            <div className="bg-white shadow-xl w-full max-w-lg p-2 rounded-lg flex flex-row justify-between">
                                <input
                                    type="email"
                                    name="email"
                                    value={update}
                                    placeholder="Enter your email"
                                    className="bg-white w-full outline-none z-10"
                                />
                                <Button

                                    type="submit" disabled={state.submitting}
                                    onClick={() => {
                                        setUpdate("")
                                        handleSubmit();  // Submit the form or handle the submission logic
                                        toast("Subscribed Successfully!🎉");  // Show the toast notification
                                        document.querySelectorgetElementById('email').value = '';  // Clear the input field
                                    }
                                    }
                                    className="ml-2 p-3 shadow-md shadow-orange-300 hover:scale-105 transition-all z-10"
                                >
                                    <FaTelegramPlane className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </form>



                    {/* Bottom Image Aligned to Right */}
                    <div className="flex justify-end -mt-40 ">
                        <img src="/sub2.svg" className="h-20 md:h-32 lg:h-40" />
                    </div>
                </div>
            </div>
        </>
    );
}



export default ContactForm;