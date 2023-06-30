/**
# timezone-graphical-picker
*/

import { getTimezones, getTimezoneId } from './timezone-picker.mjs'

export default {
  css: `
    ._component_ {
      display: block;
      position: relative;
    }

    ._component_ svg {
      width: 100%;
      background: var(--widget-bg);
    }
    ._component_ #world  {
      pointer-events: none;
      transition: opacity 0.5s ease-out;
      opacity: 0.2;
    }
    ._component_:hover #world {
      opacity: 0.4;
    }

    ._component_ #world > * {
      fill: var(--text-color);
    }

    ._component_ #timezones > * {
      fill: var(--accent-bg-50);
      stroke: var(--accent-bg);
      stroke-width: 10;
      transition: opacity 1s ease-out;
      opacity: 0;
    }

    ._component_ #timezones > :hover {
      opacity: 1;
    }

    ._component_ #timezones > .current {
      opacity: 1 !important;
    }

    ._component_ .picker {
      position: absolute;
      bottom: var(--whitespace);
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
    }
  `,
  html: `
<div class="map" data-event="
  mouseup:_component_.pickZone
"></div>
<div class="picker">
  <select class="compact" data-bind="value=_component_.value">
      <option 
        data-list="_component_.filteredZones(_component_.zones,_component_.offset):_auto_"
        data-bind="attr(value)=.value;text=.text"
      ></option>
  </select>
  <span class="icon-chevron-down"></span>
</div>
  `,
  async initialValue ({
    // only destructure the items you need
    component, // this is the element that the component is inserted into
    b8r, // it's b8r!
    find, // b8r.findWithin(component, ...)
    findOne, // b8r.findOneWithin(component, ...)
    get, // get (within the component's private data)
    set, // set (within the component's private data)
    on, // b8r.on(component, ...)
    touch // refresh the component
  }) {
    const zones = await getTimezones()
    const timezone = await getTimezoneId()
    return {
      timezone,
      zones,
      offset: [],
      value: null,
      filteredZones (zones, offset) {
        return zones.filter(zone => offset.includes(zone.offset))
      },
      pickZone (evt) {
        const zone = evt.target
        const timezone = zone.getAttribute('id')
        set({ timezone })
        if (!zone.classList.contains('current')) {
          const currentZone = findOne('.current')
          if (currentZone) {
            currentZone.classList.remove('current')
          }
          zone.classList.add('current')
          const offset = zone.dataset.offset.split(',').map(parseFloat)
          set({ offset })
        }
      }
    }
  },
  async load ({
    // only destructure the items you need
    component, // this is the element that the component is inserted into
    b8r, // it's b8r!
    find, // b8r.findWithin(component, ...)
    findOne, // b8r.findOneWithin(component, ...)
    data, // data is a proxy of the component's private data
    get, // get (within the component's private data)
    set, // set (within the component's private data)
    on, // b8r.on(component, ...)
    touch // refresh the component
  }) {
    const doc = await b8r.xml('../data/timezone-map.svg') // .querySelector('svg')
    const svg = doc.firstElementChild
    findOne('.map').append(svg)
    for (const zone of find('path[id]')) {
      zone.dataset.offset = zone.id.replace(/\.30/, '.5').match(/[+-][\d.]+/g)
    }

    const { zones, timezone } = get()
    const { value, text, offset } = zones.find(zone => zone.id === timezone)
    const utc = text
      .match(/UTC[+-][\d:]+/)[0]
      .replace(/([+-])0/, '$1')
      .replace(/:00/, '')
    findOne(`[id="${utc}"]`).classList.add('current')
    set({ value, offset: [offset] })
  }
}
