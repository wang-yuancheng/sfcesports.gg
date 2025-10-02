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
          <h1 className="font-druk uppercase text-xl sm:text-2xl md:text-3xl lg">
            2025 Events
          </h1>

          {/* Timeline */}
          <div className="relative mx-auto mt-6 max-w-6xl px-2 sm:px-4 md:px-6 ">
            {/* vertical rail */}
            <div className="pointer-events-none absolute top-4 bottom-6 w-[3px] bg-pink-bright ml-[23px]" />

            <ul className="space-y-10">
              {events.map((event, idx) => (
                <li key={event.slug} className="relative pl-0">
                  {/* number badge */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex size-12 items-center justify-center rounded-full border-2 border-black bg-pink-bright text-black font-bold text-lg">
                    {idx + 1}
                  </div>

                  {/* text block */}
                  <div className="group pl-20">
                    <p className="font-druk text-heading-md md:text-heading-md uppercase text-lg md:text-xl leading-tight group-hover:text-pink-bright transition-colors duration-300">
                      {event.name}
                    </p>
                    <p className="text-sm text-gray-600 group-hover:text-gray-400 transition-colors duration-300">{event.duration}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
