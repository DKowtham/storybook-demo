var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getSvgFromSprite, isCallModeActive } from '../../assets/functions/utils';
import { styleMap } from 'lit-html/directives/style-map.js';
/**
 * <ppn-cta>
 * Doc: https://www.notion.so/papernest/ppn-cta-11f1449cd7964413beba20ab57cd03f3
 *
 * @author              : PS
 * @created             : 2022-05-22 [WPS-4768]
 * @attr app-href       : url for app mode
 * @attr call-href      : url for day mode
 * @attr app-text       : cta text for app mode
 * @attr call-text      : cta text for day mode
 * @attr cta-color      : the predefined color style: options include "primary-reverse", "secondary", "secondary-reverse", "error" or "error-reverse"
 * @attr cta-width      : the width style: options include "full"
 * @attr cta-height     : the height style: options include "small"
 * @attr cta-radius     : the predefined style radius: options include "ppn", "round", "square"
 * @attr cta-app-icon   : id of icon on app mode
 * @attr cta-call-icon  : id of icon on call mode
 */
let PpnCta = class PpnCta extends LitElement {
    constructor() {
        super(...arguments);
        this.appHref = '';
        this.callHref = '';
        this.appText = '';
        this.callText = '';
        this.ctaColor = '';
        this.ctaWidth = '';
        this.ctaHeight = '';
        this.ctaRadius = '';
        this.ctaAppIcon = '';
        this.ctaCallIcon = '';
        this.customColor = '';
        this.customColorHover = '';
    }
    /**
     * Sets css variables values in case we have 'custom' or 'custom-reverse' style attr
     * @author                 : PS
     * @created                : 2022-05-22 [WPS-4768]
     */
    getCustomColorStyle() {
        return this.ctaColor === 'custom' ? {
            ['--cta-c-bg']: this.customColor,
            ['--cta-c-bg-hover']: this.customColorHover
        }
            : this.ctaColor === 'custom-reverse' ? {
                ['--cta-c-br']: this.customColor,
                ['--cta-c-bg']: "transparent",
                ['--cta-c-bg-hover']: this.customColor,
                ['--cta-c-txt']: this.customColor
            } : {};
    }
    render() {
        return html `
            <a
                href="${isCallModeActive() ? this.callHref : this.appHref}"
                style=${styleMap(this.getCustomColorStyle())}
            >
                ${this.ctaCallIcon && this.ctaAppIcon
            ? getSvgFromSprite(isCallModeActive() ? this.ctaCallIcon : this.ctaAppIcon)
            : ``}
                ${isCallModeActive() ? this.callText : this.appText}
            </a>
        `;
    }
};
PpnCta.styles = css `

        :host {
            --cta-c-bg: var(--c-primary);
            --cta-c-bg-hover: var(--c-primary-dark);
            --cta-c-br: transparent;
            --cta-c-txt: var(--c-white);
            --cta-c-txt-hover: var(--c-white);
            --cta-height: var(--sz-2xl);
            --cta-width: fit-content;
            --cta-justify: unset;
            --cta-radius: var(--br-sm);

            display: flex;
            justify-content: var(--cta-justify);
        }

        :host([cta_color="secondary"]) {
            --cta-c-bg: var(--c-secondary);
            --cta-c-bg-hover: var(--c-secondary-dark);
        }

        :host([cta_color="error"]) {
            --cta-c-bg: var(--c-error);
            --cta-c-bg-hover: var(--c-error);
            --cta-c-txt: var(--c-error);
        }

        :host([cta_color="primary-reverse"]) {
            --cta-c-br: var(--c-primary);
            --cta-c-bg-hover: var(--c-primary);
            --cta-c-txt: var(--c-primary);
        }

        :host([cta_color="secondary-reverse"]) {
            --cta-c-br: var(--c-secondary);
            --cta-c-bg-hover: var(--c-secondary-dark);
        }

        :host([cta_color="error-reverse"]) {
            --cta-c-br: var(--c-error);
            --cta-c-bg-hover: var(--c-error);
            --cta-c-txt: var(--c-error);
        }

        :host([cta_color="primary-reverse"]),
        :host([cta_color="secondary-reverse"]) {
            --cta-c-bg: transparent;
        }

        :host([cta_height="small"]) {
            --cta-height: var(--sz-xl);
        }

        :host([cta_width="full"]) {
            --cta-width: 100%;
        }

        :host([cta_radius="ppn"]) {
            --cta-radius: var(--br-pn);
        }

        :host([cta_radius="round"]) {
            --cta-radius: var(--br-sm);
        }

        :host([cta_radius="square"]) {
            --cta-radius: 0;
        }

        a {
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            height: var(--cta-height);
            width: var(--cta-width);
            padding: 0 var(--pd-md);
            font-weight: var(--fw-medium);
            font-size: var(--fs-base);
            text-decoration: none;
            text-align: center;
            text-decoration: none;
            border-radius: var(--cta-radius);
            border: 1px solid var(--cta-c-br);
            background-color: var(--cta-c-bg);
            color: var(--cta-c-txt);
            transition: background-color var(--tr-base);
        }

        a:hover {
            color: var(--cta-c-txt-hover);
            border-color: var(--cta-c-br-hover);
            background-color: var(--cta-c-bg-hover);
        }

        svg {
            box-sizing: border-box;
            height: var(--sz-lg);
            max-width: var(--sz-lg);
            margin-right: var(--mg-xs);
        }
    `;
__decorate([
    property({ type: String, attribute: 'app-href' })
], PpnCta.prototype, "appHref", void 0);
__decorate([
    property({ type: String, attribute: 'call-href' })
], PpnCta.prototype, "callHref", void 0);
__decorate([
    property({ type: String, attribute: 'app-text' })
], PpnCta.prototype, "appText", void 0);
__decorate([
    property({ type: String, attribute: 'call-text' })
], PpnCta.prototype, "callText", void 0);
__decorate([
    property({ type: String, attribute: 'cta-color' })
], PpnCta.prototype, "ctaColor", void 0);
__decorate([
    property({ type: String, attribute: 'cta-width' })
], PpnCta.prototype, "ctaWidth", void 0);
__decorate([
    property({ type: String, attribute: 'cta-height' })
], PpnCta.prototype, "ctaHeight", void 0);
__decorate([
    property({ type: String, attribute: 'cta-radius' })
], PpnCta.prototype, "ctaRadius", void 0);
__decorate([
    property({ type: String, attribute: 'cta-app-icon' })
], PpnCta.prototype, "ctaAppIcon", void 0);
__decorate([
    property({ type: String, attribute: 'cta-call-icon' })
], PpnCta.prototype, "ctaCallIcon", void 0);
__decorate([
    property({ type: String, attribute: 'custom-color' })
], PpnCta.prototype, "customColor", void 0);
__decorate([
    property({ type: String, attribute: 'custom-color-hover' })
], PpnCta.prototype, "customColorHover", void 0);
PpnCta = __decorate([
    customElement('ppn-cta')
], PpnCta);
export { PpnCta };
//# sourceMappingURL=ppn-cta.js.map