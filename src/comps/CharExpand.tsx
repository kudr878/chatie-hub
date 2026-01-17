import { observer } from "mobx-react-lite"
import { useStore } from "../store/RootStore"
import { SillyMarkdown } from "../markdown/SillyMarkdown"

const CharModal = observer(() => {
  const { characterStore } = useStore()
  const char = characterStore.selectedChar

  if (!char) return null

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center backdrop-blur-sm cursor-pointer"
      onClick={() => characterStore.closeModal()}
    >
      <div
        className="bg-secondary w-2xl h-[90vh] rounded-lg flex flex-col overflow-hidden shadow-2xl relative overflow-y-auto cursor-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => characterStore.closeModal()}
          className="absolute top-4 right-4 text-white/50 hover:text-white text-xl font-bold z-10"
        >
          ✕
        </button>

        <div className="h-80 bg-highlight shrink-0 relative">
          <div className="absolute -bottom-30 left-0 right-0 mx-auto w-100 h-100 bg-black rounded border-4 border-secondary" />
        </div>

        <div className="px-10 pt-40 pb-10">
          <h2 className="text-4xl font-bold">{char.sign}</h2>
          <h3 className="text-xl font-bold">{char.name}</h3>

          <div className="text-sm">
            {char.desc ? <SillyMarkdown text={char.desc} /> : "No description"}
          </div>

          <div className="text-sm opacity-50">Token count: 2000</div>

          <button className="bg-highlight hover:bg-highlight/80 text-white px-6 py-2 mt-5 rounded transition font-medium w-full cursor-pointer">
            Start Chat
          </button>
        </div>
      </div>
    </div>
  )
})

export default CharModal