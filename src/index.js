import React from 'react'
import { pick, pluck, flatten } from './utils'
import { types, typeModifiers, sizeSymbols } from './config'
import { sizeModifierFactory, createPropValues } from './logic'

const { keys } = Object

const createSpace = propValues => {
  const propKeys = keys(propValues)

  const Space = ({
    ...rest,
    style,
    children,
    tag = 'div'
  }) => {
    const Tag = tag
    const props = pluck(propKeys, rest)

    const spaceProps =
      keys(pick(propKeys, rest))
        .filter(key => rest[key])

    const spaceStyles =
      flatten(spaceProps.map(
        sp => propValues[sp]
      ))

    return (
      <Tag { ...{
        ...props,
        style: {...spaceStyles, ...style}
      }}>
        {children}
      </Tag>
    )
  }

  return Space
}

const defaultBase = 6
const sizeModifiers = {
  0: '0',
  ...sizeModifierFactory({
    base: defaultBase,
    sizeSymbols
  }).fibonacci()
}

export default createSpace(createPropValues({
  types,
  typeModifiers,
  sizeModifiers
}))

// options:
  // scale ['fibonacci', 'linear']
  // base {Number}
  // scaleModifiers
export const config = ({
  scale = 'fibonacci',
  base = defaultBase,
  sizeSymbols = sizeSymbols
}) => {
  const sizeModifiers = {
    0: '0',
    ...sizeModifierFactory({
      base,
      sizeSymbols
    })[scale]()
  }

  return createSpace(createPropValues({
    types,
    typeModifiers,
    sizeModifiers
  }))
}
