"use client";

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "Welcome to SFC!",
      msg: "Thanks for joining the club. Check out the shop for starter deals.",
      date: "2h ago",
      read: false,
    },
    {
      id: 2,
      title: "Tournament Registration",
      msg: "Registration for Season 6 opens this weekend.",
      date: "1d ago",
      read: true,
    },
  ];

  return (
    <section>
      <h1 className="font-druk text-2xl md:text-3xl uppercase mb-5">
        Notifications
      </h1>

      <div className="bg-gray-50 rounded-2xl border border-gray-100/50 overflow-hidden">
        {notifications.length > 0 ? (
          <div className="divide-y divide-gray-100">
            {notifications.map((n) => (
              <div
                key={n.id}
                className={`p-6 flex gap-4 hover:bg-gray-100/50 transition-colors ${
                  !n.read ? "bg-white" : ""
                }`}
              >
                <div className="shrink-0 mt-1">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      !n.read ? "bg-pink-bright" : "bg-transparent"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h4
                      className={`text-sm ${
                        !n.read
                          ? "font-bold text-black"
                          : "font-medium text-gray-700"
                      }`}
                    >
                      {n.title}
                    </h4>
                    <span className="text-xs text-gray-400">{n.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{n.msg}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center text-gray-500">
            <p>No new notifications</p>
          </div>
        )}
      </div>
    </section>
  );
}
