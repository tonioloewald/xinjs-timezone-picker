import { Component } from "xinjs";
interface Timezone {
    name: string;
    offset: number;
    utc: string;
}
export const timezones: Timezone[];
export const localTimezone: Timezone;
export class TimezonePicker extends Component {
    value: import("timezones").Timezone;
    timezone: string;
    styleNode: HTMLStyleElement;
    content: any;
    constructor();
    pickUTC: (event: Event) => void;
    connectedCallback(): void;
    showActive: () => void;
    render(): void;
}
export const timezonePicker: import("xinjs").ElementCreator<any>;

//# sourceMappingURL=types.d.ts.map
