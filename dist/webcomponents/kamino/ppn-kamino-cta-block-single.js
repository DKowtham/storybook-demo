var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { isCallModeActive } from '../../assets/functions/utils';
import { media_tablet_desktop } from '../../assets/styles/constants-styles';
import { style_reset_p } from '../../assets/styles/reset-styles';
import { svg_illustration_1 } from '../../assets/svg/illustration1';
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
let PpnCtaBlockSingle = class PpnCtaBlockSingle extends LitElement {
    constructor() {
        super(...arguments);
        this.active = '';
        this.infoText = '';
        this.infoHoverText = '';
        this.callText = '';
        this.appText = '';
        this.ctaAppText = '';
        this.ctaCallText = '';
        this.ctaAppHref = '';
        this.ctaCallHref = '';
        this.ctaRadius = '';
        this.ctaAppIcon = '';
        this.ctaCallIcon = '';
    }
    render() {
        // If the active mode does not correspond to the current page mode, we don't render
        if (this.active === "app" && isCallModeActive() === true || this.active === "call" && isCallModeActive() === false)
            return;
        return html `
            <div class="content">
                <div class="background"></div>
                ${svg_illustration_1}
                <p>${isCallModeActive() ? this.callText : this.appText}</p>
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
        `;
    }
};
PpnCtaBlockSingle.styles = [
    style_reset_p,
    css `

        :host {
            display: block;
            padding: var(--pd-block);
            margin: var(--mg-between-sm) 0;
        }

        .content {
            position: relative;
            padding: var(--pd-lg);
            border-radius: var(--br-base);
            background-color: var(--c-secondary);
            overflow: hidden;
        }

        .background {
            --br-backr: var(--sz-2xl);
            --height-backr: 110px;
            position: absolute;
            height: var(--height-backr);
            width: 100%;
            top: 0;
            left: 0;
            background-color: var(--c-bg-main);
            border-radius: 0 0 0 var(--br-backr);
        }

        p {
            position: relative;
            margin: auto;
            margin-bottom: var(--mg-sm);
            color: var(--c-white);
        }

        ppn-cta {
            --cta-c-txt-hover: var(--c-primary);
        }

        ppn-info {
            margin-top: var(--mg-2xs);
        }

        svg {
            position: relative;
            height: var(--sz-5xl);
        }

        .background:before,
        .background:after {
            content: '';
            position: absolute;
            height: calc(2 * var(--br-backr));
            width: calc(2 * var(--br-backr));
            top: var(--height-backr);
            right: 0;
            background-color: var(--c-bg-main);
        }

        .background:after {
            background-color: var(--c-secondary);
            border-radius: 0 var(--br-backr) 0 0;
        }

        @media ${unsafeCSS(media_tablet_desktop)} {
            .content {
                display: grid;
                grid-template-columns: 50% 50%;
                padding: var(--pd-xl) var(--pd-2xl);
            }

            p {
                grid-row-start: 1;
            }

            ppn-cta {
                grid-column-start: 1;
            }

            .background {
                position: absolute;
                height: 130%;
                width: 100%;
                border-radius: 75%;
                transform: translate(55%, 0%) rotate(5deg);
            }

            svg {
                grid-row: 1 / 3;
                grid-column-start: 2;
                justify-self: end;
                height: clamp(var(--sz-5xl), auto, 170px);
            }

            .background:before,
            .background:after {
                display: none;
            }
        }
    `
];
__decorate([
    property({ type: String })
], PpnCtaBlockSingle.prototype, "active", void 0);
__decorate([
    property({ type: String, attribute: 'info-text' })
], PpnCtaBlockSingle.prototype, "infoText", void 0);
__decorate([
    property({ type: String, attribute: 'info-hover-text' })
], PpnCtaBlockSingle.prototype, "infoHoverText", void 0);
__decorate([
    property({ type: String, attribute: 'call-text' })
], PpnCtaBlockSingle.prototype, "callText", void 0);
__decorate([
    property({ type: String, attribute: 'app-text' })
], PpnCtaBlockSingle.prototype, "appText", void 0);
__decorate([
    property({ type: String, attribute: 'cta-app-text' })
], PpnCtaBlockSingle.prototype, "ctaAppText", void 0);
__decorate([
    property({ type: String, attribute: 'cta-call-text' })
], PpnCtaBlockSingle.prototype, "ctaCallText", void 0);
__decorate([
    property({ type: String, attribute: 'cta-app-href' })
], PpnCtaBlockSingle.prototype, "ctaAppHref", void 0);
__decorate([
    property({ type: String, attribute: 'cta-call-href' })
], PpnCtaBlockSingle.prototype, "ctaCallHref", void 0);
__decorate([
    property({ type: String, attribute: 'cta-radius' })
], PpnCtaBlockSingle.prototype, "ctaRadius", void 0);
__decorate([
    property({ type: String, attribute: 'cta-app-icon' })
], PpnCtaBlockSingle.prototype, "ctaAppIcon", void 0);
__decorate([
    property({ type: String, attribute: 'cta-call-icon' })
], PpnCtaBlockSingle.prototype, "ctaCallIcon", void 0);
PpnCtaBlockSingle = __decorate([
    customElement('ppn-kamino-cta-block-single')
], PpnCtaBlockSingle);
export default PpnCtaBlockSingle;
//# sourceMappingURL=ppn-kamino-cta-block-single.js.map