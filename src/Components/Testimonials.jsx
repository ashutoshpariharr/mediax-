import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const testimonials = [
        {
            name: "Himanshi Gogiya",
            course: "M.Sc. Biotech",
            text: "Dr. MPS College is a synonym for the temple of knowledge. The result-oriented training enables us to prepare for the corporate world. I developed my skills and am now working with Evelyn Learning Systems as a Subject Matter Expert.",
            img: "https://s3-alpha-sig.figma.com/img/9e7d/1bf5/a1bfa4cd8d3e04208c7081158802925f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WBUTCGqIfvwdYYKz9Vh2cR~UmB0p-g8wVqcTqFvcPHWG94HQI7bcaTq~6~HC0AcJs3UeMTvamiTnOk~mrCvvf~HuYA~Akh-mFf5mJCSo99F97KgIAhUbRUKqfUvaSomdgUX9ZqkuquV4SDLHwQv~QQcG3E01phwD5Z52bzGnfxPn5imqrOw2PofvEs~jlwWJT~BnSD6S0YffzIuVv05NVkZDmqg0Hd-E~8eaSkicDN9eA7qcpGn1dcjmxLN8tkwXpE0dOrQTxcqwN0VdboJzG-8F6UrWa9D91pYWag7fy4EXfDaMbr2yfQd9M-SE~uS-zTTiYJU2b2Mrt01znLq9Lg__"
        },
        {
            name: "Nipra Singh",
            course: "B.COM",
            text: "I am privileged to be a student of Dr. MPS College. Because it's a place where we, the youngsters, get the environment of quality education in every aspect. So, I am highly delighted and proud to be a part of this college.",
            img: "https://s3-alpha-sig.figma.com/img/48d5/b9ab/3e4f730f3f28733da55fa28c4834d138?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VSvDkeUsNdTN~1fAoWP~TjEen~b4JPvUYwjeo6j3s2MuIjPxLwO5dWDIXVUtaPVbszLAcldfc4bhnNV~2x9FMv5alxCIar3EQZM5HUwuV44hsQztvnlCl7OK7aEC-PJjI4rVmenRlBIPr~ZYHjeUN8sa7yl~ipz30mJXtr4O7VuIMwW0GS4VoGm2AvlxPhGTMDak35aNXVKpY5NIPWdn02~WWyDNLj1JGKM8YXMLyhnwbsqGfaSAyHW23cYlRrQ~iLUdxPkpo411D1LSEwxFLy2FtvFcaQsA98kO-FZ9KBkD4X76ct7h0N~1EmNxl9L0RAVLDgRi4tcWMvzGhqlBKA__"
        },
        {
            name: "Dhruv Motwani",
            course: "BBA",
            text: "Dr. MPS Group of Institutions provides quality education with perfect industrial exposure which helps us to develop our skills and make a successful career.",
            img: "https://s3-alpha-sig.figma.com/img/6e17/2b19/72c59d055b027620ffafb1a1c6ab1d19?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DU~MQa3gHNuvYvbH23wBgqQz3TCRMEqSpqfbLig7DlYsY-3ncNwz~KFrmUUKZrVI4Q~UeKeXmhM-KfthnZOPDcxTkU-3b4vR7ePBYmUioFfQ5CXxuUZQjN1dGFxhbRkipWtF7yF4U4AmyG3XRh8PposawBAU~usxXEjUN1QUZJ1tjTsAgTKol8nkpK0PQEl-8m3QzjD3Mkxl6pjXMZIiF9g61bRxdoeXeVnayCtc~aJtSevkbf8cZUReSM443NodRBVOYOvVcdGXdufvbji4I8kb1A--ST1FyJCjfXDSr8~3bmAdBxlX0qW8XQCSpdMacSAB7zUaLQLgGISq34DoTw__"
        },
        {
            name: "Nipra Singh",
            course: "B.COM",
            text: "I am privileged to be a student of Dr. MPS College. Because it's a place where we, the youngsters, get the environment of quality education in every aspect. So, I am highly delighted and proud to be a part of this college.",
            img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Dhruv Motwani",
            course: "BBA",
            text: "Dr. MPS Group of Institutions provides quality education with perfect industrial exposure which helps us to develop our skills and make a successful career.",
            img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Nipra Singh",
            course: "B.COM",
            text: "I am privileged to be a student of Dr. MPS College. Because it's a place where we, the youngsters, get the environment of quality education in every aspect. So, I am highly delighted and proud to be a part of this college.",
            img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ];

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentStartIndex((prev) => (prev + 1) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    const getDisplayIndices = () => {
        return [
            currentStartIndex % testimonials.length,
            (currentStartIndex + 1) % testimonials.length,
            (currentStartIndex + 2) % testimonials.length
        ];
    };

    return (
        <div className="py-16 bg-white" id="success">
            <div className="text-center mb-16">
                <div className="inline-flex items-center">
                    <div className="w-2 h-8 bg-orange-500 mr-3"></div>
                    <h2 className="text-4xl font-bold text-blue-900">Success Stories</h2>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <div className="flex justify-between items-center mb-12">
                        <div className="flex-1 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {getDisplayIndices().map((index) => {
                                const testimonial = testimonials[index];
                                return (
                                    <div
                                        key={index}
                                        className={`
                                            bg-white p-6 rounded-lg shadow-lg relative
                                            transform transition-all duration-500 ease-in-out
                                            hover:scale-105 hover:shadow-xl
                                            ${isAnimating ? 'opacity-0' : 'opacity-100'}
                                        `}
                                    >
                                        <div className="text-center">
                                            <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                                                <img
                                                    src={testimonial.img}
                                                    alt={testimonial.name}
                                                    className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
                                                />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-800 mb-1 transform transition-all duration-300 hover:text-orange-500">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-orange-500 font-medium mb-4">{testimonial.course}</p>
                                            <p className="text-gray-600 leading-relaxed transition-all duration-300 hover:text-gray-800">
                                                {testimonial.text}
                                            </p>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
                                            <div className="h-full bg-orange-500 transform transition-transform duration-500 hover:scale-x-110"></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={prevSlide}
                        disabled={isAnimating}
                        className="p-4 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        disabled={isAnimating}
                        className="p-4 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;