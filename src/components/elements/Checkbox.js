import React from 'react'
import { useForm } from 'react-hook-form'
import './styles.css'

const Checkbox = ({ formItem, setFormDataHandler }) => {
  const { register } = useForm()

  return (
    <div
      onChange={(e) => {
        setFormDataHandler(formItem.id, e.target.value)
      }}
    >
      <label className="label">
        {formItem.isRequired && <span className="astr">* </span>}
        {formItem.question}
      </label>
      {formItem.dataTypeValue.split(',').map((formItem) => {
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
