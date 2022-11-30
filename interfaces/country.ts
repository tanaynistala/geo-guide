type Country = {
  name: string
  code3: string
  code2: string
  coordinates: number[]
  continent: string
  subregion: string
  capital: string
  capitalCoords: number[]
  currency: string[]
  callingCode: number
  tld: string
  drivesOnLeft: boolean
  subdivisions: {
    name?: string
    code?: string
  }[]
  camGens: {
    gen1: string
    gen2: string
    gen3: string
    gen4: string
    isTrekkerOnly: boolean
  }
}

export default Country
