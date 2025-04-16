import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const UserDetails = () => {
  const { id } = useParams(); // URL থেকে ID নিচ্ছে
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axios.get(
          `http://192.168.10.47:3000/api/teamMember/${id}`
        );
        setUser(res.data.teamMember); // তোমার API যদি এরকম রেসপন্স দেয়
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [id]);

  if (loading) return <div>লোড হচ্ছে...</div>;

  if (!user) return <div>কোনো ইউজার পাওয়া যায়নি।</div>;

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">ইউজার ডিটেইলস</h1>
      <p>
        <strong>নাম:</strong> {user.first_name}
      </p>
      <p>
        <strong>ইমেইল:</strong> {user.email}
      </p>
      <p>
        <strong>ফোন:</strong> {user.number}
      </p>
      <p>
        <strong>ঠিকানা:</strong> {user.permanent_address}
      </p>
      <p>
        <strong>ডিপার্টমেন্ট:</strong> {user.team?.department?.department_name}
      </p>
      <p>
        <strong>গার্ডিয়ান নাম্বার:</strong> {user.guardian_number}
      </p>
      <p>
        <strong>এডুকেশন:</strong> {user.education}
      </p>
      {/* আরও যেই তথ্য চাই, তা এখানে দেখাতে পারো */}
    </div>
  );
};

export default UserDetails;
