import React from 'react'
import Radio from '../elements/Radio'
import Text from '../elements/Text'
import Checkbox from '../elements/Checkbox'

const field = (props) => {
  const formItem = props.formItem
  let element = null
  let classes = ['field']
  let errorMessage = null
  //   if (formItem.touched && !formItem.valid) {
  //     classes.push('invalid')
  //   }
  console.log('rendered field', formItem)

  switch (formItem.dataType) {
    case 'radio':
      element = (
        <Radio
          formItem={formItem}
          currentOrder={formItem.order}
          orderHandler={props.onChangeHandler}
        />
      )
      break
    case 'picklist':
      element = (
        <Checkbox
          formItem={formItem}
          currentOrder={formItem.order}
          orderHandler={props.onChangeHandler}
        />
      )
      break
    case 'text':
      element = (
        <Text
          // jsonData={jsonData}
          formItem={formItem}
          currentOrder={formItem.order}
          orderHandler={props.onChangeHandler}
        />
      )
      break
    case 'select':
      element = (
        <Radio
          //   jsonData={jsonData}
          formItem={formItem}
          currentOrder={formItem.order}
          orderHandler={props.onChangeHandler}
        />
      )
      break
    default:
      break
  }

  return <div className="field-wrapper">{element}</div>
}

export default field
