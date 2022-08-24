var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../../../lib/webcomponents/common/ppn-cta';
/**
 * <ppn-wcb-form>
 * Doc: TODO
 *
 * @author                : DK
 * @created               : 2022-08-04 [WPS-4880]
 * @attr form-action      : form action
 * @attr input-label      : input label
 * @attr cta-app-text     : cta app text
 * @attr cta-call-text    : cta call text
 */
let PpnWcbForm = class PpnWcbForm extends LitElement {
    constructor() {
        super(...arguments);
        this.formAction = '';
        this.inputLabel = '';
        this.ctaAppText = '';
        this.ctaCallText = '';
    }
    render() {
        return html `
          <form action="">
              <input type="text">
              <ppn-cta
                    call-text=${this.ctaCallText}
                    cta-call-icon="phone"
                    cta-app-icon="phone"
                ></ppn-cta>
          </form>
        `;
    }
};
PpnWcbForm.styles = [
    css `
    :host {}

    input {
        margin-bottom: var(--sz-sm);
    }
  `
];
__decorate([
    property({ type: String, attribute: 'form-action' })
], PpnWcbForm.prototype, "formAction", void 0);
__decorate([
    property({ type: String, attribute: 'input-label' })
], PpnWcbForm.prototype, "inputLabel", void 0);
__decorate([
    property({ type: String, attribute: 'cta-app-text' })
], PpnWcbForm.prototype, "ctaAppText", void 0);
__decorate([
    property({ type: String, attribute: 'cta-call-text' })
], PpnWcbForm.prototype, "ctaCallText", void 0);
PpnWcbForm = __decorate([
    customElement('ppn-wcb-form')
], PpnWcbForm);
export { PpnWcbForm };
//# sourceMappingURL=ppn-wcb-form.js.map