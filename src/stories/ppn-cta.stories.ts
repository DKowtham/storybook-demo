import { html } from 'lit'

import '../webcomponents/common/ppn-cta'
import '../../dev/assets/css/design-system/variables.css'
import '../../dev/assets/css/design-system/colors.css'
import '../../dev/assets/css/generic/generic.css'

export default {
    title: "acq-components/ppn-cta"
}

export const Primary = () => html`<ppn-cta call-text="Hello" app-text="World"></ppn-cta>`