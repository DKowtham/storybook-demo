import { LitElement, TemplateResult, CSSResult } from 'lit';
/**
 * <ppn-info>
 * Doc: TODO
 *
 * @author                : PS
 * @created               : 2022-05-22 [WPS-4768]
 * @attr call-href        : url for day mode
 * @attr info-text        : text for the info (or compliance) component
 * @attr hover-ext        : text that shows when info_text is hovered
 * @attr direction        : direction of the rows. Available options: "reverse"
 */
export declare class PpnInfo extends LitElement {
    infoText: string;
    hoverText: string;
    direction: string;
    static styles: CSSResult[];
    render(): TemplateResult;
}
//# sourceMappingURL=ppn-info.d.ts.map