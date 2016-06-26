export const pick = (keys, map) => {
  let newObj = {}

  keys.forEach((key) => {
    if (map[key]) newObj[key] = map[key]
  })

  return newObj
}

export const pluck = (keys, map) => {
  let newObj = { ...map }

  keys.forEach((key) => delete newObj[key])

  return newObj
}
