import {LitElement, html, TemplateResult, CSSResult, css} from "lit";
import { customElement, property } from 'lit/decorators.js';
import {getSvgFromSprite} from "../../assets/functions/utils";

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

@customElement('ppn-trustpilot')
export default class PpnTrustpilot extends LitElement {
    @property({ type: Boolean, attribute: 'is-active' })
    isActive = false;

    @property({ type: String })
    link = '';

    @property({ type: String })
    rel = '';

    @property({ type: String })
    target = '';

    @property({ type: Number })
    rating = 0;

    @property({ type: String, attribute: 'total-users'})
    totalUsers= '';

    @property({ type: Number, attribute: 'total-stars' })
    totalStars = 5;

    @property ({ type: String, attribute: 'logo-alt' })
    logoAlt = ""

    @property ({ type: String, attribute: 'logo-src' })
    logoSrc = ""

    static override styles: CSSResult = css`
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
    `

    /**
     * Set Trustpilot stars depending on rating value
     * @author                 : DK
     * @created                : 2022-05-22 [WPS-4768]
     * @return                 : Array of stars
     */

    protected _displayStar(mode: String): TemplateResult {
        return html`<span class="star">${getSvgFromSprite('icon_star_' + mode)}</span>`
    }

    protected _createStar(): TemplateResult {
        const number = Math.floor(this.rating);

        return html `
            ${ [...Array(this.totalStars)].map((_, index) => {
                return index < number ? this._displayStar('full')
                    : (index < this.rating) ? this._displayStar('half')
                    : this._displayStar('empty')
            })}
        `
    }

    override render(): TemplateResult {
        return html `
          ${ (this.rating)  ?
                html `
                  <a href="${this.link}" rel="${this.rel}" target="${this.target}">
                    <span class="logo">
                      <img src="${this.logoSrc}" alt="${this.logoAlt}" loading="lazy">
                    </span>
                    <span class="stars-wrapper">
                      <span class="stars">${ this._createStar() }</span>
                      <span class="total-users">${ this.totalUsers }</span>
                    </span>
                  </a>`
                : ''
            }
          `
    }
}