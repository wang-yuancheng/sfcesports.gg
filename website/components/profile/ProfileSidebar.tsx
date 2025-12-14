"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { 
  User, 
  Settings, 
  Bell, 
  Shield, 
  Link as LinkIcon, 
  LogOut, 
  Users,
  CreditCard
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  { icon: Users, label: "Following", href: "#" },
  { icon: User, label: "Edit Profile", href: "/profile", active: true },
  { icon: CreditCard, label: "Membership", href: "#" },
  { icon: Users, label: "Invite Friends", href: "#" },
  { icon: Settings, label: "Settings", href: "#" },
  { icon: Bell, label: "Notifications", href: "#" },
  { icon: Shield, label: "Security", href: "#" },
  { icon: LinkIcon, label: "Connections", href: "#" },
];

export default function ProfileSidebar() {
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div className="bg-gray-50 rounded-2xl p-4 w-full h-fit border border-gray-100">
      <nav className="flex flex-col gap-1">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
              item.active
                ? "bg-gray-200/50 text-black shadow-sm"
                : "text-gray-500 hover:bg-gray-100 hover:text-black"
            }`}
          >
            <item.icon className="w-5 h-5" strokeWidth={2.5} />
            {item.label}
          </Link>
        ))}

        <div className="my-2 border-t border-gray-200/60 mx-2" />

        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all text-left"
        >
          <LogOut className="w-5 h-5" strokeWidth={2.5} />
          Sign Out
        </button>
      </nav>
    </div>
  );
}