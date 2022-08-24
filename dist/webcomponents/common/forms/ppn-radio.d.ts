import { LitElement, TemplateResult, CSSResult } from 'lit';
import { IFormInputs } from '../../../assets/interfaces/iForms';
/**
 * <ppn-radio>
 * Doc: -
 *
 * @author              : PS
 * @created             : 2022-08-05 [ WPS-4886 ]
 * @prop dataRow        : corresponding data object for inputs row
 */
export default class PpnRadio extends LitElement {
    dataRow: IFormInputs;
    static styles: CSSResult;
    render(): object;
    /** Change the status & value of the radio button on click
     * @author                    : PS
     * @param  text {string}      : the displayed text
     * @param  nameGroup {string} : name for the group of inputs
     * @param  nameInput {string} : name of the input
     * @param  iconName {string}  : name of the icon
     * @return  TemplateResult    : the html of the input
     * @created                   : 2022-08-05 [ WPS-4886 ]
     */
    generateRadio(text: string, nameInput: string, nameGroup: string, iconName: string): TemplateResult;
    /** Dispatches event on click so we can pass it to other components
     * @author                : PS
     * @created               : 2022-08-05 [ WPS-4886 ]
     */
    private _dispatchClick;
}
//# sourceMappingURL=ppn-radio.d.ts.map