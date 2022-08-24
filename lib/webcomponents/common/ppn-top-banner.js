var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * <ppn-top-banner>
 * @author                : DK
 * @created               : 2022-08-11 [WPS-4883]
 * @attr img-background   : object of background picture: retina, desktop, tablet
 * @attr is-gmap          : param to activate google map
 * @attr api-key          : api key for google map
 * @attr latitude         : latitude param of the city
 * @attr longitude        : longitude param of the city
 */
let PpnTopBanner = class PpnTopBanner extends LitElement {
    constructor() {
        super(...arguments);
        this.imgBackground = [];
        this.apiKey = '';
        this.isGmap = false;
        this.latitude = 0;
        this.longitude = 0;
    }
    render() {
        return html `
            <section class="top-banner-wrapper">
                    ${this.imgBackground.length !== 0 ? html `
                      <div class="top-banner-background">
                          ${this.imgBackground.map((item) => {
            return html `
                                    <picture>
                                        <source media="(min-width: 1980px)" srcset="${item.retina}">
                                        <source media="(min-width: 1200px)" srcset="${item.desktop}">
                                        <source media="(min-width: 768px)" srcset="${item.tablet}">
                                        <img src="${item.tablet}" alt="">
                                    </picture>
                                  `;
        })}
                      </div>
                    ` : this.isGmap ? html `<div class="top-banner-gmap">
                        <iframe
                            loading="lazy"
                            allowfullscreen
                            referrerpolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed/v1/place?key=${this.apiKey}&zoom=14&q=${this.latitude},${this.longitude}">
                        </iframe>
                    </div>` : ``}
                <div class="content">
                    <slot name="puzzle-layout"></slot>
                </div>
            </section>
        `;
    }
};
PpnTopBanner.styles = [
    css `
            :host {
                position: relative;
            }

            img {
                display: none;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                max-width: 100%;
            }

            .top-banner-wrapper {
                position: relative;
                width: 100vw;
                left: 50%;
                margin-left: -50vw;
                margin-bottom: var(--sz-lg);
            }

            .top-banner-gmap iframe {
                width: 100%;
                border: 0;
            }

            @media (min-width: 768px){
                img {
                    display: block;
                }

                .content {
                    max-width: 740px;
                    margin: 0 auto;
                }

                .top-banner-background,
                .top-banner-gmap iframe{
                    position: relative;
                    height: 300px;
                }
            }

            @media (min-width: 768px) and (max-width: 1279px) {
                .content {
                    margin-top: -200px;
                    width: calc(100% - var(--sz-5xl));
                }
            }

            @media (min-width: 1280px) {
                .top-banner-wrapper {
                    height: 500px;
                }

                .top-banner-gmap iframe,
                .top-banner-background {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                }

                .content {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    width: 100%;
                    transform: translate(-50%, -50%);
                }
            }
        `
];
__decorate([
    property({ type: Array, attribute: 'img-background' })
], PpnTopBanner.prototype, "imgBackground", void 0);
__decorate([
    property({ type: String, attribute: 'api-key' })
], PpnTopBanner.prototype, "apiKey", void 0);
__decorate([
    property({ type: Boolean, attribute: 'is-gmap' })
], PpnTopBanner.prototype, "isGmap", void 0);
__decorate([
    property({ type: Number })
], PpnTopBanner.prototype, "latitude", void 0);
__decorate([
    property({ type: Number })
], PpnTopBanner.prototype, "longitude", void 0);
PpnTopBanner = __decorate([
    customElement('ppn-top-banner')
], PpnTopBanner);
export { PpnTopBanner };
//# sourceMappingURL=ppn-top-banner.js.map