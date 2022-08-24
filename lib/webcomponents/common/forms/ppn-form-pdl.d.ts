import { LitElement, CSSResult } from 'lit';
import './ppn-form-slide-pdl';
import './ppn-radio';
export default class PpnFormPdlSlide extends LitElement {
    titleMain: string;
    subtitle: string;
    slideOneTitle: string;
    slideOneSituationLabel: string;
    slideOneSituationInputMove: string;
    slideOneSituationInputSwitch: string;
    slideOneMoveLabel: string;
    slideOneMoveInputConfirm: string;
    slideOneMoveInputNegate: string;
    slideOneSwitchLabel: string;
    slideOneSwitchInputOwnName: string;
    slideOneSwitchInputOtherName: string;
    static styles: CSSResult;
    render(): object;
    /** Generate data object to build the components
     * @author                : PS
     * @created               : 2022-08-05 [ WPS-4886 ]
     */
    private generateDataObject;
}
//# sourceMappingURL=ppn-form-pdl.d.ts.map