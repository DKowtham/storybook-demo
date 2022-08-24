var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { isCallModeActive } from '../../assets/functions/utils';
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
let PpnPuzzleLayout = class PpnPuzzleLayout extends LitElement {
    constructor() {
        super(...arguments);
        this.title = '';
        this.subtitle = '';
        this.ctaLeft = false;
        this.wcbForm = false;
        this.wcbCta = false;
        this.isTrustpilot = false;
        this.topOrder = 1;
        this.middleLeftOrder = 2;
        this.middleRightOrder = 3;
        this.bottomStripeOrder = 4;
        this.bottomInfoOrder = 5;
    }
    render() {
        return html `
            <div class="puzzle-wrapper">
                <div class="puzzle-top order-${this.topOrder}">
                    <p class="title">${this.title}</p>
                    <p class="subtitle">${this.subtitle}</p>
                </div>
                <div class="puzzle-middle-left order-${this.middleLeftOrder} ${isCallModeActive() ? `bordered-right` : ``}"><slot name="wcb-cta-left"></slot></div>
                <div class="puzzle-middle-right order-${this.middleRightOrder}">
                    ${this.wcbForm ?
            html `
                            <slot name="wcb-form"></slot>` : this.wcbCta ? html `
                            <slot name="wcb-cta-right"></slot>` : ``}
                </div>

                ${isCallModeActive() ? html `<div class="puzzle-bottom-stripe order-${this.bottomStripeOrder}"><slot name="stripe"></slot></div>` : html ``}
                <div class="puzzle-bottom-info order-${this.bottomInfoOrder} ${!isCallModeActive() ? `bordered-top` : ``}"><slot name="info"></slot></div>
            </div>
        `;
    }
};
PpnPuzzleLayout.styles = css `
        :host {
            display: grid;
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
            border-radius: var(--br-base);
            z-index: 1;
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
                box-shadow: var(--bs-base);
            }

            .puzzle-wrapper {
                background-color: var(--c-white);
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
                width: 740px;
            }
        }
    `;
__decorate([
    property({ type: String })
], PpnPuzzleLayout.prototype, "title", void 0);
__decorate([
    property({ type: String })
], PpnPuzzleLayout.prototype, "subtitle", void 0);
__decorate([
    property({ type: Boolean, attribute: 'cta-left' })
], PpnPuzzleLayout.prototype, "ctaLeft", void 0);
__decorate([
    property({ type: Boolean, attribute: 'wcb-form' })
], PpnPuzzleLayout.prototype, "wcbForm", void 0);
__decorate([
    property({ type: Boolean, attribute: 'wcb-cta' })
], PpnPuzzleLayout.prototype, "wcbCta", void 0);
__decorate([
    property({ type: Boolean })
], PpnPuzzleLayout.prototype, "isTrustpilot", void 0);
__decorate([
    property({ type: Number, attribute: 'top-order' })
], PpnPuzzleLayout.prototype, "topOrder", void 0);
__decorate([
    property({ type: Number, attribute: 'middle-left-order' })
], PpnPuzzleLayout.prototype, "middleLeftOrder", void 0);
__decorate([
    property({ type: Number, attribute: 'middle-right-order' })
], PpnPuzzleLayout.prototype, "middleRightOrder", void 0);
__decorate([
    property({ type: Number, attribute: 'bottom-stripe-order' })
], PpnPuzzleLayout.prototype, "bottomStripeOrder", void 0);
__decorate([
    property({ type: Number, attribute: 'bottom-info-order' })
], PpnPuzzleLayout.prototype, "bottomInfoOrder", void 0);
PpnPuzzleLayout = __decorate([
    customElement('ppn-puzzle-layout')
], PpnPuzzleLayout);
export { PpnPuzzleLayout };
//# sourceMappingURL=ppn-puzzle-layout.js.map