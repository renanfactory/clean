import * as $ from 'jquery';

/* Page Loader Wrapper - Function =======================================================================================================
*  
*/
export class PageLoaderClass {
    public Activate() {
        setTimeout(function () {
            $('.page-loader-wrapper').fadeOut();
        }, 50);
    }
}