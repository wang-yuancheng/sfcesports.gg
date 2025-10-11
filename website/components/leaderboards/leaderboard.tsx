import Image, { StaticImageData } from "next/image";

type Standing = {
  place: number;
  name: string;
  logo?: StaticImageData;
  kp: number;
  pp: number;
  tp: number;
  prize: number | string;
};

export default function Leaderboard({ rows }: { rows: Standing[] }) {
  return (
    <div className="w-full">
      <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-md bg-white">
        <table className="w-full">
          <thead className="bg-black">
            <tr>
              <th className="px-3 md:px-6 py-2 whitespace-nowrap uppercase text-white text-start text-[10px] md:text-xs w-[50px] md:w-[84px] font-druk font-[400]">
                Rank
              </th>
              <th className="px-4 md:px-6 py-2 whitespace-nowrap uppercase text-white text-start text-[10px] md:text-xs w-auto font-druk font-[400]">
                Team
              </th>
              <th className="hidden xs:table-cell px-1.5 md:px-3 py-2 whitespace-nowrap uppercase text-white text-end text-[10px] md:text-xs w-[50px] md:w-[84px] font-druk font-[400]">
                KP
              </th>
              <th className="hidden xs:table-cell px-1.5 md:px-3 py-2 whitespace-nowrap uppercase text-white text-end text-[10px] md:text-xs w-[50px] md:w-[84px] font-druk font-[400]">
                PP
              </th>
              <th className="px-1.5 md:px-3 py-2 whitespace-nowrap uppercase text-white text-end text-[10px] md:text-xs w-[50px] md:w-[84px] font-druk font-[400]">
                TP
              </th>
              <th className="px-3 md:px-6 py-2 whitespace-nowrap uppercase text-white text-end text-[10px] md:text-xs w-[50px] md:w-[84px] ps-[20px] md:ps-[48px] font-druk font-[400]">
                Prize
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {rows.map((r) => (
              <tr key={r.place} className="text-sm leading-none font-bold">
                <td className="px-3 py-1.5 md:py-4 md:ps-6">
                  <div className="flex flex-col px-1 text-xs md:text-[21px]">
                    {ordinal(r.place)}
                  </div>
                </td>

                <td className="px-3 py-1.5 md:py-4">
                  <div className="flex items-center gap-1 md:gap-3">
                    {r.logo ? (
                      <Image
                        src={r.logo}
                        alt=""
                        className="hidden xs:flex size-6 md:size-8"
                      />
                    ) : null}
                    <p className="text-start text-xs md:text-[21px]">
                      {r.name}
                    </p>
                  </div>
                </td>

                <td className="hidden xs:table-cell px-2 md:px-3 py-1.5 md:py-4">
                  <div className="text-end text-xs md:text-[21px]">{r.kp}</div>
                </td>
                <td className="hidden xs:table-cell px-2 md:px-3 py-1.5 md:py-4">
                  <div className="text-end text-xs md:text-[21px]">{r.pp}</div>
                </td>
                <td className="px-2 md:px-3 py-1.5 md:py-4">
                  <div className="text-end text-xs md:text-[21px]">{r.tp}</div>
                </td>
                <td className="px-3 md:px-6 py-1.5 md:py-4 md:pe-6">
                  <div className="text-end text-xs md:text-[21px]">
                    {formatPrize(r.prize)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// helpers (kept here for simplicity; move to a utils file if you like)
function ordinal(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return `${n}${s[(v - 20) % 10] || s[v] || s[0]}`;
}

function formatPrize(value: number | string) {
  if (typeof value === "number") return `$${value.toLocaleString()}`;
  return value;
}
