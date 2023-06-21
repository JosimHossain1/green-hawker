import Image from "next/image";
import logo from "../Assets/Logo.png";

const About = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pt-20 pb-16 flex justify-between items-center ">
        {/* Image Side */}
        <div className="flex-1 hidden md:block">
          <Image src={logo} alt="Logo" className="w-[400px]" />
        </div>

        {/* About Side */}
        <div className="flex-1">
          <Image
            src={logo}
            className="mx-auto md:mx-0 w-28 h-28 md:h-12 md:w-12"
            alt="Green Hawker Logo"
          />

          <h3 className="font-semibold mt-1 text-center md:text-left text-[#209C5E]">
            About us
          </h3>
          <h1 className="text-xl font-bold  my-4 text-center md:text-left">
            Green Hawker is the Leading E-waste Recycling company in Bangladesh.
          </h1>
          <p className="text-gray-500 text-[15px]">
            In addition to our commitment to environmental sustainability, Green
            Hawker is excited to introduce a convenient and innovative digital
            marketing initiative. We now offer an online platform where
            residents of Dhanmondi Ward 52 can sell their paper and plastic
            waste directly to us. By embracing digital marketing, we aim to make
            the process of recycling and waste management even more accessible
            and efficient for the community. Join us online today and contribute
            to a greener future by turning your waste into valuable resources.
            Green Hawker is an organisation dedicated to creating a sustainable
            environment by focusing on recycling, pollution removal, and waste
            management. They offer job opportunities in these fields and promote
            a fresh and eco-friendly lifestyle. Through educational programs,
            they encourage individuals to embrace sustainable practices and
            contribute to building a cleaner future. Green Hawker aims to make
            fresh environments, recycling, and waste management a part of
            everyday life.
          </p>
          <button
            type="button"
            className="bg-[#209C5E] text-white hover:bg-green-600 font-semibold rounded-lg text-md px-4 py-2 text-center mr-3 mt-5"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
