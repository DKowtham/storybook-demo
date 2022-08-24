import { LitElement, html, TemplateResult, css, CSSResult, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { getSvgFromSprite } from '../../../assets/functions/utils'
import { media_desktop } from '../../../assets/styles/constants-styles'
import { IFormInputs } from '../../../assets/interfaces/iForms'
import { IEvent } from '../../../assets/interfaces/iEvents'

/**
 * <ppn-radio>
 * Doc: -
 *  
 * @author              : PS
 * @created             : 2022-08-05 [ WPS-4886 ]
 * @prop dataRow        : corresponding data object for inputs row
 */
@customElement('ppn-radio')
export default class PpnRadio extends LitElement {

    @property({type: Object})
    dataRow: IFormInputs = {
        type: '', 
        text: '', 
        nameGroup: '', 
        active: '', 
        values: []
    }

    static override styles: CSSResult = 
            css`
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

    override render(): object {
        return html`
            ${ this.dataRow.text !== '' ? html`<p class="ppn-input-side-text">${ this.dataRow.text }</p>` : '' }
            ${ this.dataRow.values.map((input, index) => 
                this.generateRadio(input['text'], input['nameInput'] || `input-${index}`,this.dataRow.nameGroup, input['icon'] )
            )}
        `
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
    generateRadio(text: string, nameInput: string, nameGroup: string, iconName: string): TemplateResult {
        return html`
            <input id=${ nameInput }
                type="radio"
                class="ppn-input-radio"
                name=${ nameGroup }
                .checked=${ false }
                @click=${ this._dispatchClick }
                value=${ nameInput }
            ></input>
            <label for=${nameInput} class="ppn-input-radio-label">
                ${ getSvgFromSprite(iconName) }
                ${ text }
            </label>
        `
    }

    /** Dispatches event on click so we can pass it to other components
     * @author                : PS
     * @created               : 2022-08-05 [ WPS-4886 ]
     */
    private _dispatchClick(e: Event): void {
        const el_target: HTMLInputElement | null = e.target as HTMLInputElement; 
        if ( el_target === null ) return

        const options: IEvent = {
            detail: el_target.value,
            bubbles: true,
            composed: true
        }

        this.dispatchEvent(new CustomEvent('ppnRadioClick', options));
    }
}  