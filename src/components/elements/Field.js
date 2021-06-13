import React from 'react'
import Radio from '../elements/Radio'
import Text from '../elements/Text'
import Checkbox from '../elements/Checkbox'
import './styles.css'

const field = (props) => {
  const formItem = props.formItem
  let element = null
  // let classes = ['field']
  // let errorMessage = null

  switch (formItem.dataType) {
    case 'radio':
      element = (
        <Radio
          formItem={formItem}
          renderNextOrderFields={props.renderNextOrderFields}
        />
      )
      break
    case 'picklist':
      element = (
        <Checkbox
          formItem={formItem}
          renderNextOrderFields={props.renderNextOrderFields}
        />
      )
      break
    case 'text':
      element = (
        <Text
          formItem={formItem}
          renderNextOrderFields={props.renderNextOrderFields}
        />
      )
      break
    case 'select':
      element = (
        <Radio
          formItem={formItem}
          renderNextOrderFields={props.renderNextOrderFields}
        />
      )
      break
    default:
      break
  }

  return <div className="fieldWrapper">{element}</div>
}

export default field
