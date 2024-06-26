import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa6';
import { CgProfile } from "react-icons/cg";


const ReviewsCard = ({ review, limit }) => {


    return (
        <div className='animate-[reviewCard_2s_ease_forwards] opacity-0 text-navText bg-card shadow-sm shadow-navText p-8 rounded-2xl relative max-w-[300px]  '>
            <FaQuoteLeft className='absolute -top-2 left-[22px] text-lg' />
            <p className='font-Chakra_Petch font-light leading-5 h-[220px] overflow-hidden'>{review.text}</p>
            <div className='flex items-center gap-3 mt-6'>
                <CgProfile className='text-3xl' />
                <span className='text-white'>Client Name</span>
            </div>
        </div>

    );
};

const Testinomial = () => {


    const reviews = [
        {
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae hic ab deleniti asperiores tempora repudiandae numquam quis velit aut, sed aspernatur sequi quia laudantium ad autem ratione doloremque veritatis ex necessitatibus eligendi quas voluptatibus eaque? Esse corrupti reprehenderit voluptatum maxime!",
            clientName: "lorem123"
        },
        {
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae hic ab deleniti asperiores tempora repudiandae numquam quis velit aut, sed aspernatur sequi quia laudantium ad autem ratione doloremque veritatis ex necessitatibus eligendi quas ",
            clientName: "lorem123"
        }, {
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae hic ab deleniti asperiores tempora repudiandae numquam quis velit aut, sed aspernatur sequi quia laudantium ad autem ratione doloremque veritatis ex necessitatibus eligendi quas voluptatibus eaque? Esse corrupti reprehenderit voluptatum maxime!",
            clientName: "lorem123"
        }
    ]

    return (
        <div className='sm:mx-10 md:mx-32 my-20 py-20 bg-reviewCard  p-6  rounded-2xl' id='testinomial'>
            <div className='flex flex-col justify-between gap-2 items-center'>
                <h1 className='animate-[navImg_1s_ease_forwards] opacity-0 text-white text-[48px] leading-[48px] xs:text-[60px] xs:leading-[60px] font-black font-poppins'> Testimonials</h1>
                <span className='animate-[navImg_1s_ease_200ms_forwards] opacity-0 xs:text-xl text-base font-semibold font-poppins text-navText'>Hear What Our Customers Have to Say</span>
            </div>
            <div className='m-10 mt-20 flex flex-wrap gap-10 justify-center items-center'>
                {reviews.map((review, index) => (
                    <ReviewsCard key={index} review={review} limit={30} />
                ))}

            </div>
        </div>
    )
}

export default Testinomial


