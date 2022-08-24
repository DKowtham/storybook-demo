import { LitElement, html, css, CSSResult, unsafeCSS, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { media_desktop } from '../../../assets/styles/constants-styles'
import { IForm, IFormSlide } from '../../../assets/interfaces/iForms'
import './ppn-form-slide-pdl'
import './ppn-radio'

@customElement('ppn-form-pdl')
export default class PpnFormPdlSlide extends LitElement {

    @property({ attribute: 'title-main' })
    titleMain = ''

    @property({ type: String })
    subtitle = ''

    // *** SLIDE ONE *** //
    @property({ type: String, attribute: 'slide-one-title' })
    slideOneTitle = ''

    // Situation Row
    @property({ type: String, attribute: 'slide-one-situation-label' })
    slideOneSituationLabel = ''

    @property({ type: String, attribute: 'slide-one-situation-input-move' })
    slideOneSituationInputMove = ''

    @property({ type: String, attribute: 'slide-one-situation-input-switch' })
    slideOneSituationInputSwitch = ''

    // Move Row
    @property({ type: String, attribute: 'slide-one-move-label' })
    slideOneMoveLabel = ''

    @property({ type: String, attribute: 'slide-one-move-input-confirm' })
    slideOneMoveInputConfirm = ''

    @property({ type: String, attribute: 'slide-one-move-input-negate' })
    slideOneMoveInputNegate = ''

    // Switch Row
    @property({ type: String, attribute: 'slide-one-switch-label' })
    slideOneSwitchLabel = ''

    @property({ type: String, attribute: 'slide-one-switch-input-own-name' })
    slideOneSwitchInputOwnName = ''

    @property({ type: String, attribute: 'slide-one-switch-input-other-name' })
    slideOneSwitchInputOtherName = ''


    static override styles: CSSResult = 
        css`
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
        `

    override render(): object {
        const data: IForm = this.generateDataObject()

        return html`
            ${ data.title ? html`<p class="title">${ data.title }</p>` : '' }
            ${ data.subtitle ? html`<p class="subtitle">${ data.subtitle }</p>` : '' }
            ${ data.slides.map((slide: IFormSlide, index: number): TemplateResult => { 
                return html`<ppn-form-slide-pdl .dataSlide=${slide} data-slide-${ index }></ppn-form-slide-pdl>` 
            })}
        `
    }

    /** Generate data object to build the components
     * @author                : PS
     * @created               : 2022-08-05 [ WPS-4886 ]
     */
    private generateDataObject() {
        const data: IForm = {
                title: this.titleMain,
                subtitle: this.subtitle,
                slides: [{
                    title: this.slideOneTitle,
                    inputs: [ 
                    {   // Situation row
                        type: "ppn-radio",
                        text: this.slideOneSituationLabel, 
                        nameGroup: "inputs-situation",
                        active: "true", 
                        values: [
                            {
                            text: this.slideOneSituationInputMove,
                            nameInput: "input-move",
                            icon: ""
                            },{
                            text: this.slideOneSituationInputSwitch,
                            nameInput: "input-switch",
                            icon: ""
                            }
                        ]
                    },
                    {   // Switch Row
                        type: "ppn-radio",
                        text: this.slideOneSwitchLabel, 
                        nameGroup: "inputs-switch",
                        active: "false", 
                        values: [
                            {
                            text: this.slideOneSwitchInputOwnName,
                            nameInput: "input-own-name",
                            icon: ""
                            },{
                            text: this.slideOneSwitchInputOtherName,
                            nameInput: "input-other-name",
                            icon: ""
                            }
                        ]
                    },
                    {   // Move Row
                        type: "ppn-radio",
                        text: this.slideOneMoveLabel, 
                        nameGroup: "inputs-move",
                        active: "false", 
                        values: [
                            {
                            text: this.slideOneMoveInputConfirm,
                            nameInput: "input-know-name",
                            icon: ""
                            },{
                            text: this.slideOneMoveInputNegate,
                            nameInput: "input-not-know-name",
                            icon: ""
                            }
                        ]
                    },
                ]
            }
        ]}

        return data; 
    }
}  
    