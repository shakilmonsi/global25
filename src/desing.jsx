
const desing = () => {
  return (
    <div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-black max-w-[1340px] mx-auto md:px-4 lg:px-4 px-3 lg:py-28 md:py-20 py-3">
            {/* cart-1   */}
            <div className="w-96 bg-[#191919] text-white rounded-xl shadow-2xl overflow-hidden m-4">
              <div>
                <div>
                  {/* Image Section */}
                  <div className="p-4">
                    <img
                      src={heroBanner}
                      alt="Project"
                      className="w-full h-40 object-cover"
                    />
                  </div>
      
                  {/* Card Body */}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-blue-400">
                      Project Informations
                    </h2>
                    <p className="text-gray-300 text-sm mt-2">
                      Lorem ipsum is simply dummy text of the printing and typesetting
                      industry.
                    </p>
      
                    {/* Feature List */}
                    <ul className="mt-4 flex flex-col gap-3 text-sm">
                      {[
                        "JavaScript",
                        "Tailwind CSS",
                        "Bootstrap",
                        "React / Next JS",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-blue-600 text-lg"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
      
                    {/* Button */}
                    <div className="mt-6">
                      <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            {/* cart 2 */}
            <div className="w-96 bg-[#191919] text-white rounded-xl shadow-2xl overflow-hidden m-4">
              <div>
                <div>
                  {/* Image Section */}
                  <div className="p-4">
                    <img
                      src={heroBanner}
                      alt="Project"
                      className="w-full h-40 object-cover"
                    />
                  </div>
      
                  {/* Card Body */}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-blue-400">
                      Project Informations
                    </h2>
                    <p className="text-gray-300 text-sm mt-2">
                      Lorem ipsum is simply dummy text of the printing and typesetting
                      industry.
                    </p>
      
                    {/* Feature List */}
                    <ul className="mt-4 flex flex-col gap-3 text-sm">
                      {[
                        "JavaScript",
                        "Tailwind CSS",
                        "Bootstrap",
                        "React / Next JS",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-blue-600 text-lg"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
      
                    {/* Button */}
                    <div className="mt-6">
                      <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            {/* cart 3   */}
            <div className="w-96 bg-[#191919] text-white rounded-xl shadow-2xl overflow-hidden m-4">
              <div>
                <div>
                  {/* Image Section */}
                  <div className="p-4">
                    <img
                      src={heroBanner}
                      alt="Project"
                      className="w-full h-40 object-cover"
                    />
                  </div>
      
                  {/* Card Body */}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-blue-400">
                      Project Informations
                    </h2>
                    <p className="text-gray-300 text-sm mt-2">
                      Lorem ipsum is simply dummy text of the printing and typesetting
                      industry.
                    </p>
      
                    {/* Feature List */}
                    <ul className="mt-4 flex flex-col gap-3 text-sm">
                      {[
                        "JavaScript",
                        "Tailwind CSS",
                        "Bootstrap",
                        "React / Next JS",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-blue-600 text-lg"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
      
                    {/* Button */}
                    <div className="mt-6">
                      <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition border-[#008DBD] border-b-4 border-r-4">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default desing
