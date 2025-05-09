import { useState, useEffect } from "react";
import axios from "axios";
// import EmployeeSummary from "../EmployeeSummary/EmployeeSummary";

const UserInformation = ({ userId = "123" }) => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false); // State to track if in edit mode

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.post(
          "http://192.168.10.47:3000/api/teamMember",
          {
            user_id: userId,
            limit: "50",
          }
        );

        const fetchedUser = res.data.teamMembers?.[0]; // assuming response is an array

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

  const handleEditSave = async () => {
    try {
      const res = await axios.put(
        "http://192.168.10.47:3000/api/updateTeamMember",
        {
          user_id: userId,
          updated_data: user, // Sending the updated user data to the server
        }
      );
      if (res.data.success) {
        alert("User information updated successfully!");
      } else {
        alert("Failed to update user information!");
      }
    } catch (error) {
      console.error("Error saving user data:", error);
    } finally {
      setIsEditing(false); // Turn off editing mode
    }
  };

  if (loading) {
    return <div className="text-center mt-10 text-xl text-accent"></div>;
  }

  if (!user) {
    return (
      <div className="text-center mt-10 text-secondary">Data not found</div>
    );
  }

  const Info = ({ label, value, editable, onChange }) => (
    <p className="text-base font-light text-accent mb-2 pr-1 font-secondary border-b pb-1 border-accent/20 flex items-center">
      <strong className="pr-1">{label}:</strong>
      {editable ? (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-accent font-secondary border p-2 rounded-md"
        />
      ) : (
        value
      )}
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
                src={user.avatar || "/default.jpg"}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/default.jpg";
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

          {/* === Edit/Save Button === */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center relative py-2 px-6 sm:px-8 md:px-10 lg:px-12 text-background text-base sm:text-lg rounded-full font-secondary overflow-hidden bg-primary transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90"
            >
              {isEditing ? "Save Now" : "Edit User Info"}
            </button>
          </div>
        </div>

        {/* === Grid Sections === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* === Personal Info === */}
          <div>
            <h3 className="text-2xl font-primary border-b pb-1 border-accent/40 text-primary text-shadow-md mb-4">
              Personal Info
            </h3>
            <Info
              label="Email"
              value={user.email}
              editable={isEditing}
              onChange={(value) => setUser({ ...user, email: value })}
            />
            <Info
              label="Phone"
              value={user.phone}
              editable={isEditing}
              onChange={(value) => setUser({ ...user, phone: value })}
            />
            <Info
              label="Present Address"
              value={user.present_address}
              editable={isEditing}
              onChange={(value) => setUser({ ...user, present_address: value })}
            />
            <Info
              label="Permanent Address"
              value={user.permanent_address}
              editable={isEditing}
              onChange={(value) =>
                setUser({ ...user, permanent_address: value })
              }
            />
            <Info
              label="Gender"
              value={user.gender}
              editable={isEditing}
              onChange={(value) => setUser({ ...user, gender: value })}
            />
            <Info
              label="Blood Group"
              value={user.blood_group}
              editable={isEditing}
              onChange={(value) => setUser({ ...user, blood_group: value })}
            />
            <Info
              label="Relationship Status"
              value={user.relationship_status}
              editable={isEditing}
              onChange={(value) =>
                setUser({ ...user, relationship_status: value })
              }
            />
            <Info
              label="Religion"
              value={user.religion}
              editable={isEditing}
              onChange={(value) => setUser({ ...user, religion: value })}
            />
            <Info
              label="Education"
              value={user.education}
              editable={isEditing}
              onChange={(value) => setUser({ ...user, education: value })}
            />
          </div>

          {/* === Work Details === */}
          <div>
            <h3 className="text-2xl font-primary border-b pb-1 border-accent/40 text-primary text-shadow-md mb-4">
              Work Details
            </h3>
            <Info
              label="Department"
              value={user.department}
              editable={isEditing}
              onChange={(value) => setUser({ ...user, department: value })}
            />
            <Info
              label="Role"
              value={user.role}
              editable={isEditing}
              onChange={(value) => setUser({ ...user, role: value })}
            />
            <Info
              label="Location"
              value={user.location}
              editable={isEditing}
              onChange={(value) => setUser({ ...user, location: value })}
            />
            <Info
              label="Manager"
              value={user.manager}
              editable={isEditing}
              onChange={(value) => setUser({ ...user, manager: value })}
            />
            <Info
              label="Status"
              value={user.status}
              editable={isEditing}
              onChange={(value) => setUser({ ...user, status: value })}
            />
            <Info
              label="Joined"
              value={user.joined}
              editable={isEditing}
              onChange={(value) => setUser({ ...user, joined: value })}
            />
            <Info
              label="Last Login"
              value={user.last_login}
              editable={isEditing}
              onChange={(value) => setUser({ ...user, last_login: value })}
            />
            <Info
              label="Access Level"
              value={user.access_level}
              editable={isEditing}
              onChange={(value) => setUser({ ...user, access_level: value })}
            />
          </div>

          {/* === Guardian Info === */}
          <div>
            <h3 className="text-2xl font-primary border-b pb-1 border-accent/40 text-primary text-shadow-md mb-4">
              Guardian Info
            </h3>
            <Info
              label="Guardian Relation"
              value={user.guardian_relation}
              editable={isEditing}
              onChange={(value) =>
                setUser({ ...user, guardian_relation: value })
              }
            />
            <Info
              label="Phone"
              value={user.guardian_number}
              editable={isEditing}
              onChange={(value) => setUser({ ...user, guardian_number: value })}
            />
            <Info
              label="Address"
              value={user.guardian_address}
              editable={isEditing}
              onChange={(value) =>
                setUser({ ...user, guardian_address: value })
              }
            />
            <Info
              label="Religion"
              value={user.religion}
              editable={isEditing}
              onChange={(value) => setUser({ ...user, religion: value })}
            />
          </div>
        </div>

        {/* Save on Edit Mode */}
        {isEditing && (
          <div className="mt-6 text-center">
            <button
              onClick={handleEditSave}
              className="py-2 px-6 bg-primary text-white rounded-full"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
      {/* <EmployeeSummary></EmployeeSummary> */}
    </section>
  );
};

export default UserInformation;
