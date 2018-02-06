// @flow
import type { Asset } from 'app/flow'

const headers = new Headers()
headers.set('Content-Type', 'application/json')
export const fetchAssetList = async () => {
  const result = await fetch('//www.mocky.io/v2/5a4ffac22f0000a9008d5279', { headers })
  if (result.status === 200) {
    return result.json()
  }
  throw new Error(`Api error, can not fetch, status code: ${result.status}`)
}

export const updateAsset = async (asset: Asset) => {
  const method = 'PUT'
  const body = JSON.stringify(asset)
  const url = `//www.mocky.io/v2/5a52aa9b2e00007438c03af4/asset/${asset.id}`
  const result = await fetch(url, { method, headers, body })
  if (result.status === 204) {
    return true
  }
  throw new Error(`Api error, can not update, status code: ${result.status}`)
}
