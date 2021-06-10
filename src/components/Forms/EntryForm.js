import React, { useState } from 'react'
import './styles.css'
import data from '../../data.json'
import Radio from '../elements/Radio'
import Text from '../elements/Text'
import Checkbox from '../elements/Checkbox'
import Field from '../../components/elements/Field'

export default function EntryForm() {
  const [jsonData, setJsonData] = useState(data)

  // const orderHandler = (currentOrder) => {
  //   console.log('order handler')
  //   currentOrder++
  //   const nextFormItem = jsonData.filter((i) => i.order === currentOrder)

  //   return (
  //     nextFormItem &&
  //     nextFormItem.map((formItem) => {
  //       return (
  //         <div className="innerFormItem">
  //           <label>{formItem.question}</label>
  //           {renderElement(formItem)}
  //         </div>
  //       )
  //     })
  //   )
  // }

  const optionChangeHandler = (event, formItem, index) => {
    const updatedField = { ...Field }
    updatedField.value = event.target.value
    // updatedField.valid = this.checkValidity(updatedField)

    const updatedFields = [...jsonData]
    updatedFields.splice(index, 1, updatedField)
    //   let formValid = true;
    //   for(let field of updatedFields){
    //      if(!field.valid){
    //         formValid = false;
    //      }
    //  }
    // this.setState({
    //     fields: updatedFields,
    //     // formValid: formValid
    // })
    console.log({ event, formItem, index })
    console.log({ updatedField, updatedFields })
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
    alert('data submitted')
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      {jsonData.map((formItem, index) => {
        return (
          <Field
            formItem={formItem}
            // orderHandler={orderHandler}
            // currentOrder={currentOrder}

            key={formItem.id}
            // fieldConfig={data}
            //  focused={(event)=>fieldBlur(event,field,index)}
            onChangeHandler={(event) =>
              optionChangeHandler(event, formItem, index)
            }
          />
        )
      })}
      <button type="submit">Submit</button>
    </form>
  )
}
