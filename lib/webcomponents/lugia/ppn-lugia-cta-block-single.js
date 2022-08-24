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
import '../common/ppn-info';
import '../../../lib/webcomponents/common/ppn-cta';
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
        this.ctaAppIcon = '';
        this.ctaCallIcon = '';
    }
    render() {
        // If the active mode does not correspond to the current page mode, we don't render
        if (this.active === "app" && isCallModeActive() === true || this.active === "call" && isCallModeActive() === false)
            return;
        return html `
            <div class="content">
                <p>${ // If the value is empty, we add the other attribute value
        isCallModeActive()
            ? this.callText || this.appText
            : this.appText || this.callText}
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
    property({ type: String, attribute: 'cta-app-icon' })
], PpnCtaBlockSingle.prototype, "ctaAppIcon", void 0);
__decorate([
    property({ type: String, attribute: 'cta-call-icon' })
], PpnCtaBlockSingle.prototype, "ctaCallIcon", void 0);
PpnCtaBlockSingle = __decorate([
    customElement('ppn-lugia-cta-block-single')
], PpnCtaBlockSingle);
export default PpnCtaBlockSingle;
//# sourceMappingURL=ppn-lugia-cta-block-single.js.map