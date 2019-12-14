/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs')
const path = require('path')
const appComponents = fs.readdirSync(
  path.join(__dirname, '../../../app/common/components'),
)
const appContainers = fs.readdirSync(
  path.join(__dirname, '../../../app/containers'),
)
const appPages = fs.readdirSync(
  path.join(__dirname, '../../../app/pages'),
)
const components = appComponents.concat(appContainers).concat(appPages)

function componentExists(comp) {
  return components.indexOf(comp) >= 0
}

module.exports = componentExists
