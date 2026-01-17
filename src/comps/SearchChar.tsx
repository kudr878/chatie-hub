import { Search } from "lucide-react"

export default function SearchChar({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="relative">
      <div className="px-5 py-2 flex gap-5 justify-between lg:w-150 mx-auto bg-highlight rounded">
        <input
          type="text"
          placeholder="Search by sign"
          className="w-full focus:outline-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <Search />
      </div>
    </div>
  )
}