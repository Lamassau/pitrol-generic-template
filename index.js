var requests = require('./requestshandler')
var ui = require('./uicomponent')

module.exports = {
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
