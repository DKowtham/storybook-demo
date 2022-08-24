var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from "lit";
import { customElement, property } from 'lit/decorators.js';
import { getSvgFromSprite } from "../../assets/functions/utils";
/**
 * <ppn-trustpilot>
 *
 * @author              : DK
 * @created             : 2022-08-01 [WPS-4772]
 * @attr is-active       : define if the block is show or not
 * @attr link           : the link to truspilot website
 * @attr rel            : rel of the link
 * @attr target         : link target
 * @attr rating         : rating of the website
 * @attr total-users     : number of user who gave review
 * @attr logo-src        : Trustpilot logo source
 * @attr logo-alt        : Trustpilot logo alt
 *
 *
 */
let PpnTrustpilot = class PpnTrustpilot extends LitElement {
    constructor() {
        super(...arguments);
        this.isActive = false;
        this.link = '';
        this.rel = '';
        this.target = '';
        this.rating = 0;
        this.totalUsers = '';
        this.totalStars = 5;
        this.logoAlt = "";
        this.logoSrc = "";
    }
    /**
     * Set Trustpilot stars depending on rating value
     * @author                 : DK
     * @created                : 2022-05-22 [WPS-4768]
     * @return                 : Array of stars
     */
    _displayStar(mode) {
        return html `<span class="star">${getSvgFromSprite('icon_star_' + mode)}</span>`;
    }
    _createStar() {
        const number = Math.floor(this.rating);
        return html `
            ${[...Array(this.totalStars)].map((_, index) => {
            return index < number ? this._displayStar('full')
                : (index < this.rating) ? this._displayStar('half')
                    : this._displayStar('empty');
        })}
        `;
    }
    render() {
        return html `
          ${(this.rating) ?
            html `
                  <a href="${this.link}" rel="${this.rel}" target="${this.target}">
                    <span class="logo">
                      <img src="${this.logoSrc}" alt="${this.logoAlt}" loading="lazy">
                    </span>
                    <span class="stars-wrapper">
                      <span class="stars">${this._createStar()}</span>
                      <span class="total-users">${this.totalUsers}</span>
                    </span>
                  </a>`
            : ''}
          `;
    }
};
PpnTrustpilot.styles = css `
        a {
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            font-size: var( --fs-xs);
            color: var(--c-black);
            text-decoration: none;
        }

        .star {
            display: inline-block;
            padding: calc(var(--pd-2xs) / 2);
        }

        svg {
            width: var(--sz-md);
            height: var(--sz-md);
        }

        .total-users {
            display: block;
        }

        .logo {
            display: none;
        }

        .logo img {
            max-width: calc(var(--sz-3xl) * 2);
            height: auto;
        }

        @media (max-width: 767px) {
            :host {
                background-color: var(--c-white);
                padding: var(--sz-sm) var(--sz-xl);
            }

            .logo {
                display: block;
            }

            a:after {
                content: '';
                position: absolute;
                left: 50%;
                top: 0;
                height: 100%;
                width: 1px;
                background-color: var(--c-grey-main);
                transform: translateX(-50%);
            }
        }
    `;
__decorate([
    property({ type: Boolean, attribute: 'is-active' })
], PpnTrustpilot.prototype, "isActive", void 0);
__decorate([
    property({ type: String })
], PpnTrustpilot.prototype, "link", void 0);
__decorate([
    property({ type: String })
], PpnTrustpilot.prototype, "rel", void 0);
__decorate([
    property({ type: String })
], PpnTrustpilot.prototype, "target", void 0);
__decorate([
    property({ type: Number })
], PpnTrustpilot.prototype, "rating", void 0);
__decorate([
    property({ type: String, attribute: 'total-users' })
], PpnTrustpilot.prototype, "totalUsers", void 0);
__decorate([
    property({ type: Number, attribute: 'total-stars' })
], PpnTrustpilot.prototype, "totalStars", void 0);
__decorate([
    property({ type: String, attribute: 'logo-alt' })
], PpnTrustpilot.prototype, "logoAlt", void 0);
__decorate([
    property({ type: String, attribute: 'logo-src' })
], PpnTrustpilot.prototype, "logoSrc", void 0);
PpnTrustpilot = __decorate([
    customElement('ppn-trustpilot')
], PpnTrustpilot);
export default PpnTrustpilot;
//# sourceMappingURL=ppn-trustpilot.js.map