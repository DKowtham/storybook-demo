var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PpnFormSlide } from './ppn-form-slide';
import './ppn-radio';
/**
 * <ppn-form-slide-pdl>
 * Doc: -
 *
 * @author              : PS
 * @created             : 2022-08-05 [ WPS-4886 ]
 */
let PpnFormPdlSlide = class PpnFormPdlSlide extends PpnFormSlide {
    render() {
        return html `
            <div id="slide-0" @ppnRadioClick=${this._inputListener} class="slide">
                <p class="title">${this.dataSlide.title}</p>
                ${this.generateFormComponents()}
            </div>
        `;
    }
    /** Listener for custom events from inputs
     * @author                : PS
     * @param  e {string}     : event
     * @created               : 2022-08-05 [ WPS-4886 ]
     */
    _inputListener(e) {
        const nameTarget = e.detail;
        // Case event from first row: 
        if (nameTarget === 'input-switch' || nameTarget === 'input-move') {
            const rowActive = this.renderRoot.querySelector(nameTarget === 'input-switch' ? '#inputs-switch' : '#inputs-move');
            const rowHidden = this.renderRoot.querySelector(nameTarget === 'input-switch' ? '#inputs-move' : '#inputs-switch');
            if (rowActive === null || rowHidden === null)
                return;
            // Display active row and trigger animation, and hide row not active
            rowActive.classList.add("slide-row--display");
            setTimeout(() => rowActive.classList.add('slide-row--reveal'), 100);
            rowHidden.classList.remove('slide-row--display', 'slide-row--reveal');
        }
    }
};
PpnFormPdlSlide = __decorate([
    customElement('ppn-form-slide-pdl')
], PpnFormPdlSlide);
export default PpnFormPdlSlide;
//# sourceMappingURL=ppn-form-slide-pdl.js.map