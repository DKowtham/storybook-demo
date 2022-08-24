import { LitElement, TemplateResult, CSSResult } from 'lit';
/**
 * <ppn-top-banner>
 * @author                : DK
 * @created               : 2022-08-11 [WPS-4883]
 * @attr img-background   : object of background picture: retina, desktop, tablet
 * @attr is-gmap          : param to activate google map
 * @attr api-key          : api key for google map
 * @attr latitude         : latitude param of the city
 * @attr longitude        : longitude param of the city
 */
export declare class PpnTopBanner extends LitElement {
    imgBackground: {
        retina: String;
        desktop: String;
        tablet: String;
    }[];
    apiKey: string;
    isGmap: boolean;
    latitude: number;
    longitude: number;
    static styles: CSSResult[];
    render(): TemplateResult;
}
//# sourceMappingURL=ppn-top-banner.d.ts.map