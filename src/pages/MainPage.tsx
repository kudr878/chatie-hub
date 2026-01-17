import { useState } from "react"
import { observer } from "mobx-react-lite"
import { useStore } from "../store/RootStore"
import CharPrev from "../comps/CharPrev"
import LastChat from "../comps/LastChat"
import SearchChar from "../comps/SearchChar"
import CharExpand from "../comps/CharExpand" 

const MainPage = observer(() => {
  const { characterStore } = useStore()
  const [query, setQuery] = useState("")

  const displayChars = characterStore.filterByQuery(query)

  return (
    <div className="flex flex-col gap-5 relative">
      <CharExpand />
      <SearchChar value={query} onChange={setQuery} />
      <LastChat notShow={query} />
      <div>
        <div className="bg-highlight py-1 px-5 max-w-max ml-5 rounded-t">
          All Characters ({characterStore.list.length})
        </div>
        <div className="bg-secondary w-full px-5 py-7 rounded">
          {displayChars.length === 0 ? (
            <div className="text-center text-lg opacity-60 min-h-[60vh] center">Nobot found!</div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
              {displayChars.map(char => <CharPrev key={char.id} char={char} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
})

export default MainPage