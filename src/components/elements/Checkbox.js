import React from 'react'
import { useForm } from 'react-hook-form'
// import '../../forms/styles.css'

const Checkbox = ({ formItem, orderHandler, currentOrder }) => {
  const { register } = useForm()
  console.log({ formItem })
  return formItem.dataTypeValue.split(',').map((formItem, index) => {
    return (
      <div>
        <input
          type={'checkbox'}
          className="mbt5"
          value={formItem}
          {...register('orderOne', { required: formItem.isRequired })}
        />
        <label>{formItem}</label>
      </div>
    )
  })
}

export default Checkbox
