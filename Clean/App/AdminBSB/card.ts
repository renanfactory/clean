import * as $ from 'jquery';

import { Colors } from "./options";

export class CardClass {

    public Activate() {
        this.initializeBasic();
        this.initializeColored();
    }

    private initializeBasic() {
        $('[data-toggle="cardloading"]').on('click', function () {
            var effect = $(this).data('loadingEffect');
            var $loading = $(this).parents('.card').waitMe({
                effect: effect,
                text: 'Loading...',
                bg: 'rgba(255,255,255,0.90)',
                color: '#555'
            });
            setTimeout(function () {
                $loading.waitMe('hide');
            }, 3200);
        });
    }

    private initializeColored() {
        $('[data-toggle="cardloading"]').on('click', function () {
            var effect = $(this).data('loadingEffect');
            var color = Colors[$(this).data('loadingColor')];

            var $loading = $(this).parents('.card').waitMe({
                effect: effect,
                text: 'Loading...',
                bg: 'rgba(255,255,255,0.90)',
                color: color
            });

            setTimeout(function () {
                //Loading hide
                $loading.waitMe('hide');
            }, 3200);
        });
    }

}