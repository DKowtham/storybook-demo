var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getSvgFromSprite } from "../../assets/functions/utils";
/**
 * <ppn-stripe>
 * Doc: TODO
 *
 * @author                : DK
 * @created               : 2022-08-01 [WPS-4882]
 * @attr icons            : object containing stripe icons items
 */
let PpnStripe = class PpnStripe extends LitElement {
    constructor() {
        super(...arguments);
        this.icons = [{
                title: '',
                image: ''
            }];
    }
    render() {
        return html `
      <div class="icons-wrapper">
        ${this.icons.map(icon => {
            return html `
              <div class="icon-wrapper">
                <span class="icon">${getSvgFromSprite(icon.image)}</span>
                <strong>${icon.title}</strong>
              </div>
          `;
        })}
      </div>
      <slot name="trustpilot"></slot>
    `;
    }
};
PpnStripe.styles = [
    css `
    :host {
      display: flex;
      flex-direction: column-reverse;
      background-color: var(--c-grey-main-secondary);
      margin-top: var(--sz-md);
    }

    strong {
      font-weight: var(--fw-regular);
    }

    .icons-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: var(--sz-sm) 0;
      width: 100%;
      padding-left: var(--sz-xl);
    }

    .icon-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      height: var(--sz-3xl);
      margin-right: var(--sz-sm);
      font-size: var(--fs-sm);
      color: var(--c-primary);
    }

    .icon {
      margin-right: var(--sz-xs);
    }

    svg {
      width: var(--sz-xl);
      height: var(--sz-xl);
    }

    @media (min-width: 768px) {
      :host {
        flex-direction: row;
        align-items: center;
      }

      .icons-wrapper {
        flex-direction: row;
        width: 75%;
        padding-top: 0;
      }
    }
  `
];
__decorate([
    property({ type: Array })
], PpnStripe.prototype, "icons", void 0);
PpnStripe = __decorate([
    customElement('ppn-stripe')
], PpnStripe);
export { PpnStripe };
//# sourceMappingURL=ppn-stripe.js.map