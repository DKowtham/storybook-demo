import { SVGTemplateResult } from 'lit';
/**
 * Queries the id of the symbol we want from the page sprite from the light dom, returning a new svg generated from it
 * @author                     : PS
 * @created                    : 2022-20-05
 * @param {string} id_svg      : the id of the svg
 * @return {SVGTemplateResult | string} : the template result including an svg with the queried symbol, or empty string if not found
 */
export declare function getSvgFromSprite(id_svg: string): SVGTemplateResult | string;
/**
 * Checks if the call mode is active by querying the 'call-opened' class
 * @author                 : PS
 * @created                : 2022-05-22 [WPS-4768]
 */
export declare function isCallModeActive(): boolean;
//# sourceMappingURL=utils.d.ts.map