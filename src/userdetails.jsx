const UserProfile = () => {
  const user = {
    avatar: "https://i.pravatar.cc/100",
    name: "Liam Smith",
    username: "liams",
    email: "liam@example.com",
    phone: "+880123456789",
    department: "Development",
    role: "Senior Engineer",
    location: "Dhaka, Bangladesh",
    manager: "John Doe",
    status: "Active",
    joined: "Jan 10, 2024",
    lastLogin: "Apr 10, 2025",
    accessLevel: "Admin",
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className="text-gray-500">{user.role}</p>
            </div>
          </div>
        </div>

        {/* Grid Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Personal Info */}
          <div>
            <h3 className="text-gray-700 font-bold mb-2">Personal Info</h3>
            <p>
              <strong>Full Name:</strong> {user.name}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
          </div>

          {/* Work Info */}
          <div>
            <h3 className="text-gray-700 font-bold mb-2">Work Details</h3>
            <p>
              <strong>Department:</strong> {user.department}
            </p>
            <p>
              <strong>Role:</strong> {user.role}
            </p>
            <p>
              <strong>Location:</strong> {user.location}
            </p>
            <p>
              <strong>Manager:</strong> {user.manager}
            </p>
          </div>

          {/* Account Info */}
          <div>
            <h3 className="text-gray-700 font-bold mb-2">Account</h3>
            <p>
              <strong>Status:</strong> {user.status}
            </p>
            <p>
              <strong>Joined:</strong> {user.joined}
            </p>
            <p>
              <strong>Last Login:</strong> {user.lastLogin}
            </p>
            <p>
              <strong>Access Level:</strong> {user.accessLevel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
