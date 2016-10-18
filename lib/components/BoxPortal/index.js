import React, { Component, PropTypes } from 'react'

export default class ComponentPreview extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired
  }

  static defaultProps = {
    src: 'http://feelgrafix.com/data/pictures/pictures-2.jpg'
  }

  render () {
    return <img src={this.props.src} />
  }
} // 'examples/components/' + this.props.name + '.html'
