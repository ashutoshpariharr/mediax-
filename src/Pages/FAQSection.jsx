import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  const faqData = [
    {
      question: "What is Webflow and why is it the best website builder?",
      answer: "Webflow is a powerful website building platform that combines design flexibility with professional development capabilities. It offers visual design tools while generating clean, production-ready code."
    },
    {
      question: "What is your favorite template from BRIX Templates?",
      answer: "BRIX Templates offers a wide variety of professionally designed Webflow templates for different industries and purposes. Each template is fully customizable and responsive."
    },
    {
      question: "How do you clone a Webflow Template from the Showcase?",
      answer: "Cloning a Webflow template from the Showcase involves selecting your desired template, purchasing a license, and using Webflow's clone feature to create your own copy that you can customize."
    },
    {
      question: "Why is BRIX Templates the best Webflow agency out there?",
      answer: "BRIX Templates specializes in creating high-quality, customizable Webflow templates with excellent customer support and regular updates to match current web design trends."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="inline-flex items-center">
        <div className="inline-flex items-center">
          <div className="w-2 h-8 bg-orange-500 mr-3"></div>
          <h2 className="text-4xl font-bold text-blue-900">Frequently asked questions</h2>
        </div>
      </div>

      {faqData.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
        >
          <button
            className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
            onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}
          >
            <span className="font-medium text-gray-900">{faq.question}</span>
            {openQuestion === index ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openQuestion === index ? 'max-h-48' : 'max-h-0'
              }`}
          >
            <p className="p-4 text-gray-600 border-t border-gray-100">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;