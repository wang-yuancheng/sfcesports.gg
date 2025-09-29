import banner from "@/assets/pictures/events.png";
import PageHeaderImage from "@/components/global/PageHeaderImage";
import { events } from "@/lib/constants";

export default function EventsPage() {
  return (
    <div className="mb-16">
      <PageHeaderImage
        mobileSrc={banner}
        desktopSrc={banner}
        aspectRatio="aspect-[1920/850]"
      />
      <div className="section-container mt-8 sm:mt-12 md:mt-14 lg:mt-16">
        <div className="flex flex-col items-center">
          <h1 className="font-druk uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            2025 Events
          </h1>

          {/* Roadmap list */}
          <ul className="mt-6 space-y-4 text-center">
            {events.map((event) => (
              <li key={event.slug}>
                <p className="font-semibold">{event.name}</p>
                <p className="text-gray-600 text-sm">{event.duration}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
