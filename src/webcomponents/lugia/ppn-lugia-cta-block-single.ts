import { LitElement, html, TemplateResult, css, CSSResult, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { isCallModeActive } from '../../assets/functions/utils'
import { media_tablet_desktop } from '../../assets/styles/constants-styles'
import { style_reset_p } from '../../assets/styles/reset-styles'
import '../common/ppn-info'
import '../../../lib/webcomponents/common/ppn-cta'

/**
 * <ppn-lugia-cta-block-single>
 * Doc: https://www.notion.so/papernest/ppn-lugia-cta-block-single-75ff897c941e4eeba44da339439d3375
 *
 * @author                : PS
 * @created               : 2022-05-22 [WPS-4768]
 * @attr active           : when does it show, possible values: "app", "call", by default it is always displayed
 * @attr info-text        : text for the info (or compliance) component
 * @attr info-hover-ext   : text that shows when info_text is hovered
 * @attr call-text        : component text for call mode
 * @attr app-text         : component text for app mode
 * @attr cta-app-text     : text for the cta on app mode
 * @attr cta-call-text    : text for the cta on call mode
 * @attr cta-app-href     : link for cta app mode
 * @attr cta-call-href    : link for cta call mode
 * @attr cta-app-icon     : id of icon on app mode
 * @attr cta-call-icon    : id of icon on call mode
 */

@customElement('ppn-lugia-cta-block-single')
export default class PpnCtaBlockSingle extends LitElement {

    @property({type: String})
    active = ''

    @property({type: String, attribute: 'info-text'})
    infoText = ''

    @property({type: String, attribute: 'info-hover-text'})
    infoHoverText = ''

    @property({type: String, attribute: 'call-text'})
    callText = ''

    @property({type: String, attribute: 'app-text'})
    appText = ''

    @property({type: String, attribute: 'cta-app-text'})
    ctaAppText = ''

    @property({type: String, attribute: 'cta-call-text'})
    ctaCallText = ''

    @property({type: String, attribute: 'cta-app-href'})
    ctaAppHref = ''

    @property({type: String, attribute: 'cta-call-href'})
    ctaCallHref = ''

    @property({type: String, attribute: 'cta-app-icon'})
    ctaAppIcon = ''

    @property({type: String, attribute: 'cta-call-icon'})
    ctaCallIcon = ''

    static override styles: CSSResult[] = [
        style_reset_p,
        css`

        :host {
            display: block;
            padding: var(--pd-block);
            margin: var(--mg-between-sm) 0;
        }

        .content {
            padding: var(--pd-lg);
            border-radius: var(--br-base);
            background-color: var(--c-primary);
        }

        p {
            margin: auto;
            margin-bottom: var(--mg-sm);
            text-align: center;
            color: var(--c-white);
        }

        ppn-cta {
            --cta-c-txt-hover: var(--c-primary);
            --cta-justify: center;
        }

        ppn-info {
            margin-top: var(--mg-2xs);
        }

        @media ${unsafeCSS(media_tablet_desktop)} {
            .content {
                display: grid;
                grid-template-columns: auto minmax(100px, 40%);
                padding: var(--pd-2xl);
            }

            ppn-cta {
                --cta-justify: flex-end;
            }

            p {
                margin-bottom: 0;
                text-align: left;
            }
        }
    `];

     override render(): TemplateResult | void {

         // If the active mode does not correspond to the current page mode, we don't render
        if (this.active === "app" && isCallModeActive() === true || this.active === "call" && isCallModeActive() === false) return;

        return html`
            <div class="content">
                <p>${   // If the value is empty, we add the other attribute value
                        isCallModeActive()
                            ? this.callText || this.appText
                            : this.appText || this.callText
                    }
                </p>
                <ppn-cta
                    app-href=${this.ctaAppHref}
                    call-href=${this.ctaCallHref}
                    app-text=${this.ctaAppText}
                    call-text=${this.ctaCallText}
                    cta-color=${"custom-reverse"}
                    custom-color=${"var(--c-white)"}
                    cta-radius=${"ppn"}
                    cta-app-icon=${this.ctaAppIcon}
                    cta-call-icon=${this.ctaCallIcon}
                ></ppn-cta>
            </div>
            <ppn-info
                info-text=${this.infoText}
                hover-text=${this.infoHoverText}
                direction=${"reverse"}
            ></ppn-info>
        `
    }
}