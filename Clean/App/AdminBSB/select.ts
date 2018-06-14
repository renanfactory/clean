import * as $ from 'jquery';

/* Form - Select - Function ================================================================================================
*  You can manage the 'select' of form elements
*  
*/

export class SelectClass {
    public Activate() {
        if ($.fn.selectpicker) {
            $('select:not(.ms)').selectpicker();
        }
    }
}
