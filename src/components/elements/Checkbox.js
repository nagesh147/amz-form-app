import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles.css'

const Checkbox = ({ formItem, setFormDataHandler, renderNextOrderFields }) => {
  const { register } = useForm()
  const [selectedOption, setSelectedOption] = useState(null)
  const [event, setEvent] = useState(null)
  const [checkedItems, setCheckedItems] = useState(new Map())

  const renderNextCheck = (e) => {
    let nextOrder = formItem.order
    if (selectedOption === 'Surgery') {
      nextOrder++
      setFormDataHandler(formItem.id, checkedItems)
      return renderNextOrderFields(e, formItem, nextOrder)
    }
  }
  return (
    <>
      <div>
        <label className="label">
          {formItem.isRequired && <span className="astr">* </span>}
          {formItem.question}
        </label>
        {formItem.dataTypeValue.split(',').map((formItem) => {
          return (
            <div
              className="checkboxWrapper"
              key={formItem}
              onChange={(e) => {
                let isChecked = e.target.checked
                let item = e.target.value
                setEvent(e)
                isChecked
                  ? setSelectedOption(e.target.value)
                  : setSelectedOption(false)
                setCheckedItems(checkedItems.set(item, isChecked))
                setFormDataHandler(formItem.id, checkedItems)
              }}
            >
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
      {renderNextCheck(event)}
    </>
  )
}

export default Checkbox
