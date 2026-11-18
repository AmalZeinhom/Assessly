import React from 'react'
import { NumberInputProps } from '../input.types'
import TextInput from './TextInput'

export default function NumberInput({
    min,
    max,
    step = 1,
    ...props
}: NumberInputProps) {
  return (
    <TextInput 
        {...props}
        type='number'
        min={min}
        max={max}
        step={step}
        
    />
  )
}
