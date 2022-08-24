import { LitElement, TemplateResult, CSSResult } from 'lit';
/**
 * <ppn-puzzle-layout>
 * Doc: TODO
 *
 * @author                : DK
 * @created               : 2022-08-04 [WPS-4768]
 * @attr title            : main title of the block
 * @attr subtitle         : subtitle of the block
 * @attr ctaLeft          : Boolean to activate cta
 * @attr wcbForm          : Boolean to activate wcb form
 * @attr wcbCta           : Boolean to activate wcb cta
 * @attr isTustrpilot     : Boolean to activate trustpilot block
 * @attr topOrder         : Mobile order for the top wrapper
 * @attr middleLefOrder   : Mobile order for the middle left wrapper
 * @attr bottom stripe order : Mobile order for the bottom stripe wrapper
 * @attr bottom info order : Mobile order for the bottom info to activate wcb form
 *
 */
export declare class PpnPuzzleLayout extends LitElement {
    title: string;
    subtitle: string;
    ctaLeft: boolean;
    wcbForm: boolean;
    wcbCta: boolean;
    isTrustpilot: boolean;
    topOrder: number;
    middleLeftOrder: number;
    middleRightOrder: number;
    bottomStripeOrder: number;
    bottomInfoOrder: number;
    static styles: CSSResult;
    render(): TemplateResult;
}
//# sourceMappingURL=ppn-puzzle-layout.d.ts.map