import { useState } from "react";
import { User, Mail, Camera, Edit3, Check, X } from "lucide-react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user, updateUserProfile } = useAuth();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: user?.displayName || "",
    photoURL: user?.photoURL || "",
  });
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateUserProfile(form.name, form.photoURL);
      toast.success("Profile updated successfully!");
      setEditing(false);
    } catch {
      toast.error("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setForm({ name: user?.displayName || "", photoURL: user?.photoURL || "" });
    setEditing(false);
  };

  const avatarSrc =
    user?.photoURL ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.displayName || "User")}&background=16a34a&color=fff&size=200`;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header Banner */}
          <div className="h-32 bg-gradient-to-r from-green-600 to-emerald-500" />

          <div className="px-8 pb-8">
            {/* Avatar */}
            <div className="flex items-end justify-between -mt-16 mb-6">
              <div className="relative">
                <img
                  src={avatarSrc}
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div className="absolute bottom-1 right-1 bg-green-600 rounded-full p-1">
                  <Camera className="w-3 h-3 text-white" />
                </div>
              </div>
              {!editing && (
                <button
                  onClick={() => setEditing(true)}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                  Update Profile
                </button>
              )}
            </div>

            {/* User Info Display */}
            {!editing ? (
              <div className="space-y-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">
                    {user?.displayName || "No name set"}
                  </h1>
                  <p className="text-gray-500 text-sm mt-1">Plant Enthusiast</p>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5 text-green-600" />
                  <span>{user?.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <User className="w-5 h-5 text-green-600" />
                  <span>{user?.displayName || "—"}</span>
                </div>
              </div>
            ) : (
              /* Edit Form */
              <form onSubmit={handleUpdate} className="space-y-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Edit Profile</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Display Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Photo URL
                  </label>
                  <input
                    type="url"
                    value={form.photoURL}
                    onChange={(e) => setForm({ ...form, photoURL: e.target.value })}
                    placeholder="https://example.com/photo.jpg"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={user?.email}
                    disabled
                    className="w-full px-4 py-3 border border-gray-100 rounded-xl bg-gray-50 text-gray-400 cursor-not-allowed"
                  />
                  <p className="text-xs text-gray-400 mt-1">Email cannot be changed</p>
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    <Check className="w-4 h-4" />
                    {loading ? "Saving..." : "Save Changes"}
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="flex items-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
