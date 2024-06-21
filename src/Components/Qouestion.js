import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import img from "../assets/div.elementor-widget-wrap (1).png";

const Question = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='w-full p-4 h-96'>
            <div>
                <div className='p-7'>
                    <p className='text-primary-color text-center'>Get Your Answer</p>
                    <h1 className='text-4xl text-center font-semibold text-quaternary-color'>Frequently Asked Questions</h1>
                </div>
                <div className='flex flex-col lg:flex-row justify-center'>
                    <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
                        <img src={img} alt="" className='w-96 h-auto' />
                    </div>
                    <div className='w-full lg:w-1/2 p-4'>
                        {faqData.map((faq, index) => (
                            <div key={index} className="relative mb-3">
                                <h6 className="mb-0">
                                    <button
                                        className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group"
                                        onClick={() => handleToggle(index)}
                                    >
                                        <span>{faq.question}</span>
                                        <FontAwesomeIcon
                                            icon={activeIndex === index ? faMinus : faPlus}
                                            className="absolute right-64 text-xs"
                                        />
                                    </button>
                                </h6>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}
                                >
                                    <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const faqData = [
    {
        question: "What is Material Tailwind?",
        answer: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams."
    },
    {
        question: "How to use Material Tailwind?",
        answer: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams."
    },
    {
        question: "What can I do with Material Tailwind?",
        answer: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams."
    },
    {
        question: "What can I do with Material Tailwind?",
        answer: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams."
    }
];

export default Question;
