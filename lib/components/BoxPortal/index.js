import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

import Image from 'instructure-ui/lib/components/Image'
import Overlay from 'instructure-ui/lib/components/Overlay'

import { omitProps } from '../../util/passthroughProps'
import styles from './styles.css'

const choices = ['small', 'medium', 'large']

export default class BoxPortal extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    isBlock: PropTypes.bool
  }

  constructor (props) {
    super(props)
    this.state = {
      isImageFocused: false
    }
    this.toggleFocusImage = this.toggleFocusImage.bind(this)
  }

  componentWillMount () {
    const size = this.props.size || this.randomSize()
    this.setState({size: size})
  }

  toggleFocusImage () {
    const isImageFocused = !this.state.isImageFocused
    this.setState({
      isImageFocused
    })
  }

  /**
   * Will randomly select a size for the image.
   *
   * @return {one of 'small', 'medium', or 'large'}
   */
  randomSize () {
    let rand = Math.random()
    rand *= choices.length
    rand = Math.floor(rand)
    return choices[rand]
  }

  render () {
    const { isBlock } = this.props
    const classes = {
      [styles.root]: true,
      [styles[this.state.size]]: true,
      [styles['is-block']]: isBlock
    }
    const props = omitProps(this.props, BoxPortal.propTypes)
    return <div className={classnames(classes)}>
      <Image
        onClick={this.toggleFocusImage}
        {...props}
        src={this.props.src} />
      <Overlay
        isOpen={this.state.isImageFocused}
        transition="fade"
        onRequestClose={this.toggleFocusImage}
      >
        <Image
          onClick={this.toggleFocusImage}
          {...props}
          src={this.props.src} />
      </Overlay>
    </div>
  }
}
