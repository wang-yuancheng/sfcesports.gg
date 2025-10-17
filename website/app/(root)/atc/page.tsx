import PageHeaderImage from "@/components/global/PageHeaderImage";
import atcBanner from "@/assets/pictures/atc.webp";
import ATCLeaderboard from "@/components/leaderboards/atcLeaderboard";
import { atcTeams } from "@/data/home/atc";

export default function ATCPage() {
  return (
    <div className="mb-16">
      <PageHeaderImage desktopSrc={atcBanner} />
      <div className="mx-auto max-w-[1250px] px-[clamp(1rem,4vw,4rem)]">
        <div className="md:mx-[clamp(1rem,6vw,20rem)]">
          <div className="flex flex-col gap-9">
            <section className="flex flex-col gap-4">
              <h1 className="mt-10 text-3xl md:text-4xl font-druk uppercase text-center text-pink-bright">
                We are champions of Asia
              </h1>
              <p className="text-gray-600 font-[400] text-base text-justify">
                Lorem ipsum dolor sit amet. Aut dolore architecto et sint alias
                sed accusamus vitae nam obcaecati omnis ab dolore delectus eum
                minima ipsam. Id eveniet fugiat et tempora sint non distinctio
                quaerat et iste quia ut voluptatem nostrum. Aut quisquam aliquid
                qui quaerat eligendi non veniam doloribus ut autem ipsum. Id
                libero quisquam sed consequatur numquam est velit totam ut
                commodi consequuntur qui dolores sapiente 33 vero commodi ut
                tempora assumenda. Non asperiores alias et vero dolorum ut
                necessitatibus corrupti.
              </p>
            </section>
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl font-druk text-center uppercase">
                Grand Finals
              </h2>
              <ATCLeaderboard rows={atcTeams} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
