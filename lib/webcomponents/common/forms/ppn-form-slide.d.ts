import { LitElement, TemplateResult, CSSResult } from 'lit';
import { IFormSlide } from '../../../assets/interfaces/iForms';
import '../../../../lib/webcomponents/common/forms/ppn-radio';
import './ppn-radio';
/**
 * <ppn-form-slide>
 * Doc: -
 *
 * @author              : PS
 * @created             : 2022-08-05 [ WPS-4886 ]
 * @prop dataSlide      : corresponding data object for the slide
 */
export declare class PpnFormSlide extends LitElement {
    dataSlide: IFormSlide;
    static styles: CSSResult;
    /** Generate inputs from data
     * @author                : PS
     * @created               : 2022-08-05 [ WPS-4886 ]
     */
    generateFormComponents(): TemplateResult[] | TemplateResult;
}
//# sourceMappingURL=ppn-form-slide.d.ts.map