import React from "react"
import ImPropTypes from "react-immutable-proptypes"
import { validateUniqueItems } from "../utils"
import { check } from "prettier"

const EnumModel = ({ value, labels, getComponent }) => {
  let ModelCollapse = getComponent("ModelCollapse")
  let collapsedContent = <span>Array [ { value.count() } ]</span>
  value = value || []
  labels = labels || []
  const br = "<br />"
  return <span className="prop-enum">
    Enum:<br />
    <ModelCollapse collapsedContent={ collapsedContent }>
      <br/>
      {
        value.map((val, valIndex) => {
          let labName = ""
          labels.map((labsName, labIndex) => {
            if (valIndex === labIndex) {
              labName = labsName
            }
          })
          return <span className="prop-enum" id={valIndex} key={valIndex}>{ val }:{ labName }</span>
        })
      }

    </ModelCollapse>
  </span>
}
EnumModel.propTypes = {
  value: ImPropTypes.iterable,
  getComponent: ImPropTypes.func
}

export default EnumModel
