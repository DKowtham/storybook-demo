import { html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { PpnFormSlide } from './ppn-form-slide'
import { IEvent } from '../../../assets/interfaces/iEvents'
import './ppn-radio'

/**
 * <ppn-form-slide-pdl>
 * Doc: -
 *  
 * @author              : PS
 * @created             : 2022-08-05 [ WPS-4886 ]
 */
@customElement('ppn-form-slide-pdl')
export default class PpnFormPdlSlide extends PpnFormSlide {

    override render(): object {
        return html`
            <div id="slide-0" @ppnRadioClick=${this._inputListener} class="slide">
                <p class="title">${ this.dataSlide.title }</p>
                ${ this.generateFormComponents() }
            </div>
        `
    }

    /** Listener for custom events from inputs
     * @author                : PS
     * @param  e {string}     : event
     * @created               : 2022-08-05 [ WPS-4886 ]
     */
    private _inputListener(e: IEvent) {
        const nameTarget: string = e.detail; 

        // Case event from first row: 
        if ( nameTarget === 'input-switch' || nameTarget === 'input-move' ) {
            const rowActive: HTMLElement | null = this.renderRoot.querySelector(nameTarget === 'input-switch' ? '#inputs-switch' : '#inputs-move')
            const rowHidden: HTMLElement | null = this.renderRoot.querySelector(nameTarget === 'input-switch' ? '#inputs-move' : '#inputs-switch')

            if ( rowActive === null || rowHidden === null ) return; 
            // Display active row and trigger animation, and hide row not active
            rowActive.classList.add("slide-row--display")
            setTimeout( () => rowActive.classList.add('slide-row--reveal'), 100);
            rowHidden.classList.remove('slide-row--display', 'slide-row--reveal')
        }
    }
}  