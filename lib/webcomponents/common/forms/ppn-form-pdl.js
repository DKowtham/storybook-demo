var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { media_desktop } from '../../../assets/styles/constants-styles';
import './ppn-form-slide-pdl';
import './ppn-radio';
let PpnFormPdlSlide = class PpnFormPdlSlide extends LitElement {
    constructor() {
        super(...arguments);
        this.titleMain = '';
        this.subtitle = '';
        // *** SLIDE ONE *** //
        this.slideOneTitle = '';
        // Situation Row
        this.slideOneSituationLabel = '';
        this.slideOneSituationInputMove = '';
        this.slideOneSituationInputSwitch = '';
        // Move Row
        this.slideOneMoveLabel = '';
        this.slideOneMoveInputConfirm = '';
        this.slideOneMoveInputNegate = '';
        // Switch Row
        this.slideOneSwitchLabel = '';
        this.slideOneSwitchInputOwnName = '';
        this.slideOneSwitchInputOtherName = '';
    }
    render() {
        const data = this.generateDataObject();
        return html `
            ${data.title ? html `<p class="title">${data.title}</p>` : ''}
            ${data.subtitle ? html `<p class="subtitle">${data.subtitle}</p>` : ''}
            ${data.slides.map((slide, index) => {
            return html `<ppn-form-slide-pdl .dataSlide=${slide} data-slide-${index}></ppn-form-slide-pdl>`;
        })}
        `;
    }
    /** Generate data object to build the components
     * @author                : PS
     * @created               : 2022-08-05 [ WPS-4886 ]
     */
    generateDataObject() {
        const data = {
            title: this.titleMain,
            subtitle: this.subtitle,
            slides: [{
                    title: this.slideOneTitle,
                    inputs: [
                        {
                            type: "ppn-radio",
                            text: this.slideOneSituationLabel,
                            nameGroup: "inputs-situation",
                            active: "true",
                            values: [
                                {
                                    text: this.slideOneSituationInputMove,
                                    nameInput: "input-move",
                                    icon: ""
                                }, {
                                    text: this.slideOneSituationInputSwitch,
                                    nameInput: "input-switch",
                                    icon: ""
                                }
                            ]
                        },
                        {
                            type: "ppn-radio",
                            text: this.slideOneSwitchLabel,
                            nameGroup: "inputs-switch",
                            active: "false",
                            values: [
                                {
                                    text: this.slideOneSwitchInputOwnName,
                                    nameInput: "input-own-name",
                                    icon: ""
                                }, {
                                    text: this.slideOneSwitchInputOtherName,
                                    nameInput: "input-other-name",
                                    icon: ""
                                }
                            ]
                        },
                        {
                            type: "ppn-radio",
                            text: this.slideOneMoveLabel,
                            nameGroup: "inputs-move",
                            active: "false",
                            values: [
                                {
                                    text: this.slideOneMoveInputConfirm,
                                    nameInput: "input-know-name",
                                    icon: ""
                                }, {
                                    text: this.slideOneMoveInputNegate,
                                    nameInput: "input-not-know-name",
                                    icon: ""
                                }
                            ]
                        },
                    ]
                }
            ]
        };
        return data;
    }
};
PpnFormPdlSlide.styles = css `
            :host {
                --width-slide: 100%;
            }

            .title {
                font-size: var(--fs-xl);
            }

            .title,
            .subtitle {
                font-weight: var(--fw-bold);
                text-align: center;
            }

            @media ${unsafeCSS(media_desktop)} {
                :host {
                    --width-slide: 950px;
                }
            }  
        `;
__decorate([
    property({ attribute: 'title-main' })
], PpnFormPdlSlide.prototype, "titleMain", void 0);
__decorate([
    property({ type: String })
], PpnFormPdlSlide.prototype, "subtitle", void 0);
__decorate([
    property({ type: String, attribute: 'slide-one-title' })
], PpnFormPdlSlide.prototype, "slideOneTitle", void 0);
__decorate([
    property({ type: String, attribute: 'slide-one-situation-label' })
], PpnFormPdlSlide.prototype, "slideOneSituationLabel", void 0);
__decorate([
    property({ type: String, attribute: 'slide-one-situation-input-move' })
], PpnFormPdlSlide.prototype, "slideOneSituationInputMove", void 0);
__decorate([
    property({ type: String, attribute: 'slide-one-situation-input-switch' })
], PpnFormPdlSlide.prototype, "slideOneSituationInputSwitch", void 0);
__decorate([
    property({ type: String, attribute: 'slide-one-move-label' })
], PpnFormPdlSlide.prototype, "slideOneMoveLabel", void 0);
__decorate([
    property({ type: String, attribute: 'slide-one-move-input-confirm' })
], PpnFormPdlSlide.prototype, "slideOneMoveInputConfirm", void 0);
__decorate([
    property({ type: String, attribute: 'slide-one-move-input-negate' })
], PpnFormPdlSlide.prototype, "slideOneMoveInputNegate", void 0);
__decorate([
    property({ type: String, attribute: 'slide-one-switch-label' })
], PpnFormPdlSlide.prototype, "slideOneSwitchLabel", void 0);
__decorate([
    property({ type: String, attribute: 'slide-one-switch-input-own-name' })
], PpnFormPdlSlide.prototype, "slideOneSwitchInputOwnName", void 0);
__decorate([
    property({ type: String, attribute: 'slide-one-switch-input-other-name' })
], PpnFormPdlSlide.prototype, "slideOneSwitchInputOtherName", void 0);
PpnFormPdlSlide = __decorate([
    customElement('ppn-form-pdl')
], PpnFormPdlSlide);
export default PpnFormPdlSlide;
//# sourceMappingURL=ppn-form-pdl.js.map