const requests = require('./requestshandler')
const ui = require('./uicomponent')
const manifest = require('./manifest.json')

module.exports = {
  manifest: manifest,
  uiComponent: {
    props: {},
    ref: ui.component
  },
  features: [
    {
      name: 'RequestFunctionTitle', // required field
      methods: ['GET'], // required field
      ref: requests.request // required field
    }
    // More features can be added to the list
  ]
}
