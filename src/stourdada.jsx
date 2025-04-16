import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import EmployeeSummary from "../EmployeeSummary/EmployeeSummary";

const UserInformation = ({ userId = "123" }) => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.post(
          "http://192.168.10.47:3000/api/teamMember",
          {
            user_id: userId,
            limit: "50", // তোমার কাঙ্ক্ষিত ইউজার আইডি এখানে
          }
        );

        const fetchedUser = res.data.teamMembers?.[0]; // ধরে নিচ্ছি response অ্যারে

        if (!fetchedUser) {
          setUser(null);
          return;
        }

        setUser({
          avatar: fetchedUser.dp || "/default.jpg",
          name: `${fetchedUser.first_name || ""} ${
            fetchedUser.last_name || ""
          }`,

          email: fetchedUser.email,
          phone: fetchedUser.number,
          permanent_address: fetchedUser.permanent_address,
          present_address: fetchedUser.present_address,
          gender: fetchedUser.gender,
          blood_group: fetchedUser.blood_group,
          religion: fetchedUser.religion,
          relationship_status: fetchedUser.relationship,
          education: fetchedUser.education,
          guardian_relation: fetchedUser.guardian_relation,
          guardian_number: fetchedUser.guardian_number,
          guardian_address: fetchedUser.guardian_address,
          religion: fetchedUser.religion,
          department: fetchedUser.team?.department?.department_name || "",
          role: fetchedUser.role || "N/A",
          location: fetchedUser.location || "N/A",
          manager: fetchedUser.manager || "N/A",
          status: fetchedUser.status || "Active",
          joined: fetchedUser.joining_date || "N/A",
          last_login: fetchedUser.last_login || "N/A",
          access_level: fetchedUser.access_level || "User",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-xl text-accent">
        <Loading></Loading>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center mt-10 text-secondary">Data not fount</div>
    );
  }

  const Info = ({ label, value }) => (
    <p className="text-base font-light text-accent mb-2 pr-1 font-secondary border-b pb-1 border-accent/20 flex items-center">
      <strong className="pr-1">{label}:</strong> {value}
    </p>
  );

  return (
    <section className="min-h-screen p-10 bg-background">
      <div className="max-w-6xl mx-auto bg-card p-8 rounded-xl shadow-md shadow-primary">
        {/* === Header === */}
        <div className="flex items-center justify-between flex-wrap md:py-0 py-1">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <img
                className="w-20 h-20 shadow-box-style rounded-full"
                alt="User Avatar"
                src={
                  user.avatar && user.avatar.trim() !== ""
                    ? user.avatar
                    : "/assits/Rewardspage/profileImg.jpg"
                }
                alt="avatar"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assits/Rewardspage/profileImg.jpg";
                }}
              />

              <div>
                <h2 className="text-2xl font-primary text-primary text-shadow-md">
                  {user.name}
                </h2>
                <p className="text-accent text-sm capitalize font-secondary">
                  {user.role}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="flex items-center relative py-2 px-6 sm:px-8 md:px-10 lg:px-12 text-background text-base sm:text-lg rounded-full font-secondary overflow-hidden bg-primary transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-800 before:to-blue-300 before:transition-all before:duration-800 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
              Edit User Info
            </button>

            <button
              onClick={openPopup}
              className="flex items-center relative py-2 px-6 sm:px-8 md:px-10 lg:px-12 text-background text-base sm:text-lg font-secondary rounded-full overflow-hidden bg-primary transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-800 before:to-blue-300 before:transition-all before:duration-800 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
            >
              Edit your password
            </button>
            <div>
              {isOpen && (
                <div className="fixed inset-0 bg-card bg-opacity-50 flex items-center justify-center">
                  <div className="bg-primary rounded-xl p-6 w-[350px] shadow-2xl relative">
                    <button
                      onClick={closePopup}
                      className="absolute top-2 right-2 text-white text-3xl"
                    >
                      &times;
                    </button>

                    <h2 className="text-2xl font-semibold mb-4 text-[#FFF]">
                      Your Info
                    </h2>
                    <p className="text-[#FFF] mb-2 font-secondary">
                      <strong>Email:</strong> {user.email}
                    </p>
                    <p className="text-[#FFF] mb-4 font-secondary">
                      <strong>Password:</strong> ********
                    </p>

                    <button
                      type="submit"
                      className="flex items-center border-1 border-accent relative py-2 px-6 sm:px-8 md:px-10 lg:px-12 text-background text-base sm:text-lg font-bold rounded-full overflow-hidden bg-primary transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-800 before:to-blue-300 before:transition-all before:duration-800 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
                    >
                      Edit your password
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* === Grid Sections === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* === Personal Info === */}
          <div>
            <h3 className="text-2xl font-primary border-b pb-1 border-accent/40 text-primary text-shadow-md mb-4">
              Personal Info
            </h3>
            <Info label="Email" value={user.email} />

            <Info label="Phone" value={user.phone} />
            <Info label="Present Address" value={user.present_address} />
            <Info label="Permanent Address" value={user.permanent_address} />
            <Info label="Gender" value={user.gender} />
            <Info label="Blood Group" value={user.blood_group} />

            <Info
              label="Relationship Status"
              value={user.relationship_status}
            />

            <Info label="Religion" value={user.religion} />

            <Info label="Education" value={user.education} />
          </div>

          {/* === Work Details === */}
          <div>
            <h3 className="text-2xl font-primary border-b pb-1 border-accent/40 text-primary text-shadow-md mb-4">
              Work Details
            </h3>
            <Info label="Department" value={user.department} />
            <Info label="Role" value={user.role} />
            <Info label="Location" value={user.location} />
            <Info label="Manager" value={user.manager} />
            <Info label="Status" value={user.status} />
            <Info label="Joined" value={user.joined} />
            <Info label="Last Login" value={user.last_login} />
            <Info label="Access Level" value={user.access_level} />
          </div>

          {/* === Guardian Info === */}
          <div>
            <h3 className="text-2xl font-primary border-b pb-1 border-accent/40 text-primary text-shadow-md mb-4">
              Guardian Info
            </h3>
            <Info label="guardian_relation" value={user.guardian_relation} />
            <Info label="Phone" value={user.guardian_number} />
            <Info label="Address" value={user.guardian_address} />
            <Info label="Religion" value={user.religion} />
          </div>
        </div>
      </div>
      <EmployeeSummary></EmployeeSummary>
    </section>
  );
};

export default UserInformation;
