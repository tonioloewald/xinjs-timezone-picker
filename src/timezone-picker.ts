import { Component as WebComponent, elements } from 'xinjs'
import { localTimezone, timezones } from './timezones'
import timezoneMapSource from './timezone-map'

const {fragment, div, select, option} = elements

const timezoneMap = (): any => {
  const elt = div()
  elt.innerHTML = timezoneMapSource
  return elt.querySelector('svg') as any
}

export class TimezonePicker extends WebComponent {
  value = localTimezone
  timezone = localTimezone.name

  styleNode = WebComponent.StyleNode({
    ':host': {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      width: `calc(400px * var(--scale, 1))`,
      height: `calc(231px * var(--scale, 1))`, // 400 * 3037.122 / 5256.518
      fontFamily: 'var(--font-family, Sans-serif)',
    },
    '.map': {
      background: 'var(--map-ocean, #79b)'
    },
    '.map, svg': {
      width: '100%',
      height: '100%'
    },
    '.world path': {
      fill: 'var(--map-land, #555)'
    },
    '.timezones path': {
      transition: 'ease-out 0.2s',
      fill: 'white',
      opacity: 0
    },
    '.timezones path:hover': {
      opacity: 0.25
    },
    '.timezones path.active': {
      opacity: 0.3
    },
    '.zone-name': {
      position: 'absolute',
      bottom: `var(--inset, 10px)`,
      left: `var(--inset, 10px)`,
      right: `var(--inset, 10px)`,
      color: 'var(--text-color, white)',
      fontSize: 'var(--font-size, 16px)',
      padding: `calc(var(--padding, 5px))`,
      background: 'none',
      textAlign: 'center',
      border: 'none',
      outline: 'none'
    }
  })

  content = fragment(
    div({class: 'map', dataRef: 'map'}),
    select(
      {class: 'zone-name', dataRef: 'zonePicker'},
    )
  )

  constructor() {
    super()
    this.initAttributes('timezone')
  }

  pickUTC = (event: Event): void => {
    const {zonePicker} = this.refs
    zonePicker.textContent = ''
    // @ts-expect-error
    const utc = event.target.getAttribute('title')
    const zone = timezones.find(timezone => timezone.utc === utc)
    if (zone !== undefined) {
      this.timezone = zone.name
    } else {
      console.error(`no timezone found for ${utc}`)
    }
  }

  connectedCallback() {
    super.connectedCallback()

    const {map} = this.refs
    if (map.querySelector('svg') === null) {
      map.append(timezoneMap())
    }
    map.addEventListener('click', this.pickUTC)
  }

  showActive = () => {
    const {map} = this.refs
    ;[...map.querySelectorAll(`path[title]`)].forEach(path => {
      path.classList.toggle('active', path.getAttribute('title') === this.value.utc)
    })
  }

  render() {
    const {zonePicker} = this.refs
    if (this.value.name !== this.timezone) {
      // @ts-expect-error
      this.value = timezones.find(timezone => timezone.name === this.timezone)
    }
    const zones = timezones.filter(timezone => timezone.utc === this.value.utc)
    this.showActive()
    zonePicker.textContent = ''
    zonePicker.append(
      ...zones.map(timezone => option({value: timezone.name}, timezone.name.replace(/_/g, ' ')))
    )
    zonePicker.value = this.value.name
  }
}

export const timezonePicker = TimezonePicker.elementCreator({tag: 'timezone-picker'})