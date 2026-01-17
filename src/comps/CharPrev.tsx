import { observer } from "mobx-react-lite"
import { useStore } from "../store/RootStore" 
import { SillyMarkdown } from "../markdown/SillyMarkdown"
import { Character } from "../store/models/Character"

const CharPrev = observer(({ char }: { char: Character }) => {
  const { characterStore } = useStore()

  return (
    <div
      onClick={() => characterStore.selectChar(char)} 
      className="flex flex-col gap-5 bg-highlight rounded cursor-pointer hover:brightness-110 transition-all"
    >
      <div className="w-full aspect-square bg-black" />
      <div className="px-2 lg:px-5 pb-5 flex flex-col gap-3 items-center h-full justify-between">
        <div className="text-[16px] lg:text-xl font-semibold"> {char.sign}</div>
        <div className="relative">
          <div className="text-sm h-40 lg:h-50 overflow-auto after:pointer-events-none after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-10 after:bg-linear-to-t after:from-highlight after:to-transparent pb-7 no-scrollbar">
            {char.desc ? <SillyMarkdown text={char.desc} /> : <div className="text-sm text-gray-400 pt-10 text-center">No description...</div>}
          </div>
        </div>
        <div className="text-xs">Total tokens: 2000</div>
      </div>
    </div>
  )
})

export default CharPrev