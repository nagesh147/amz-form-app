import React from 'react'
import { useForm } from 'react-hook-form'

const Checkbox = ({ formItem, orderHandler, currentOrder }) => {
  const { register } = useForm()
  console.log(formItem)
  return formItem.dataTypeValue.split(',').map((formItem) => {
    return (
      <div>
        <input
          type={'checkbox'}
          className="mbt5"
          // value={formItem.dataTypeValue.split(',')[0]}
          {...register('orderOne', { required: formItem.isRequired })}
        />
        <label>{formItem}</label>
      </div>
    )
  })
}

export default Checkbox
