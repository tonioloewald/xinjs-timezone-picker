/* eslint-disable */
// @ts-expect-error
import { test, expect } from 'bun:test'
import { timezones, zoneFromName } from './timezones'

test('timezones loads', () => {
  expect(timezones === undefined).toBe(false)
  expect(Array.isArray(timezones)).toBe(true)
})

test('over 400 timezones', () => {
  expect(timezones.length > 400).toBe(true)
})

test('zoneFromName works', () => {
  expect([-2.5,-3.5].includes(zoneFromName('America/St_Johns')?.offset as number)).toBe(true)
  expect([-6,-7].includes(zoneFromName('America/Los_Angeles')?.offset as number)).toBe(true)
  expect([10,11].includes(zoneFromName('Australia/Sydney')?.offset as number)).toBe(true)
  expect([0,1].includes(zoneFromName('Europe/London')?.offset as number)).toBe(true)
})