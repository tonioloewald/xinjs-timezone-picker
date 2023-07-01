import { Component as WebComponent, elements } from 'xinjs'
import { localTimezone, timezones, Timezone } from './timezones'
import { regions, Region } from './regions'

const {fragment, div, option, input, datalist} = elements

const SVG_XMLNS = 'http://www.w3.org/2000/svg'
const DATALIST_ID = '-timezone-list-'

const zoneId = (tz: Timezone): string => `${tz.name.replace(/_/g, ' ')} GMT${tz.offset > 0 ? '+' : ''}${tz.offset !== 0 ? tz.offset : ''}`

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

const timezoneDatalist = datalist(
  { id: DATALIST_ID },
  ...timezones.map(tz => option({value: zoneId(tz)}))
)

export class TimezonePicker extends WebComponent {
  value = localTimezone.name

  timezone = zoneId(localTimezone)

  get zone() : Timezone {
    return timezones.find(tz => zoneId(tz) === this.timezone) as Timezone
  }

  get region() : Region | undefined {
    const {name} = this.zone
    return regions.find(rg => rg.timezone === name)
  }

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
      padding: `calc(var(--padding, 10px))`,
      background: 'var(--input-bg, #fff4)',
      borderRadius: 'var(--input-radius, 5px)',
      textAlign: 'center',
      border: 'none',
      outline: 'none',
    },
  })

  content = fragment(
    div({class: 'map', dataRef: 'map'}),
    input({
      class: 'zone-name',
      dataRef: 'zonePicker',
      list: DATALIST_ID,
    }),
    timezoneDatalist
  )

  constructor() {
    super()
    this.initAttributes('timezone')
  }

  static zoneFromRegion(region: Region): Timezone | undefined {
    return timezones.find(tz => tz.name === region.timezone) || timezones.find(tz => tz.offset === region.offset)
  }

  pickRegion = (event: Event): void => {
    const {zonePicker} = this.refs
    // @ts-expect-error
    const region = event.target[regionKey]
    if (region === undefined) {
      return
    }
    const zone = TimezonePicker.zoneFromRegion(region)
    if (zone !== undefined) {
      zonePicker.value = this.timezone = zoneId(zone)
      this.value = zone.name
    }
  }

  static zoneFromId(id: string): Timezone | undefined {
    return timezones.find(tz => id === zoneId(tz))
  }

  pickZone = (event: Event): void => {
    const {zonePicker} = this.refs
    // @ts-expect-error
    const id = event.target.value
    const zone = TimezonePicker.zoneFromId(id)
    if (zone !== undefined) {
      this.timezone = zonePicker.value
      this.value = zone.name
    } else {
      zonePicker.value = this.timezone
    }
  }

  connectedCallback() {
    super.connectedCallback()

    const {map, zonePicker} = this.refs
    zonePicker.setAttribute('list', DATALIST_ID)
    if (map.querySelector('svg') === null) {
      map.append(timezoneMap())
    }
    map.addEventListener('click', this.pickRegion)
    zonePicker.addEventListener('change', this.pickZone)
  }

  private validate() {
    if (this.value !== this.zone.name) {
      const newZone = timezones.find(tz => tz.name === this.value)
      if (newZone !== undefined) {
        this.timezone = zoneId(newZone)
      } else {
        this.value = this.zone.name
      }
    }
  }

  render() {
    this.validate()

    const {region} = this
    const {zonePicker, map} = this.refs
    console.log(region, this.value)
    ;[...map.querySelectorAll(`polygon`)].forEach(polygon => {
      const rg = polygon[regionKey] as Region
      polygon.classList.toggle('active', rg === region || (rg.abbr === region?.abbr && rg.offset === region?.offset))
    })
    zonePicker.value = this.timezone
  }
}

export const timezonePicker = TimezonePicker.elementCreator({tag: 'timezone-picker'})