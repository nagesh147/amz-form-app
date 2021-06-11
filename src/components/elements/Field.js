import React from 'react'
import Radio from '../elements/Radio'
import Text from '../elements/Text'
import Checkbox from '../elements/Checkbox'
// import '../../forms/styles.css'

const field = (props) => {
  const formItem = props.formItem
  let element = null
  let classes = ['field']
  let errorMessage = null

  switch (formItem.dataType) {
    case 'radio':
      element = (
        <Radio
          formItem={formItem}
          optionChangeHandler={props.optionChangeHandler}
        />
      )
      break
    case 'picklist':
      element = (
        <Checkbox
          formItem={formItem}
          optionChangeHandler={props.optionChangeHandler}
        />
      )
      break
    case 'text':
      element = (
        <Text
          formItem={formItem}
          optionChangeHandler={props.optionChangeHandler}
        />
      )
      break
    case 'select':
      element = (
        <Radio
          formItem={formItem}
          optionChangeHandler={props.optionChangeHandler}
        />
      )
      break
    default:
      break
  }

  return <div className="field-wrapper">{element}</div>
}

export default field
