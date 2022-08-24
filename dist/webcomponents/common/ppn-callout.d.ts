import { LitElement, TemplateResult, CSSResult } from 'lit';
/**
 * <ppn-callout>
 * Doc: https://www.notion.so/papernest/ppn-callout-72a9196c015f4ed78e13097bb4c50866
 *
 * @author              : PS
 * @created             : 2022-05-22 [WPS-4772]
 * @attr title          : The title of the callout
 * @attr list           : an array of items in form of string
 * @slot                : This element uses a slot as text content
 */
export default class PpnCallout extends LitElement {
    title: string;
    list: string[];
    static styles: CSSResult;
    render(): TemplateResult;
}
//# sourceMappingURL=ppn-callout.d.ts.map