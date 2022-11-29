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
  tld: string
  drivesOnLeft: boolean
  subdivisions: {
    name?: string
    code?: string
  }[]
}

export default Country
