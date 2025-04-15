function BestContributor() {
  return (
    <div className="flex items-center justify-between  mx-auto px-8 gap-6  w-[1400px]">
      <div className="hero-content flex flex-col lg:flex-row items-center justify-center">
        <div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>

        <div className="lg:ml-8 mt-8 lg:mt-0 text-center lg:text-left">
          <h4 className="text-3xl font-semibold font-Ra text-primary font-primary ">
            Name
          </h4>
          <p className="text-lg text-white font-secondary ">Designation</p>
          <p className="text-lg text-white mt-1 font-secondary">Team Name</p>
          <p className="text-lg text-white mt-1 font-secondary">
            Department Name
          </p>
          <p className="text-lg text-white  mt-1 font-secondary">
            Achieve Amount
          </p>
          <p className="text-lg text-white mt-1 font-secondary">Rewards</p>
        </div>
      </div>

      {/* /// thank you manage */}
      <div>
        <div className=" flex items-center justify-cente">
          <div className="bg-card border border-border-color p-8 rounded-xl  text-center max-w-lg w-full">
            <h1 className="text-4xl font-extrabold text-green-500 mb-4 font-primary">
              Thank You!
            </h1>
            <p className="text-xl text-gray-700 mb-6 font-secondary">
              Your submission has been received. We appreciate your interest!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestContributor;

