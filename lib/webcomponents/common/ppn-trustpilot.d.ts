import { LitElement, TemplateResult, CSSResult } from "lit";
/**
 * <ppn-trustpilot>
 *
 * @author              : DK
 * @created             : 2022-08-01 [WPS-4772]
 * @attr is-active       : define if the block is show or not
 * @attr link           : the link to truspilot website
 * @attr rel            : rel of the link
 * @attr target         : link target
 * @attr rating         : rating of the website
 * @attr total-users     : number of user who gave review
 * @attr logo-src        : Trustpilot logo source
 * @attr logo-alt        : Trustpilot logo alt
 *
 *
 */
export default class PpnTrustpilot extends LitElement {
    isActive: boolean;
    link: string;
    rel: string;
    target: string;
    rating: number;
    totalUsers: string;
    totalStars: number;
    logoAlt: string;
    logoSrc: string;
    static styles: CSSResult;
    /**
     * Set Trustpilot stars depending on rating value
     * @author                 : DK
     * @created                : 2022-05-22 [WPS-4768]
     * @return                 : Array of stars
     */
    protected _displayStar(mode: String): TemplateResult;
    protected _createStar(): TemplateResult;
    render(): TemplateResult;
}
//# sourceMappingURL=ppn-trustpilot.d.ts.map