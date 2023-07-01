import { Component as WebComponent, elements } from 'xinjs'
import { localTimezone, timezones, Timezone } from './timezones'
import { regions, Region } from './regions'

const {fragment, div, option, input, datalist} = elements

const SVG_XMLNS = 'http://www.w3.org/2000/svg'
const DATALIST_ID = '-timezone-list-'

const zoneFromName = (name: string): Timezone | undefined => {
  return timezones.find(tz => tz.name === name)
}

const zoneId = (tz: Timezone): string => `${tz.name.replace(/_/g, ' ')} GMT${tz.offset > 0 ? '+' : ''}${tz.offset !== 0 ? tz.offset : ''}`
const zoneFromId = (id: string): Timezone | undefined => {
  return timezones.find(tz => id === zoneId(tz))
}

const zoneFromRegion = (region: Region): Timezone | undefined => {
  return timezones.find(tz => tz.name === region.timezone) || timezones.find(tz => tz.offset === region.offset)
}

const regionKey = Symbol('region')

const timezoneMap = (): any => {
  const svg = document.createElementNS(SVG_XMLNS, 'svg')
  svg.setAttribute('viewBox', '0 0 500 250')
  svg.append(
    ...regions.map(region => {
      const polygon = document.createElementNS(SVG_XMLNS, 'polygon')
      polygon.setAttribute('points', region.points)
      polygon.setAttribute('data-timezone', region.timezone)
      polygon.setAttribute('data-offset', String(region.offset))
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
  timezone = localTimezone.name

  get zone() : Timezone {
    return zoneFromName(this.timezone) as Timezone
  }

  get region() : Region | undefined {
    return regions.find(rg => rg.timezone === this.timezone)
  }

  get zoneId(): string {
    return zoneId(this.zone)
  }

  styleNode = WebComponent.StyleNode({
    ':host': {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      width: `calc(500px * var(--scale, 1))`,
      height: `calc(250px * var(--scale, 1))`,
      overflow: 'hidden',
    },
    '.map': {
      background: 'var(--map-ocean, #79b)',
      flex: '1 1 auto',
      overflow: 'hidden',
    },
    '.map, svg': {
      width: '100%',
      height: '100%'
    },
    'polygon': {
      transition: 'var(--transition, ease-out 0.3s)',
      fill: 'var(--map-land, #555)',
      stroke: 'var(--map-land, #555)',
      strokeWidth: 0.5,
    },
    'polygon.hover': {
      fill: 'var(--hover-color, #777)',
      stroke: 'var(--hover-color, #555)',
    },
    'polygon.active': {
      fill: 'var(--active-color, #999)',
      stroke: 'var(--active-color, #555)',
    },
    '.zone-name': {
      fontFamily: 'var(--font-family, Sans-serif)',
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
      dataRef: 'zoneName',
    }),
    timezoneDatalist
  )

  constructor() {
    super()
    this.initAttributes('timezone')
  }

  hoverRegion = (event: Event): void => {
    const {zoneName} = this.refs
    // @ts-expect-error
    const region = event.target[regionKey]
    this.updateRegions(region, 'hover')
    if (region === undefined) {
      zoneName.value = this.zoneId
      return
    }
    const zone = zoneFromRegion(region)
    zoneName.value = zone !== undefined ? zoneId(zone) : region.timezone
  }

  pickRegion = (event: Event): void => {
    const {zoneName} = this.refs
    // @ts-expect-error
    const region = event.target[regionKey]
    if (region === undefined) {
      return
    }
    const zone = zoneFromRegion(region)
    if (zone !== undefined) {
      zoneName.value = this.zoneId
      this.value = this.timezone = zone.name
    }
  }

  pickZone = (event: Event): void => {
    const {zoneName} = this.refs
    // @ts-expect-error
    const id = event.target.value
    const zone = zoneFromId(id)
    if (zone !== undefined) {
      this.value = this.timezone = zone.name
    } else {
      zoneName.value = this.zoneId
    }
  }

  connectedCallback() {
    super.connectedCallback()

    const {map, zoneName} = this.refs
    zoneName.setAttribute('list', DATALIST_ID)
    if (map.querySelector('svg') === null) {
      map.append(timezoneMap())
    }
    map.addEventListener('mouseover', this.hoverRegion)
    map.addEventListener('click', this.pickRegion)
    zoneName.addEventListener('change', this.pickZone)
  }

  private validate() {
    if (this.value !== this.timezone) {
      const newZone = zoneFromName(this.value)
      if (newZone === undefined) {
        this.value = this.timezone
      }
    }
  }

  private updateRegions(region: Region | undefined, className: string) {
    const {map} = this.refs
    ;[...map.querySelectorAll(`polygon`)].forEach(polygon => {
      const rg = polygon[regionKey] as Region
      polygon.classList.toggle(className, rg === region || (rg.abbr === region?.abbr && rg.offset === region?.offset))
    })
  }

  render() {
    super.render()
    this.validate()
    this.updateRegions(this.region, 'active')

    const {zoneName} = this.refs
    zoneName.value = this.zoneId
  }
}

export const timezonePicker = TimezonePicker.elementCreator({tag: 'timezone-picker'})