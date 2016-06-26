const { keys } = Object

export const sizeModifierFactory = ({
  base,
  sizeSymbols
}) => ({
  fibonacci () {
    let a = base
    let b = base
    let temp
    let obj = {}

    sizeSymbols.forEach(key => {
      temp = a
      a = a + b
      b = temp
      obj[key] = b + 'px'
    })

    return obj
  },

  linear () {

  }
})

export const createPropValues = ({
  types,
  typeModifiers,
  sizeModifiers
}) => {
  let propValues = {}

  keys(types).forEach((t) => {
    keys(typeModifiers).forEach((tm) => {
      keys(sizeModifiers).forEach((sm) => {
        const key = t + tm + sm
        let value = {}
        const tmVals = typeModifiers[tm]

        tmVals.forEach((tmv) =>
          value[types[t] + tmv] = sizeModifiers[sm]
        )

        propValues[key] = value
      })
    })
  })

  return propValues
}

// const calcScale = {
//   ,
//
//   // linear (scaleValues, base) {
//   //   const modify = {
//   //     0: n => n * 0.5,
//   //     1: n => n * 0.25,
//   //     2: n => n,
//   //     3: n => n * 2,
//   //     4: n => n * 4
//   //   }
//   //
//   //   scaleValues.forEach((v, i) => v
//   //
//   //   )
//   // }
// }
