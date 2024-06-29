import React from "react";
import SmallCard from "./small-card";

const Component1 = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <SmallCard
          title={"RMTF"}
          description={
            "RMTF is a React component library designed to provide beautiful UI elements for your web applications. It offers ready-to-use components styled with Tailwind CSS, making customization and integration effortless."
          }
          direction={true}
        />
        <SmallCard
          title={"VITE"}
          description={
            " VITE is another component included in this package, providing  advanced UI solutions for React applications. Built with performance and flexibility in mind, it's perfect for modern web development projects."
          }
          direction={false}
        />
        <SmallCard
          title={"TAILWIND CSS"}
          description={`TAILWIND CSS provides additional components and utilities to enhance user experience in React applications. It includes responsive designs and accessibility features out of the box.`}
          direction={true}
        />

        <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Component1;
