# xin-timezone-picker

[github](https://github.com/tonioloewald/xinjs-timezone-picker#readme) | [npm](https://www.npmjs.com/package/xinjs-timezone-picker)

This is a [web-component](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) 
that provides a graphical timezone-picker, inspired by Apple's graphical timezone-picker.

## Usage

### HTML

    import 'xin-timezone-picker'

And now you can use:

    <timezone-picker></timezone-picker>

### Programmatically

    import { timezonePicker } from 'xin-timezone-picker'
    document.body.append(timezonePicker())

`timezonePicker` is a standard `xinjs` `ElementCreator`, i.e. a function that takes
`ElementPart` parameters and returns an `element` of the type expected.

You can also obtain TimezonePicker, the class constructor for `<timezone-picker>`.

### timezones, localTimezone, Timezone

Rather than using a static dataset of timezones, <timezone-picker> uses the 
[Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
Javascript global to build `timezones` and determine the `localTimezone`. This
both reduces the size of this component considerably and ensures it will match
the behavior of the runtime environment exactly.

These are respectively of type `Timezone[]` and a `Timezone`, where:

    interface Timezone {
      name: string    // the IANA name
      offset: number  // the offset from GMT in hours
      utc: string     // the timezone's UTC offset
    }

> Note that for some reason `parcel` is not recognizing that the `Timezone` interface is
> exported, so it's not exported.

## Styling

You can style the <timezone-picker> by using [CSS-Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables)

By default, the <timezone-picker> is 400px width and 231px tall. You can scale it using ths `--scale` variable (1 by default).

You can change the land and ocean colors using the `--map-ocean` and `--map-land` variables.

`--inset` and `--padding` position and pad the time-zone `<select>`.

`--font-size` and `--font-family` control the text of the `<select>`