var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getSvgFromSprite } from '../../../assets/functions/utils';
import { media_desktop } from '../../../assets/styles/constants-styles';
/**
 * <ppn-radio>
 * Doc: -
 *
 * @author              : PS
 * @created             : 2022-08-05 [ WPS-4886 ]
 * @prop dataRow        : corresponding data object for inputs row
 */
let PpnRadio = class PpnRadio extends LitElement {
    constructor() {
        super(...arguments);
        this.dataRow = {
            type: '',
            text: '',
            nameGroup: '',
            active: '',
            values: []
        };
    }
    render() {
        return html `
            ${this.dataRow.text !== '' ? html `<p class="ppn-input-side-text">${this.dataRow.text}</p>` : ''}
            ${this.dataRow.values.map((input, index) => this.generateRadio(input['text'], input['nameInput'] || `input-${index}`, this.dataRow.nameGroup, input['icon']))}
        `;
    }
    /** Change the status & value of the radio button on click
     * @author                    : PS
     * @param  text {string}      : the displayed text
     * @param  nameGroup {string} : name for the group of inputs
     * @param  nameInput {string} : name of the input
     * @param  iconName {string}  : name of the icon
     * @return  TemplateResult    : the html of the input
     * @created                   : 2022-08-05 [ WPS-4886 ]
     */
    generateRadio(text, nameInput, nameGroup, iconName) {
        return html `
            <input id=${nameInput}
                type="radio"
                class="ppn-input-radio"
                name=${nameGroup}
                .checked=${false}
                @click=${this._dispatchClick}
                value=${nameInput}
            ></input>
            <label for=${nameInput} class="ppn-input-radio-label">
                ${getSvgFromSprite(iconName)}
                ${text}
            </label>
        `;
    }
    /** Dispatches event on click so we can pass it to other components
     * @author                : PS
     * @created               : 2022-08-05 [ WPS-4886 ]
     */
    _dispatchClick(e) {
        const el_target = e.target;
        if (el_target === null)
            return;
        const options = {
            detail: el_target.value,
            bubbles: true,
            composed: true
        };
        this.dispatchEvent(new CustomEvent('ppnRadioClick', options));
    }
};
PpnRadio.styles = css `
                :host([active="false"]) {
                    display: none;
                }

                :host {
                    margin-bottom: var(--mg-md);
                }

                .ppn-input-side-text {
                    margin: auto var(--mg-lg) auto 0;
                    flex-grow: initial;
                    place-self: baseline;
                    flex-shrink: 0;
                }
        
                .ppn-input-radio-label {
                    cursor: pointer; 
                    display: flex; 
                    align-items: center;
                    justify-content: center;
                    width: 100%; 
                    height: var(--sz-2xl); 
                    border-radius: var(--br-pn); 
                    border: 1px solid var(--c-grey-icon);  
                    line-height: var(--fs-base); 
                    transition: border-color var(--tr-base), color var(--tr-base); 
                }

                .ppn-input-radio-label:not(:last-child) {
                    margin-right: var(--mg-lg);
                }

                .ppn-input-radio-label:hover {
                    border-color: var(--c-grey);
                }
        
                svg {
                    height: var(--sz-sm);
                    width: var(--sz-sm);
                    margin-right: var(--mg-xs);
                    fill: currentColor;
                }
        
                .ppn-input-radio {
                    display: none; 
                }
        
                .ppn-input-radio:checked + .ppn-input-radio-label {
                    border-color: var(--c-primary); 
                    color: var(--c-primary);
                    font-weight: var(--fw-medium);
                }

                .ppn-input-radio:checked:hover + .ppn-input-radio-label:hover {
                    border-color: var(--c-primary-dark); 
                }      
                
                @media ${unsafeCSS(media_desktop)} {
                    :host {
                        display: flex;
                        flex-flow: row nowrap;
                    }

                    .ppn-input-side-text {
                        width: 250px;
                    }
                }
            `;
__decorate([
    property({ type: Object })
], PpnRadio.prototype, "dataRow", void 0);
PpnRadio = __decorate([
    customElement('ppn-radio')
], PpnRadio);
export default PpnRadio;
//# sourceMappingURL=ppn-radio.js.map