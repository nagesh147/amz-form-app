import React from 'react'
import { useForm } from 'react-hook-form'
// import '../../forms/styles.css'
import './styles.css'

const Checkbox = ({ formItem, orderHandler, currentOrder }) => {
  const { register } = useForm()
  console.log({ formItem })

  return (
    <div>
      <label className="label">
        <span className="astr">* </span>
        {formItem.question}
      </label>
      {formItem.dataTypeValue.split(',').map((formItem, index) => {
        return (
          <div className="checkboxWrapper">
            <input
              type={'checkbox'}
              value={formItem}
              {...register('orderOne', { required: formItem.isRequired })}
            />
            <label className="label cbLabel">{formItem}</label>
          </div>
        )
      })}
    </div>
  )
}

export default Checkbox
