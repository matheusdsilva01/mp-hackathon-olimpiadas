import { Award } from "lucide-react"
import Image from "next/image"
import { Country } from "@/domain/entities"

interface MedalsTableProps {
  data: Country[]
}

export const MedalsTable = ({ data }: MedalsTableProps) => {
  return (
    <table className="mx-auto flex w-full min-w-[460px] max-w-7xl border-collapse flex-col font-olympicSans">
      <thead className="table-header-group flex-1 border-b border-b-zinc-900">
        <tr className="[&>*]:flex1 flex flex-1 [&>*]:py-2">
          <th className="w-24">Position</th>
          <th className="w-96 text-left">Country</th>
          <th className="flex-1">
            <Award size={24} className="text-gold mx-auto" />
          </th>
          <th className="flex-1">
            <Award size={24} className="text-silver mx-auto" />
          </th>
          <th className="flex-1">
            <Award size={24} className="text-bronze mx-auto" />
          </th>
          <th className="flex-1">Total</th>
        </tr>
      </thead>
      <tbody className="flex flex-1 flex-col tabular-nums [&>*]:flex-1">
        {data.map(country => (
          <tr
            key={country.id}
            className="flex flex-1 flex-row bg-gray-200 first:mt-2 [&>*]:py-2"
          >
            <td className="w-24 text-center">
              <span className="m-auto flex h-8 w-8 rounded-md bg-gray-300">
                <p className="m-auto font-semibold">{country.rank}</p>
              </span>
            </td>
            <td className="flex w-96">
              <Image
                src={country.flag_url}
                alt={country.name}
                width={180}
                height={120}
                className="h-auto w-full max-w-[46px] rounded-lg"
              />
              <p className="my-auto ml-2">{country.name}</p>
            </td>
            <td className="flex-1 !py-0 text-center">
              <div className="bg-gold/30 mx-auto flex h-full w-10">
                <p className="m-auto">{country.gold_medals}</p>
              </div>
            </td>
            <td className="flex flex-1 text-center">
              <p className="m-auto">{country.silver_medals}</p>
            </td>
            <td className="flex flex-1 text-center">
              <p className="m-auto">{country.bronze_medals}</p>
            </td>
            <td className="flex flex-1 text-center">
              <p className="m-auto">{country.total_medals}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
