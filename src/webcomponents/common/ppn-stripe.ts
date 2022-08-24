import {LitElement, html, TemplateResult, CSSResult, css} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {getSvgFromSprite} from "../../assets/functions/utils";

/**
 * <ppn-stripe>
 * Doc: TODO
 *
 * @author                : DK
 * @created               : 2022-08-01 [WPS-4882]
 * @attr icons            : object containing stripe icons items
 */

@customElement('ppn-stripe')
export class PpnStripe extends LitElement {

  @property({type: Array})
  icons: {title: string, image: string}[] = [{
    title: '',
    image: ''
  }]

  static override styles: CSSResult[] = [
    css`
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
  `];

  override render(): TemplateResult {
    return html`
      <div class="icons-wrapper">
        ${this.icons.map(icon => {
          return html `
              <div class="icon-wrapper">
                <span class="icon">${getSvgFromSprite(icon.image)}</span>
                <strong>${icon.title}</strong>
              </div>
          `
        })}
      </div>
      <slot name="trustpilot"></slot>
    `
  }
}