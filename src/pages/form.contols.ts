import { $ } from '@wdio/globals';
export class FormControls {
    public get firstName() { return $("#firstName") }
    public get lastName() { return $("#lastName") }
    public get userEmail() { return $("#userEmail") }
    public get mobile() { return $("#userNumber") }
    public get subject() { return $("#subjectsInput") }
}
export default new FormControls();