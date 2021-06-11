import React from 'react'
import { useForm } from 'react-hook-form'
import './styles.css'

const Checkbox = ({ formItem, orderHandler, currentOrder }) => {
  const { register } = useForm()
  console.log({ formItem })

  return (
    <div>
      <label className="label">
        {formItem.isRequired && <span className="astr">* </span>}
        {formItem.question}
      </label>
      {formItem.dataTypeValue.split(',').map((formItem, index) => {
        return (
          <div className="checkboxWrapper" key={formItem}>
            <input
              type={'checkbox'}
              value={formItem}
              htmlFor={formItem}
              {...register(formItem, { required: formItem.isRequired })}
            />
            <label className="label cbLabel">{formItem}</label>
          </div>
        )
      })}
    </div>
  )
}

export default Checkbox
