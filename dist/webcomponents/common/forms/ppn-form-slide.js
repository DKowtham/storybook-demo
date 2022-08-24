var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../../../../lib/webcomponents/common/forms/ppn-radio';
import './ppn-radio';
/**
 * <ppn-form-slide>
 * Doc: -
 *
 * @author              : PS
 * @created             : 2022-08-05 [ WPS-4886 ]
 * @prop dataSlide      : corresponding data object for the slide
 */
let PpnFormSlide = class PpnFormSlide extends LitElement {
    constructor() {
        super(...arguments);
        this.dataSlide = {
            title: '',
            inputs: []
        };
    }
    /** Generate inputs from data
     * @author                : PS
     * @created               : 2022-08-05 [ WPS-4886 ]
     */
    generateFormComponents() {
        const templates = [];
        for (const input of this.dataSlide.inputs) {
            // Here we add the all the input rows depending on the type:
            switch (input.type) {
                case "ppn-radio": {
                    templates.push(html `
                        <div 
                            class = "slide-row ${input.active === 'true' ? 'slide-row--display slide-row--reveal' : ''}" 
                            id="${input.nameGroup}"
                            ><ppn-radio .dataRow=${input}></ppn-radio>
                        </div>
                    `);
                }
            }
        }
        return templates.length > 0 ? templates : html ``;
    }
};
PpnFormSlide.styles = css `           
                .slide {
                    box-sizing: border-box;
                    width: var(--width-slide);
                    margin: 0 auto;
                    padding: var(--pd-lg);
                    margin-bottom: 0 auto var(--mg-lg) auto;
                    border-radius: var(--br-lg);
                    box-shadow: var(--bs-scale-base) var(--c-primary-lighter);
                    background: var(--c-white);
                }

                .slide-hidden {
                    display: none;
                }

                .slide > *:last-child {
                    margin-bottom: 0;
                }

                .slide-row {
                    display: none;
                    opacity: 0; 
                    transform: translateY(var(--sz-2xs)); 
                    transition: opacity var(--tr-base), transform var(--tr-base);
                }

                .slide-row--display {
                    display: block; 
                }

                .slide-row--reveal {
                    opacity: 1;
                    transform: translateY(0);
                }

                .title {
                    margin-bottom: var(--mg-lg);
                    padding-bottom: var(--pd-xs);
                    border-bottom: 1px solid var(--c-grey-inactive);
                    text-align: left;
                    font-size: var(--fs-lg);
                    font-weight: var(--fw-bold);
                }
            `;
__decorate([
    property({ attribute: false })
], PpnFormSlide.prototype, "dataSlide", void 0);
PpnFormSlide = __decorate([
    customElement('ppn-form-slide')
], PpnFormSlide);
export { PpnFormSlide };
//# sourceMappingURL=ppn-form-slide.js.map