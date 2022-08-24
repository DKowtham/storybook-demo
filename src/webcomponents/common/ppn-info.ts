import { LitElement, html, TemplateResult, CSSResult, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { svg_icon_info } from '../../assets/svg/icons-svg'
import { style_reset_p } from '../../assets/styles/reset-styles'

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
@customElement('ppn-info')
export class PpnInfo extends LitElement {

    @property({type: String, attribute: 'info-text'})
    infoText = ''

    @property({type: String, attribute: 'hover-text'})
    hoverText = ''

    @property({type: String})
    direction = ''

    static override styles: CSSResult[] = [
        style_reset_p,
        css`

        :host {
            cursor: help;
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;
            width: fit-content;
            color: var(--c-grey-txt-light);
        }

        :host([direction="reverse"]) {
            flex-direction: row-reverse;
            margin-left: auto;
        }

        :is(p, .txt-hover)  {
            font-size: var(--fs-xs);
            font-weight: var(--fw-medium);
            color: currentColor;
            transition: color var(--trans-base);
        }

        :host(:hover) {
            color: var(--c-grey-txt-dark);
        }

        :host(:hover) .txt-hover {
            opacity: 1;
            pointer-events: all;
        }

        svg {
            color: currentColor;
            height: var(--sz-md);
            width: var(--sz-md);
            padding: var(--pd-xs) 0;
        }

        .txt {
            padding: 0 var(--pd-xs);
        }

        .txt-hover {
            position: absolute;
            pointer-events: none;
            max-width: 230px;
            right: 0;
            opacity: 0;
            background-color: var(--c-white);
            padding: var(--pd-md);
            border-radius: var(--br-base);
            box-shadow: var(--bs-lg);
            transition: opacity var(--tr-fast);
        }

        .txt-hover::after {
            content: '';
            position: absolute;
            top: 0;
            height: var(--sz-md);
            width: var(--sz-md);
            background-color: var(--c-white);
            transform: rotate(45deg) translateX(-50%);
        }

        .wrap {
            position: absolute;
            height: 0;
            width: 100%;
            bottom: 0;
            z-index: var(--zi-10);
        }
    `];

     override render(): TemplateResult {

        return html`
            ${svg_icon_info}
            <p class="txt">${this.infoText}</p>
            ${ this.hoverText
                ? html`<div class="wrap"><div class="txt-hover">${this.hoverText}</div></div>`
                : `` }
        `
    }
}

