"use client";

import { AnimatePresence, motion } from "framer-motion"; // Corrected import
import { useState } from "react";

// Data for the tabs
export const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
];

// Tabs Data (can be imported separately or defined inside the component)
export const tabs = [allIngredients[0], allIngredients[1], allIngredients[2]];

// The main component
const CategoryAnimation = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]); // Ensure this is set correctly

  return (
    <div className="w-[480px] h-[60vh] max-h-[360px] rounded-lg bg-white shadow-lg flex flex-col overflow-hidden">
      {/* Navigation */}
      <nav className="bg-gray-50 p-2 border-b border-gray-200 rounded-t-lg">
        <ul className="flex w-full space-x-2">
          {tabs.map((item) => (
            <motion.li
              key={item.label}
              initial={false}
              animate={{
                backgroundColor: item === selectedTab ? "#eee" : "#eee0",h
              }}
              className={`flex-1 p-2 text-center text-gray-900 font-medium cursor-pointer relative ${
                item === selectedTab ? "bg-gray-200" : "bg-white"
              }`}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"
                  layoutId="underline"
                />
              ) : null}
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Animated Icon Display */}
      <main className="flex flex-1 justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-8xl"
          >
            {selectedTab ? selectedTab.icon : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default CategoryAnimation;
