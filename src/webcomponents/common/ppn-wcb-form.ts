import {LitElement, html, TemplateResult, CSSResult, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import '../../../lib/webcomponents/common/ppn-cta'

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

@customElement('ppn-wcb-form')
export class PpnWcbForm extends LitElement {
    @property({type: String, attribute: 'form-action'})
    formAction = ''

    @property ({type: String, attribute: 'input-label' })
    inputLabel = ''

    @property ({ type: String, attribute: 'cta-app-text' })
    ctaAppText = ''

    @property({type: String, attribute: 'cta-call-text'})
    ctaCallText = ''

    static override styles: CSSResult[] = [
        css`
    :host {}

    input {
        margin-bottom: var(--sz-sm);
    }
  `];

    override render(): TemplateResult {
        return html`
          <form action="">
              <input type="text">
              <ppn-cta
                    call-text=${ this.ctaCallText }
                    cta-call-icon="phone"
                    cta-app-icon="phone"
                ></ppn-cta>
          </form>
        `
    }
}