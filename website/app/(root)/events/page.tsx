import banner from "@/assets/pictures/events.webp";
import EventTimeline from "@/components/events/Timeline";
import PageHeaderImage from "@/components/global/PageHeaderImage";
import { events } from "@/data/events/events";

export default function EventsPage() {
  return (
    <div className="mb-16">
      <PageHeaderImage
        mobileSrc={banner}
        desktopSrc={banner}
        aspectRatio="aspect-[1920/850]"
      />
      <div className="section-container mt-8 sm:mt-12 md:mt-14 lg:mt-16">
        <div className="flex flex-col space-y-16">
          {Object.entries(events)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, list]) => (
              <div key={year}>
                <h1 className="flex justify-center font-druk uppercase text-xl sm:text-2xl md:text-3xl">
                  {year}
                </h1>
                <EventTimeline events={list} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
