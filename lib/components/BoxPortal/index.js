import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

import Image from 'instructure-ui/lib/components/Image'

import { omitProps } from '../../util/passthroughProps'
import styles from './styles.css'

export default class BoxPortal extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    isBlock: PropTypes.bool
  }

  static defaultProps = {
    src: 'https://yt3.ggpht.com/-v0soe-ievYE/AAAAAAAAAAI/AAAAAAAAAAA/OixOH_h84Po/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
    size: 'medium'
  }

  render () {
    const { size, isBlock } = this.props
    const classes = {
      [styles.root]: true,
      [styles[size]]: size,
      [styles['is-block']]: isBlock
    }
    const props = omitProps(this.props, BoxPortal.propTypes)
    return <div className={classnames(classes)}>
      <Image
        {...props}
        src={this.props.src} />
    </div>
  }
}
