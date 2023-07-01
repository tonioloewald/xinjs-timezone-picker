import { Component as WebComponent, elements } from 'xinjs'
import { localTimezone, timezones } from './timezones'
import { regions } from './regions'

const {fragment, div, select, option} = elements

const SVG_XMLNS = 'http://www.w3.org/2000/svg'

const regionKey = Symbol('region')

const timezoneMap = (): any => {
  const svg = document.createElementNS(SVG_XMLNS, 'svg')
  svg.setAttribute('viewBox', '0 0 500 250')
  svg.append(
    ...regions.map(region => {
      const polygon = document.createElementNS(SVG_XMLNS, 'polygon')
      polygon.setAttribute('points', region.points)
      polygon[regionKey] = region
      return polygon
    })
  )
  return svg
}

export class TimezonePicker extends WebComponent {
  value = localTimezone
  timezone = localTimezone.name
  region = regions.find(rg => rg.timezone === localTimezone.name)

  styleNode = WebComponent.StyleNode({
    ':host': {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      width: `calc(500px * var(--scale, 1))`,
      height: `calc(250px * var(--scale, 1))`,
      fontFamily: 'var(--font-family, Sans-serif)',
    },
    '.map': {
      background: 'var(--map-ocean, #79b)'
    },
    '.map, svg': {
      width: '100%',
      height: '100%'
    },
    'polygon': {
      transition: 'var(--transition, ease-out 0.2s)',
      fill: 'var(--map-land, #555)',
    },
    'polygon:hover': {
      fill: 'var(--hover-color, #777)',
    },
    'polygon.active': {
      fill: 'var(--active-color, #999)',
    },
    '.zone-name': {
      position: 'absolute',
      bottom: `var(--inset, 10px)`,
      left: `var(--inset, 10px)`,
      right: `var(--inset, 10px)`,
      color: 'var(--font-color, white)',
      fontSize: 'var(--font-size, 16px)',
      padding: `calc(var(--padding, 5px))`,
      background: 'none',
      textAlign: 'center',
      border: 'none',
      outline: 'none',
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

  pickRegion = (event: Event): void => {
    // @ts-expect-error
    const region = event.target[regionKey]
    if (region !== undefined) {
      this.region = region
      this.timezone = region.timezone
    }

    if (this.value === undefined || this.value.name !== this.timezone) {
      // @ts-expect-error
      this.value = timezones.find(timezone => timezone.name === this.timezone)
    }
  }

  connectedCallback() {
    super.connectedCallback()

    const {map} = this.refs
    if (map.querySelector('svg') === null) {
      map.append(timezoneMap())
    }
    map.addEventListener('click', this.pickRegion)
  }

  render() {
    const {zonePicker, map} = this.refs
    const zones = timezones.filter(timezone => timezone.abbr === this.value?.abbr)
    ;[...map.querySelectorAll(`polygon`)].forEach(polygon => {
      const region = polygon[regionKey]
      polygon.classList.toggle('active', this.region !== undefined && region.abbr === this.region?.abbr && region.offset === this.region?.offset)
    })
    zonePicker.textContent = ''
    zonePicker.append(
      ...zones.map(timezone => option({value: timezone.name}, timezone.name.replace(/_/g, ' ')))
    )
    zonePicker.value = this.value.name
  }
}

export const timezonePicker = TimezonePicker.elementCreator({tag: 'timezone-picker'})