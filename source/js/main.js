import {ieFix} from './utils/ie-fix';

import {initModals} from '../components/modal/init-modals';
import '../components/tabs/tabs';
import '../components/accordion/accordion';
import '../components/custom-select/custom-select';
import '../components/form-validate/init-form-validate';
import {initAutoResizeTextarea} from '../components/auto-resize-textarea/auto-resize-textarea';
import {initPhoneMask} from '../components/phone-mask/phone-mask';


// Utils
// ---------------------------------

ieFix();

// Modules
// ---------------------------------

initModals();
initAutoResizeTextarea();
initPhoneMask();
