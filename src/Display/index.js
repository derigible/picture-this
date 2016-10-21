import React, { Component, PropTypes } from 'react'
import shortid from 'shortid'

import BoxPortal from '../../lib/components/BoxPortal'

import RangeInput from 'instructure-ui/lib/components/RangeInput'

import styles from './styles.css'

export default class Display extends Component {
  static propTypes = {
    children: PropTypes.node,
    urls: PropTypes.array,
    isShuffling: PropTypes.bool
  }

  constructor () {
    super()
    this.state = {}
    this.updateSize = this.updateSize.bind(this)
    this.formatVal = this.formatVal.bind(this)
    this.shuffle = this.shuffle.bind(this)
  }

  static sizes = [
    'small',
    'medium',
    'large'
  ]

  componentWillMount () {
    if (this.props.isShuffling) {
      this.setState({shuffledArray: this.shuffle()})
    }
  }

  formatVal (val) {
    return Display.sizes[val]
  }

  updateSize (newSize) {
    this.setState({size: Display.sizes[newSize]})
  }

  shuffle () {
    const array = this.props.urls.slice()
    let currentIndex = array.length

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      const randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      const temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  renderSlider () {
    return <div className={styles.rightHeader}>
      <RangeInput
        label="Size"
        size="small"
        defaultValue={1}
        min={0}
        max={2}
        formatValue={this.formatVal}
        onChange={this.updateSize} />
    </div>
  }

  renderPortals () {
    let urls = this.props.urls
    if (this.state.shuffledArray) {
      urls = this.state.shuffledArray
    }
    return urls.map(
      (url) => (
        <BoxPortal key={shortid.generate()} src={url} size={this.state.size} />
      )
    )
  }

  render () {
    return <div>
      <div>
        {this.renderSlider()}
      </div>
      {this.renderPortals()}
    </div>
  }
}
