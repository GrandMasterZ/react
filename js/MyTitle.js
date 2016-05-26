var React = require('react')

var div = React.DOM.div

var h1 = React.DOM.h1

var MyTitle = function (props) {
  return (
        div(null,
            h1({ style: {color: props.color} }, props.title)
        )
    )
}
module.exports = MyTitle
