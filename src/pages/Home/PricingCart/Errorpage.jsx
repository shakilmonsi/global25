<div className="min-h-screen flex items-center justify-center bg-background px-4">
  <div className="bg-background p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 rounded-3xl shadow-2xl w-full max-w-2xl text-center border-[1px] border-border-color">
    <div className="mb-6">
      <div className="text-[88px] font-extrabold text-red-500 leading-none font-primary">
        404
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-[#FFF] mt-4 font-primary">
        Page Not Found
      </h2>
    </div>
    <p className="text-[#FFF] text-base sm:text-lg mb-6 font-secondary ">
      The page you're looking for doesn't exist or may have been moved. Please
      check the URL or go back to the home page.
    </p>

    <Link
      to="/"
      className="inline-block bg-cta text-cta-text text-base sm:text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:bg-cta-active hover:text-cta-txt-active hover:scale-105 transform transition duration-300 ease-in-out"
    >
      ⬅️ Back to Home
    </Link>
  </div>
</div>;


`
``
bg show 0`


<div
  className="min-h-screen flex items-center justify-center px-4 bg-no-repeat bg-cover bg-center bg-background"
>
  <div
    className="w-[900px] h-[500px] relative bg-no-repeat bg-cover bg-center"
    style={{
      backgroundImage: "url('/assits/404bg/404svg.svg')", // Ensure the correct path
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    {/* Overlay div with 30% opacity */}
    <div
      className="absolute inset-0 bg-background"
      style={{
        opacity: 0.6,
      }}
    ></div>
    
    <div className="relative text-center w-[500px] justify-center mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#FFF] mt-4 font-primary">Page not found!</h2>
      </div>
      <p className="text-[#FFF] text-base sm:text-lg mb-6 font-secondary">
        The page you are looking for was not found! You can go to the page you need by clicking on any of the links shown in the menu above or go to the website home page by clicking on the Learn with Sumit logo above.
      </p>
      <Link
        to="/"
        className="inline-block bg-cta text-cta-text text-base sm:text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:bg-cta-active hover:text-cta-txt-active hover:scale-105 transform transition duration-300 ease-in-out"
      >
        ⬅️ Back to Home
      </Link>
    </div>
  </div>
</div>

<div
  className="min-h-screen flex items-center justify-center px-4 bg-no-repeat bg-cover bg-center bg-background"
>
  <div
    className="w-[900px] h-[500px] relative bg-no-repeat bg-cover bg-center"

    style={{
      backgroundImage: "url('/assits/404bg/404svg2.svg')", // Ensure the correct path
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    {/* Overlay div with 30% opacity */}
    <div
      className="absolute inset-0 bg-background"
      style={{
        opacity: 0.6,
      }}
    ></div>
    
    <div className="relative text-center w-[500px] justify-center mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#FFF] mt-4 font-primary">Page not found!</h2>
      </div>
      <p className="text-[#FFF] text-base sm:text-lg mb-6 font-secondary">
        The page you are looking for was not found! You can go to the page you need by clicking on any of the links shown in the menu above or go to the website home page by clicking on the Learn with Sumit logo above.
      </p>
      <Link
        to="/"
        className="inline-block bg-cta text-cta-text text-base sm:text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:bg-cta-active hover:text-cta-txt-active hover:scale-105 transform transition duration-300 ease-in-out"
      >
        ⬅️ Back to Home
      </Link>
    </div>
  </div>
</div>
