const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(
          "https://blog.cleanhub.com/hubfs/LAL04920%201.jpg"
        )`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ background: `rgba(0,0,0,0.7)` }}>
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  py-52">
          <h2 className="mb-6 font-sans text-6xl md:text-8xl font-bold leading-none tracking-tight text-green-500 text-center md:text-left">
            GREEN <span className="text-white">HAWKER</span>
          </h2>

          <p className="text-lg text-indigo-100 my-5 md:text-left text-center">
            We highly concern about all the environmental and personal safety
            precautions.
          </p>
          <div className="flex items-center justify-center md:block">
            <a
              href="/"
              className="h-12 px-6 inline-flex items-center justify-center font-semibold duration-200 rounded shadow-md text-white bg-green-500 hover:bg-white hover:text-green-500 mx-auto"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
