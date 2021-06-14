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
          setFormDataHandler={props.setFormDataHandler}
        />
      )
      break
    case 'picklist':
      element = (
        <Checkbox
          formItem={formItem}
          renderNextOrderFields={props.renderNextOrderFields}
          setFormDataHandler={props.setFormDataHandler}
        />
      )
      break
    case 'text':
      element = (
        <Text
          formItem={formItem}
          renderNextOrderFields={props.renderNextOrderFields}
          setFormDataHandler={props.setFormDataHandler}
        />
      )
      break
    default:
      break
  }

  return <React.Fragment>{element}</React.Fragment>
}

export default field
