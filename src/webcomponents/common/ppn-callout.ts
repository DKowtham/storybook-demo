import { LitElement, html, TemplateResult, CSSResult, css } from 'lit'
import { customElement, property } from 'lit/decorators.js';

/**
 * <ppn-callout>
 * Doc: https://www.notion.so/papernest/ppn-callout-72a9196c015f4ed78e13097bb4c50866
 *  
 * @author              : PS
 * @created             : 2022-05-22 [WPS-4772]
 * @attr title          : The title of the callout
 * @attr list           : an array of items in form of string
 * @slot                : This element uses a slot as text content
 */
@customElement('ppn-callout')
export default class PpnCallout extends LitElement {

    @property({type: String})
    override title = '';

    @property({type: Array})
    list: string[] = [];
    
    static override styles: CSSResult = css`

        :host {
            display: block;
            padding: var(--pd-block); 
            margin: var(--mg-between-sm) 0;
        }

        :host([type="info"]) {
            --color-callout-type: var(--c-primary);
        }

        :host([type="danger"]) {
            --color-callout-type: var(--c-red);
        }

        :host([type="success"]) {
            --color-callout-type: var(--c-secondary);
        }

        .container {
            box-sizing: border-box;
            width: 100%; 
            padding: var(--pd-lg);
            border-radius: var(--br-sm);
            border-left: solid var(--sz-2xs) var(--color-callout-type);
            background-color: var(--c-bg-main);
        }

        .container:last-child {
            margin-bottom: 0;
        }

        .title {
            font-weight: var(--fw-medium); 
            color: var(--color-callout-type);
            margin: 0 0 var(--mg-xs) 0;
        }

        @media (min-width:768px) {
            .container {
                padding: var(--pd-lg) var(--pd-2xl);
            }
        }

        ul {
            list-style: none;
            padding: 0; 
        }

        li {
            position: relative;
            padding-left: var(--pd-md);
        }

        li:before {
            content: "";
            position: absolute;
            width: 8px;
            height: 8px;
            border-radius: var(--br-circle);
            left: 0;
            top: 50%;
            background-color: var(--color-callout-type);
            transform: translateY(-50%);
        }
    `;

    override render(): TemplateResult {

        return html`
            <div class="container">
                ${this.title !== "" 
                    ? html`<p class="title">${this.title}</p>` 
                    : html``
                }
                <slot></slot>
                ${this.list.length > 0 
                    ? html`<ul>${this.list.map(item => { return html`<li>${item}</li>` })}</ul>`
                    : ``
                }
            </div>
        `
    }
}
