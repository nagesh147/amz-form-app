import React, { useState } from 'react'
import data from '../../data.json'
import Field from '../../components/elements/Field'
import './styles.css'

export default function EntryForm() {
  const [jsonData, setJsonData] = useState(data)
  const [selectedOption, setSelectedOption] = useState(null)

  const orderHandler = (currentOrder) => {
    currentOrder++
    console.log({ currentOrder })
    const nextFormItem = jsonData.filter((i) => i.order === currentOrder)

    let el =
      nextFormItem &&
      nextFormItem.map((formItem, index) => {
        return (
          <div className="innerFormItem">
            <Field
              formItem={formItem}
              key={formItem.id}
              optionChangeHandler={(event) =>
                optionChangeHandler(event, formItem, index)
              }
            />
          </div>
        )
      })

    return <div className="field-wrapper">{el}</div>
  }

  const optionChangeHandler = (event, formItem, index) => {
    const updatedField = { ...Field }
    const updatedFields = [...jsonData]
    updatedFields.splice(index, 1, updatedField)

    console.log({ selectedOption, event, formItem, index })

    return orderHandler(formItem.order)
  }

  // const checkValidity = (field) => {
  //   const rules = field.validation
  //   const value = field.value
  //   let isValid = true
  //   if (!rules) {
  //     return true
  //   }

  //   if (rules.required) {
  //     isValid = value.trim() !== '' && isValid
  //   }

  //   if (rules.minLength) {
  //     isValid = value.length >= rules.minLength && isValid
  //   }

  //   if (rules.maxLength) {
  //     isValid = value.length <= rules.maxLength && isValid
  //   }

  //   if (rules.pattern) {
  //     // const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  //     isValid = rules.pattern.test(value) && isValid
  //   }

  //   return isValid
  // }

  const onSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    event.preventDefault()
    console.log({ formData })
  }

  return (
    <form onSubmit={(event) => onSubmit(event)} className="entryForm">
      {jsonData
        .filter((i) => i.order === 1)
        .map((formItem, index) => {
          return (
            <Field
              formItem={formItem}
              // orderHandler={orderHandler}
              // currentOrder={currentOrder}

              key={formItem.id}
              // fieldConfig={data}
              //  focused={(event)=>fieldBlur(event,field,index)}
              optionChangeHandler={(event) =>
                optionChangeHandler(event, formItem, index)
              }
            />
          )
        })}
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  )
}
