var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
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
let PpnCallout = class PpnCallout extends LitElement {
    constructor() {
        super(...arguments);
        this.title = '';
        this.list = [];
    }
    render() {
        return html `
            <div class="container">
                ${this.title !== ""
            ? html `<p class="title">${this.title}</p>`
            : html ``}
                <slot></slot>
                ${this.list.length > 0
            ? html `<ul>${this.list.map(item => { return html `<li>${item}</li>`; })}</ul>`
            : ``}
            </div>
        `;
    }
};
PpnCallout.styles = css `

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
__decorate([
    property({ type: String })
], PpnCallout.prototype, "title", void 0);
__decorate([
    property({ type: Array })
], PpnCallout.prototype, "list", void 0);
PpnCallout = __decorate([
    customElement('ppn-callout')
], PpnCallout);
export default PpnCallout;
//# sourceMappingURL=ppn-callout.js.map