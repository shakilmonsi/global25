import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";

const UserInformation = ({ id = "123" }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [message, setMessage] = useState(""); // State for message

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.post(
          "http://192.168.10.47:3000/api/teamMember",
          {
            user_id: id,
          }
        );

        const fetchedUser = res.data.teamMembers?.[0];

        if (!fetchedUser) {
          setUser(null);
          return;
        }

        const userData = {
          avatar: fetchedUser.dp || "/default.jpg",
          username: fetchedUser.username || "",
          name: `${fetchedUser.first_name || ""} ${
            fetchedUser.last_name || ""
          }`,
          email: fetchedUser.email || "",
          phone: fetchedUser.number || "",
          permanent_address: fetchedUser.permanent_address || "",
          present_address: fetchedUser.present_address || "",
          gender: fetchedUser.gender || "",
          blood_group: fetchedUser.blood_group || "",
          relationship_status: fetchedUser.relationship_status || "",
          education: fetchedUser.education || "",
          guardian_relation: fetchedUser.guardian_relation || "",
          guardian_number: fetchedUser.guardian_number || "",
          guardian_address: fetchedUser.guardian_address || "",
          religion: fetchedUser.religion || "",
          department: fetchedUser.team?.department?.department_name || "",
          role: fetchedUser.role || "N/A",
          location: fetchedUser.location || "N/A",
          manager: fetchedUser.manager || "N/A",
          status: fetchedUser.status || "Active",
          joined: fetchedUser.joining_date || "N/A",
          last_login: fetchedUser.last_login || "N/A",
          access_level: fetchedUser.access_level || "User",
        };

        setUser(userData);
        setEditedUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  const handleInputChange = (field, value) => {
    setEditedUser((prev) => ({ ...prev, [field]: value }));
    console.log(field, value);
  };

  const handleSave = async () => {
    try {
      const payload = { ...editedUser };

      const response = await fetch(
        `http://192.168.10.47:3000/api/teamMember/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setUser({ ...editedUser });
        setIsEditing(false);
        setMessage("User information updated successfully!"); // Success message
      } else {
        setMessage("Failed to update user information. Please try again."); // Failure message
      }
    } catch (error) {
      console.error("Save error", error);
      setMessage("An error occurred while saving the data. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-10 text-xl text-accent">
        <Loading></Loading>
      </div>
    );
  }

  if (!user) {
    return <div className="text-center mt-10 text-red-500">Data not fount</div>;
  }

  const Info = ({ label, field, value, editable = false, onChange }) => (
    <p className="text-base font-light text-accent mb-2 pr-1 font-secondary border-b pb-1 border-accent/20 flex items-center">
      <strong className="pr-1">{label}:</strong>
      {editable ? (
        <input
          type="text"
          value={editedUser[field] || ""}
          onChange={(e) => onChange(e.target.value)}
          className="border p-1 rounded-md"
        />
      ) : (
        value
      )}
    </p>
  );

  return (
    <section className="min-h-screen p-10">
      <div className="max-w-6xl mx-auto bg-card p-8 rounded-xl shadow-md shadow-primary">
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

          <div className="flex justify-center">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="py-2 px-20 text-background text-base font-bold rounded-full bg-primary shadow-md hover:scale-105 transition-all"
            >
              {isEditing ? "Cancel" : "Edit User Info"}
            </button>

            {isEditing && (
              <button
                onClick={handleSave}
                className="py-2 px-20 text-background text-base font-bold rounded-full bg-primary shadow-md hover:scale-105 transition-all ml-4"
              >
                Save Changes
              </button>
            )}
          </div>
        </div>

        {/* === Message Display === */}
        {message && (
          <div
            className={`text-center mt-4 ${
              message.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {message}
          </div>
        )}

        {/* === Grid Sections === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* === Personal Info === */}
          <div>
            <h3 className="text-2xl font-primary border-b pb-1 border-accent/40 text-primary text-shadow-md mb-4">
              Personal Info
            </h3>
            <Info
              label="Username"
              field="username"
              value={user.username}
              editable={isEditing}
              onChange={(val) => handleInputChange("username", val)}
            />
            <Info
              label="Email"
              field="email"
              value={user.email}
              editable={isEditing}
              onChange={(val) => handleInputChange("email", val)}
            />
            <Info
              label="Phone"
              field="phone"
              value={user.phone}
              editable={isEditing}
              onChange={(val) => handleInputChange("phone", val)}
            />
            <Info
              label="Present Address"
              field="present_address"
              value={user.present_address}
              editable={isEditing}
              onChange={(val) => handleInputChange("present_address", val)}
            />
            <Info
              label="Permanent Address"
              field="permanent_address"
              value={user.permanent_address}
              editable={isEditing}
              onChange={(val) => handleInputChange("permanent_address", val)}
            />
            <Info
              label="Gender"
              field="gender"
              value={user.gender}
              editable={isEditing}
              onChange={(val) => handleInputChange("gender", val)}
            />
            <Info
              label="Blood Group"
              field="blood_group"
              value={user.blood_group}
              editable={isEditing}
              onChange={(val) => handleInputChange("blood_group", val)}
            />
            <Info
              label="Relationship Status"
              field="relationship_status"
              value={user.relationship_status}
              editable={isEditing}
              onChange={(val) => handleInputChange("relationship_status", val)}
            />
            <Info
              label="Education"
              field="education"
              value={user.education}
              editable={isEditing}
              onChange={(val) => handleInputChange("education", val)}
            />
          </div>

          {/* === Work Details === */}
          <div>
            <h3 className="text-2xl font-primary border-b pb-1 border-accent/40 text-primary text-shadow-md mb-4">
              Work Details
            </h3>
            <Info
              label="Department"
              field="department"
              value={user.department}
              editable={isEditing}
              onChange={(val) => handleInputChange("department", val)}
            />
            <Info
              label="Role"
              field="role"
              value={user.role}
              editable={isEditing}
              onChange={(val) => handleInputChange("role", val)}
            />
            <Info
              label="Location"
              field="location"
              value={user.location}
              editable={isEditing}
              onChange={(val) => handleInputChange("location", val)}
            />
            <Info
              label="Manager"
              field="manager"
              value={user.manager}
              editable={isEditing}
              onChange={(val) => handleInputChange("manager", val)}
            />
            <Info
              label="Status"
              field="status"
              value={user.status}
              editable={isEditing}
              onChange={(val) => handleInputChange("status", val)}
            />
            <Info
              label="Joined"
              field="joined"
              value={user.joined}
              editable={isEditing}
              onChange={(val) => handleInputChange("joined", val)}
            />
            <Info
              label="Last Login"
              field="last_login"
              value={user.last_login}
              editable={isEditing}
              onChange={(val) => handleInputChange("last_login", val)}
            />
            <Info
              label="Access Level"
              field="access_level"
              value={user.access_level}
              editable={isEditing}
              onChange={(val) => handleInputChange("access_level", val)}
            />
          </div>

          {/* === Guardian Info === */}
          <div>
            <h3 className="text-2xl font-primary border-b pb-1 border-accent/40 text-primary text-shadow-md mb-4">
              Guardian Info
            </h3>
            <Info
              label="Relation"
              field="guardian_relation"
              value={user.guardian_relation}
              editable={isEditing}
              onChange={(val) => handleInputChange("guardian_relation", val)}
            />
            <Info
              label="Phone"
              field="guardian_number"
              value={user.guardian_number}
              editable={isEditing}
              onChange={(val) => handleInputChange("guardian_number", val)}
            />
            <Info
              label="Address"
              field="guardian_address"
              value={user.guardian_address}
              editable={isEditing}
              onChange={(val) => handleInputChange("guardian_address", val)}
            />
            <Info
              label="Religion"
              field="religion"
              value={user.religion}
              editable={isEditing}
              onChange={(val) => handleInputChange("religion", val)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInformation;
