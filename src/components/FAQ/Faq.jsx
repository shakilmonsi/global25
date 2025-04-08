import { useState } from "react";

const domainFaqs = [
  {
    question: "What is a domain name?",
    answer: "A domain name is the web address like www.example.com.",
  },
  {
    question: "How do I register a domain?",
    answer:
      "You can register a domain through registrars like Namecheap or GoDaddy.",
  },
  {
    question: "How do I register a domain?",
    answer:
      "You can register a domain through registrars like Namecheap or GoDaddy.",
  },
  {
    question: "How do I register a domain?",
    answer:
      "You can register a domain through registrars like Namecheap or GoDaddy.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="py-16 px-4  w-[1400px] mx-auto">
      <h2 className="text-2xl font-bold mb-4">Domain FAQ</h2>
      <div className="space-y-4">
        {domainFaqs.map((faq, index) => (
          <div key={index} className="border p-4 rounded-xl shadow bg-white">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between w-full font-medium text-left"
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
