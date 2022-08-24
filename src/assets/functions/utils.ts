import { SVGTemplateResult, svg } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js'

/**
 * Queries the id of the symbol we want from the page sprite from the light dom, returning a new svg generated from it
 * @author                     : PS
 * @created                    : 2022-20-05 
 * @param {string} id_svg      : the id of the svg
 * @return {SVGTemplateResult | string} : the template result including an svg with the queried symbol, or empty string if not found
 */
export function getSvgFromSprite(id_svg: string): SVGTemplateResult | string {
    if (!id_svg) return ''
    const el_svg: HTMLElement = document.getElementById(id_svg) as HTMLElement

    return el_svg === null || !el_svg.hasChildNodes() ? ''
        : svg`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">${unsafeSVG(el_svg.innerHTML)}</svg>`
}

/**
 * Checks if the call mode is active by querying the 'call-opened' class
 * @author                 : PS
 * @created                : 2022-05-22 [WPS-4768]
 */
export function isCallModeActive(): boolean {
    return document.getElementsByTagName('body')[0].classList.contains('call-opened'); 
}