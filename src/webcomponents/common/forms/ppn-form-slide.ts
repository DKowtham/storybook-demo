import { LitElement, html, TemplateResult, css, CSSResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { IFormSlide } from '../../../assets/interfaces/iForms'
import '../../../../lib/webcomponents/common/forms/ppn-radio'
import './ppn-radio'

/**
 * <ppn-form-slide>
 * Doc: -
 *  
 * @author              : PS
 * @created             : 2022-08-05 [ WPS-4886 ]
 * @prop dataSlide      : corresponding data object for the slide
 */
@customElement('ppn-form-slide')
export class PpnFormSlide extends LitElement {

    @property({ attribute: false })
    dataSlide: IFormSlide = {
        title: '',
        inputs: []
    }

    static override styles: CSSResult = 
            css`           
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


    /** Generate inputs from data 
     * @author                : PS
     * @created               : 2022-08-05 [ WPS-4886 ]
     */
    generateFormComponents(): TemplateResult[] | TemplateResult {
        const templates: TemplateResult[] = []

        for (const input of this.dataSlide.inputs) {
            
            // Here we add the all the input rows depending on the type:
            switch(input.type) {
                
                case "ppn-radio": {
                    templates.push( html`
                        <div 
                            class = "slide-row ${ input.active === 'true' ? 'slide-row--display slide-row--reveal' : '' }" 
                            id="${input.nameGroup}"
                            ><ppn-radio .dataRow=${input}></ppn-radio>
                        </div>
                    `)
                }
            }
        }

        return templates.length > 0 ? templates : html``
    }
}  