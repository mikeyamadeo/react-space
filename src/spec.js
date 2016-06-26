import test from 'ava'
import { sizeModifierFactory, createPropValues } from './logic'
import { sizeSymbols } from './config'

const base = 6
const { fibonacci } = sizeModifierFactory({base, sizeSymbols})

test('fibonacciScale', t => {
  const expect = {
    1: '6px',
    2: '12px',
    '': '18px',
    3: '30px',
    4: '48px'
  }

  t.deepEqual(expect, fibonacci())
  t.pass()
})

test('createPropValues', async t => {
  const types = {
    p: 'padding',
    m: 'margin'
  }
  const typeModifiers = {
    x: ['x', 'X'],
    y: ['y', 'Y']
  }
  const sizeModifiers = {
    '_': '10px'
  }
  const propValues = createPropValues({
    types,
    typeModifiers,
    sizeModifiers
  })

  const expected = {
    px_: {paddingx: '10px', paddingX: '10px'},
    py_: {paddingy: '10px', paddingY: '10px'},
    mx_: {marginx: '10px', marginX: '10px'},
    my_: {marginy: '10px', marginY: '10px'}
  }

  t.deepEqual(expected, propValues)
  t.pass()
})
