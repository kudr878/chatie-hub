import { createContext, useContext } from "react"
import { CharacterStore } from "./CharacterStore"

export class RootStore {
  characterStore: CharacterStore

  constructor() {
    this.characterStore = new CharacterStore(this)
  }
}

export const StoreContext = createContext(new RootStore())

export const useStore = () => useContext(StoreContext)