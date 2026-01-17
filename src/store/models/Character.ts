import { makeAutoObservable } from "mobx"

export class Character {
  id: number = 0
  name: string | null = null
  sign: string = ""
  desc: string = ""
  init: string = ""

  constructor(data: Partial<Character>) {
    makeAutoObservable(this)
    Object.assign(this, data)
  }
}