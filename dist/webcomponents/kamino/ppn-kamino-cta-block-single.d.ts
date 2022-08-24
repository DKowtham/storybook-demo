import { LitElement, TemplateResult, CSSResult } from 'lit';
import '../common/ppn-info';
import '../../../lib/webcomponents/common/ppn-cta';
/**
 * <ppn-kamino-cta-block-single>
 * Doc: https://www.notion.so/papernest/ppn-kamino-cta-block-single-11374d726fc146ce888cd08eba045714
 *
 * @author                  : PS
 * @created                 : 2022-05-22 [WPS-4768]
 * @attr active             : when does it show, possible values: "night", "day", by default it is always displayed
 * @attr info-text          : text for the info (or compliance) component
 * @attr info-hover-text    : text that shows when info_text is hovered
 * @attr call-text          : component text for call mode
 * @attr app-text           : component text for app mode
 * @attr cta-app-text       : text for the cta on app mode
 * @attr cta-call-text      : text for the cta on call mode
 * @attr cta-apphhref       : link for cta app mode
 * @attr cta-call-href      : link for cta call mode
 * @attr cta-app-icon       : id of icon on app mode
 * @attr cta-call-icon      : id of icon on call mode
 */
export default class PpnCtaBlockSingle extends LitElement {
    active: string;
    infoText: string;
    infoHoverText: string;
    callText: string;
    appText: string;
    ctaAppText: string;
    ctaCallText: string;
    ctaAppHref: string;
    ctaCallHref: string;
    ctaRadius: string;
    ctaAppIcon: string;
    ctaCallIcon: string;
    static styles: CSSResult[];
    render(): TemplateResult | void;
}
//# sourceMappingURL=ppn-kamino-cta-block-single.d.ts.map