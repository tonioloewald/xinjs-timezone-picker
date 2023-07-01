import { Component } from "xinjs";
interface Timezone {
    name: string;
    abbr: string;
    offset: number;
}
export const timezones: Timezone[];
export const localTimezone: Timezone;
export class TimezonePicker extends Component {
    value: import("timezones").Timezone;
    timezone: string;
    styleNode: HTMLStyleElement;
    content: any;
    constructor();
    pickRegion: (event: Event) => void;
    connectedCallback(): void;
    render(): void;
}
export const timezonePicker: import("xinjs").ElementCreator<any>;

//# sourceMappingURL=types.d.ts.map
