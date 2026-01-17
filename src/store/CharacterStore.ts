import { makeAutoObservable } from "mobx"
import { Character } from "./models/Character"
import { RootStore } from "./RootStore"
import chars from "../assets/chars"

export class CharacterStore {
  list: Character[] = [] 
  selectedChar: Character | null = null
  root: RootStore

  constructor(root: RootStore) {
    this.root = root
    makeAutoObservable(this)
    this.list = chars.map(c => new Character(c))
  }

  filterByQuery(query: string) {
    if (!query.trim()) return this.list
    return this.list.filter(c => c.sign.toLowerCase().includes(query.toLowerCase()))
  }

  selectChar(char: Character) {
    this.selectedChar = char
  }

  closeModal(){
    this.selectedChar = null
  }
}