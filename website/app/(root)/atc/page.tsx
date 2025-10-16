import PageHeaderImage from "@/components/global/PageHeaderImage";
import atcBanner from "@/assets/pictures/atc.webp";
import Leaderboard from "@/components/leaderboards/leaderboard";

export default function ATCPage() {
  const rows = [
    { place: 1, name: "SFC 女队", wwcd: 1, kp: 28, pp: 41, tp: 69, prize: "-" },
    {
      place: 2,
      name: "SFC India",
      wwcd: 0,
      kp: 25,
      pp: 37,
      tp: 62,
      prize: "-",
    },
    { place: 3, name: "小迪同学", wwcd: 0, kp: 29, pp: 27, tp: 56, prize: "-" },
    {
      place: 4,
      name: "海賊嘘は良くないネキ",
      wwcd: 0,
      kp: 18,
      pp: 28,
      tp: 46,
      prize: "-",
    },
    {
      place: 5,
      name: "लौDING II CLAN",
      wwcd: 0,
      kp: 25,
      pp: 20,
      tp: 45,
      prize: "-",
    },
    { place: 6, name: "辛福家园", wwcd: 0, kp: 19, pp: 23, tp: 42, prize: "-" },
    {
      place: 7,
      name: "とらえもん",
      wwcd: 0,
      kp: 16,
      pp: 15,
      tp: 31,
      prize: "-",
    },
    {
      place: 8,
      name: "VALOR Gaming",
      wwcd: 0,
      kp: 11,
      pp: 14,
      tp: 25,
      prize: "-",
    },
    { place: 9, name: "上ミノ", wwcd: 0, kp: 17, pp: 6, tp: 23, prize: "-" },
    { place: 10, name: "STE", wwcd: 0, kp: 15, pp: 5, tp: 20, prize: "-" },
    { place: 11, name: "猛攻", wwcd: 0, kp: 13, pp: 7, tp: 20, prize: "-" },
    {
      place: 12,
      name: "天上俱乐部",
      wwcd: 0,
      kp: 14,
      pp: 3,
      tp: 17,
      prize: "-",
    },
    {
      place: 13,
      name: "KHALISTANIS",
      wwcd: 0,
      kp: 8,
      pp: 8,
      tp: 16,
      prize: "-",
    },
    {
      place: 14,
      name: "eieiEsports",
      wwcd: 0,
      kp: 14,
      pp: 0,
      tp: 14,
      prize: "-",
    },
    {
      place: 15,
      name: "アドゴニーズ",
      wwcd: 0,
      kp: 4,
      pp: 6,
      tp: 10,
      prize: "-",
    },
    { place: 16, name: "SFC 男队", wwcd: 0, kp: 9, pp: 1, tp: 10, prize: "-" },
    {
      place: 17,
      name: "The Evil Army",
      wwcd: 0,
      kp: 5,
      pp: 3,
      tp: 8,
      prize: "-",
    },
    {
      place: 18,
      name: "สุราขวง จำกัด",
      wwcd: 0,
      kp: 5,
      pp: 2,
      tp: 7,
      prize: "-",
    },
    { place: 19, name: "123", wwcd: 0, kp: 2, pp: 2, tp: 4, prize: "-" },
    { place: 20, name: "ZEN", wwcd: 0, kp: 3, pp: 0, tp: 3, prize: "-" },
  ];

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
              <Leaderboard rows={rows} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
