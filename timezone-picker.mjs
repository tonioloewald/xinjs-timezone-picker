export async function getTimezones () {
  const zones = await (await window.fetch('/data/timezones.json')).json()

  zones.forEach(zone => {
    zone.id = (zone.value + (zone.isdst ? ' DST' : '')).replace(/[()\s]+/g, '_')
  })

  return zones
}

export async function getTimezoneId () {
  const zones = await getTimezones()

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const offset = new Date().getTimezoneOffset()
  const timezoneId = zones.find(
    zone => zone.utc.includes(timezone) && zone.offset * -60 === offset
  ).id
  return timezoneId
}

export default {
  css: `
._component_ > label {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
}

._component_ > label > select {
  width: 300px;
}

._component_ > label *+* {
  margin-left: var(--whitespace);
}
`,
  html: `
<label>
  <span data-children>Time Zone</span>
  <select 
    data-event="change:_component_.setTimezone"
    data-bind="method(_component_.to)=_component_.value"
  >
    <option value="select" selected>Please pick a Timezone</option>
    <option data-list="_component_.zones:id" data-bind="attr(value)=.id;text=.text"></option>
  </select>
  <span class="icon-chevron-down"></span>
</label>
`,
  async initialValue ({ b8r, component, get, set }) {
    const zones = await getTimezones()
    return {
      zones,
      value: { id: 'select' },
      to (select, timezone) {
        if (!timezone || !timezone.id) {
          return
        }
        select.value = timezone.id
      },
      setTimezone (event, target) {
        if (target.value && target.value !== 'select') {
          set({ value: zones.find(zone => zone.id === target.value) })
        }
      }
    }
  }
}
