import {LitElement, html, TemplateResult, CSSResult, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import { isCallModeActive } from '../../assets/functions/utils'

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

@customElement('ppn-puzzle-layout')
export class PpnPuzzleLayout extends LitElement {
    @property({type: String})
    override title = ''

    @property({type: String})
    subtitle = ''

    @property({type: Boolean, attribute: 'cta-left'})
    ctaLeft = false

    @property({type: Boolean, attribute: 'wcb-form'})
    wcbForm = false

    @property({type: Boolean, attribute: 'wcb-cta'})
    wcbCta = false

    @property({type: Boolean})
    isTrustpilot = false

    @property({type: Number, attribute: 'top-order'})
    topOrder = 1

    @property({type: Number, attribute: 'middle-left-order'})
    middleLeftOrder = 2

    @property({type: Number, attribute: 'middle-right-order'})
    middleRightOrder = 3

    @property({type: Number, attribute: 'bottom-stripe-order'})
    bottomStripeOrder = 4

    @property({type: Number, attribute: 'bottom-info-order'})
    bottomInfoOrder = 5

    static override styles: CSSResult = css`
        :host {
            display: grid;
            padding-top: var(--sz-xl);
            background-color: var(--c-white);
            border-radius: var(--br-base)
        }

        .puzzle-wrapper {
            display: grid;
            grid-template-columns: var(--sz-xl) 1fr 1fr var(--sz-xl);
            grid-template-rows: auto;
            grid-template-areas:
                ". puzzle-top puzzle-top ."
                ". puzzle-middle-left puzzle-middle-right ."
                "puzzle-bottom-stripe puzzle-bottom-stripe puzzle-bottom-stripe puzzle-bottom-stripe"
                "puzzle-bottom-info puzzle-bottom-info puzzle-bottom-info puzzle-bottom-info";
        }

        .puzzle-top {
            grid-area: puzzle-top;
        }

        .puzzle-middle-left {
            position: relative;
            grid-area: puzzle-middle-left;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .puzzle-middle-right {
            grid-area: puzzle-middle-right;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .puzzle-bottom-stripe {
            grid-area: puzzle-bottom-stripe;
        }

        .puzzle-bottom-info {
            grid-area: puzzle-bottom-info;
            padding: 0 var(--sz-xl);
        }

        .top-bordered {
            margin-top: var(--sz-md);
            border-top: solid 1px var(--c-grey-main);
        }

        .title {
            font-size: var(--fs-lg);
            font-weight: var(--fw-medium);
            line-height: 1.1;
            color: var(--c-black);
        }

        @media (max-width: 767px) {
            .puzzle-wrapper {
                grid-template-columns: var(--sz-xs) 1fr var(--sz-xs);
                grid-template-areas:
                  ". order-1 ."
                  ". order-2 ."
                  ". order-3 ."
                  ". order-4 ."
                  ". order-5 .";
                grid-row-gap: 20px;
            }

            .order-1 {
                grid-area: order-1;
            }

            .order-2 {
                grid-area: order-2;
            }

            .order-3 {
                grid-area: order-3;
            }

            .order-4 {
                grid-area: order-4;
            }

            .order-5 {
                grid-area: order-5;
            }
        }

        @media (min-width: 768px) {
            :host {
                width: auto;
            }

            .right-bordered:after {
                content: '';
                position: absolute;
                right: 0;
                top: 0;
                height: 100%;
                width: 1px;
                background-color: var(--c-grey-main);
            }
        }

        @media (min-width: 1280px) {
            :host {
                max-width: 740px;
                box-shadow: var(--bs-base);
            }
        }
    `;

    override render(): TemplateResult {
        return html`
            <div class="puzzle-wrapper">
                <div class="puzzle-top order-${this.topOrder}">
                    <p class="title">${this.title}</p>
                    <p class="subtitle">${this.subtitle}</p>
                </div>
                <div class="puzzle-middle-left order-${this.middleLeftOrder} ${isCallModeActive() ? `bordered-right` : ``}"><slot name="wcb-cta-left"></slot></div>
                <div class="puzzle-middle-right order-${this.middleRightOrder}">
                    ${this.wcbForm ?
                        html`
                            <slot name="wcb-form"></slot>` : this.wcbCta ? html`
                            <slot name="wcb-cta-right"></slot>` : ``
                    }
                </div>

                ${isCallModeActive() ? html `<div class="puzzle-bottom-stripe order-${this.bottomStripeOrder}"><slot name="stripe"></slot></div>` : html ``}
                <div class="puzzle-bottom-info order-${this.bottomInfoOrder} ${!isCallModeActive() ? `bordered-top` : ``}"><slot name="info"></slot></div>
            </div>
        `
    }
}