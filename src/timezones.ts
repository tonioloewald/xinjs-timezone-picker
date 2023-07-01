const timeNow = new Date()

export interface Timezone {
  name: string,
  abbr: string,
  offset: number,
}

// @ts-ignore-error
export const timezones: Timezone[] = Intl.supportedValuesOf('timeZone').map(name => {
  // @ts-expect-error
  const offset = Number(Intl.DateTimeFormat('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'shortOffset',
    timeZone: name
  }).format(timeNow).split('GMT').pop().replace(/\:30/, '.5'))

  const abbr = Intl.DateTimeFormat('en-GB', {
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: name
  }).format(timeNow).split(' ').pop()

  return {
    name,
    abbr,
    offset,
  }
})

export const localTimezone = timezones.find(z => z.name === Intl.DateTimeFormat().resolvedOptions().timeZone) as Timezone