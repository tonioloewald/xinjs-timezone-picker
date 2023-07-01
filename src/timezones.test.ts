/* eslint-disable */
// @ts-expect-error
import { test, expect } from 'bun:test'
import { timezones } from './timezones'

test('timezones loads', () => {
  expect(timezones === undefined).toBe(false)
  expect(Array.isArray(timezones)).toBe(true)
  expect(timezones.length > 400).toBe(true)
})