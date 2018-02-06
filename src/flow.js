// @flow
type Health = 'good' | 'warning' | 'bad'
type Coordinates = [ number, number ]
export type Asset = {
  id: number,
  name: string,
  coordinates: Coordinates,
  health: Health
}

export type AssetList = Array<Asset>
