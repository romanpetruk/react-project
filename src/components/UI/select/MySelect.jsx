import React from 'react'

export default function MySelect({defaultSelect, option, value, onChange}) {
  return (
    <select
    value={value}
    onChange = {e=>onChange(e.target.value)}
    >
        <option value= ''>{defaultSelect}</option>
        {option.map(option =>
        <option key={option.value} value={option.value}>
            {option.name}
        </option>
        )}

    </select>
  )
}
