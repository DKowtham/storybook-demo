import { LitElement, TemplateResult, CSSResult } from 'lit';
/**
 * <ppn-cta>
 * Doc: https://www.notion.so/papernest/ppn-cta-11f1449cd7964413beba20ab57cd03f3
 *
 * @author              : PS
 * @created             : 2022-05-22 [WPS-4768]
 * @attr app-href       : url for app mode
 * @attr call-href      : url for day mode
 * @attr app-text       : cta text for app mode
 * @attr call-text      : cta text for day mode
 * @attr cta-color      : the predefined color style: options include "primary-reverse", "secondary", "secondary-reverse", "error" or "error-reverse"
 * @attr cta-width      : the width style: options include "full"
 * @attr cta-height     : the height style: options include "small"
 * @attr cta-radius     : the predefined style radius: options include "ppn", "round", "square"
 * @attr cta-app-icon   : id of icon on app mode
 * @attr cta-call-icon  : id of icon on call mode
 */
export declare class PpnCta extends LitElement {
    appHref: string;
    callHref: string;
    appText: string;
    callText: string;
    ctaColor: string;
    ctaWidth: string;
    ctaHeight: string;
    ctaRadius: string;
    ctaAppIcon: string;
    ctaCallIcon: string;
    customColor: string;
    customColorHover: string;
    static styles: CSSResult;
    /**
     * Sets css variables values in case we have 'custom' or 'custom-reverse' style attr
     * @author                 : PS
     * @created                : 2022-05-22 [WPS-4768]
     */
    getCustomColorStyle(): {};
    render(): TemplateResult;
}
//# sourceMappingURL=ppn-cta.d.ts.map