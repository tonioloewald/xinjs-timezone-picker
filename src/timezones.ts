const timeNow = new Date()

export interface Timezone {
  name: string,
  offset: number,
  utc: string
}

export const timezones: Timezone[] = Intl.supportedValuesOf('timeZone').map(name => {
  const offset = Number(Intl.DateTimeFormat('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'shortOffset',
    timeZone: name
  }).format(timeNow).split('GMT').pop())
  console.log({
    name,
    offset,
    utc: offset !== 0 ? `UTC${offset > 0 ? '+' : '-'}${offset}` : 'UTC'
  })
  return {
    name,
    offset,
    utc: `UTC${offset > 0 ? '+' : ''}${offset !== 0 ? offset : ''}`
  }
})

export const localTimezone = timezones.find(z => z.name === Intl.DateTimeFormat().resolvedOptions().timeZone) as Timezone