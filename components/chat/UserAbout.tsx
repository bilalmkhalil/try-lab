import {
  Phone,
  Video,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Star,
  MessageCircle,
} from "lucide-react";
import { Button } from "../ui/button";

const UserAbout = () => {
  const userInfo = {
    name: "John Doe",
    profile: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinDate: "January 2023",
    lastSeen: "2 hours ago",
    bio: "Full-stack developer passionate about creating amazing user experiences. Love working with React, TypeScript, and Node.js.",
    status: "Online",
    rating: 4.8,
    totalChats: 142,
  };

  return (
    <div className="flex flex-col h-screen p-4 gap-4 overflow-y-auto no-scrollbar">
      {/* User Profile Card */}
      <div className="border bg-primary border-none rounded-xl p-6">
        <div className="flex flex-col items-center text-center">
          <img
            src={userInfo.profile}
            alt={userInfo.name}
            className="w-20 h-20 rounded-full bg-gray-300 mb-4"
          />
          <h2 className="font-bold text-xl mb-1">{userInfo.name}</h2>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600">{userInfo.status}</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {userInfo.bio}
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      {/* <div className="border bg-primary border-none rounded-xl p-4">
        <h3 className="font-semibold mb-3">Quick Actions</h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-none rounded-full"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-none rounded-full"
          >
            <Video className="w-4 h-4 mr-2" />
            Video
          </Button>
        </div>
      </div> */}

      {/* Contact Information */}
      <div className="border bg-primary border-none rounded-xl p-4">
        <h3 className="font-semibold mb-3">Contact Info</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-accent" />
            <span className="text-sm text-gray-700">{userInfo.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-accent" />
            <span className="text-sm text-gray-700">{userInfo.phone}</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-sm text-gray-700">{userInfo.location}</span>
          </div>
        </div>
      </div>

      {/* Activity Information */}
      <div className="border bg-primary border-none rounded-xl p-4">
        <h3 className="font-semibold mb-3">Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-accent" />
            <div className="flex-1">
              <span className="text-sm text-accent">Joined</span>
              <p className="text-sm font-medium">{userInfo.joinDate}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-accent" />
            <div className="flex-1">
              <span className="text-sm text-accent">Last seen</span>
              <p className="text-sm font-medium">{userInfo.lastSeen}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MessageCircle className="w-4 h-4 text-accent" />
            <div className="flex-1">
              <span className="text-sm text-accent">Total chats</span>
              <p className="text-sm font-medium">{userInfo.totalChats}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAbout;
