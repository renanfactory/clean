import { SwalOptions } from 'sweetalert/typings/modules/options';

export type SwalParams = (string | Partial<SwalOptions>)[];

import * as $ from 'jquery';

import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;


export class AdminSearchPage {

  constructor() {

  }

  public Activate() {

    $("#myModal").on("show.bs.modal", function (e) {
      var link = $(e.relatedTarget);
      $(this).find(".modal-body").load(link.attr("href"));

      $(".savechanges").unbind('click');
      $(".savechanges").bind('click', function () {

        // var $frm = $('.modal-body').find('form')[0];
        
        var frm = $('#editUsuarioForm');
        
          debugger;
          e.preventDefault();
  
          $.ajax({
              type: frm.attr('method'),
              url: frm.attr('action'),
              data: frm.serialize(),
              success: function (data) {
                  console.log('Submission was successful.');
                  console.log(data);
              },
              error: function (data) {
                  console.log('An error occurred.');
                  console.log(data);
              },
          });

      });
    });

    $("tr").find(".recoveryPassword").on("click", element => {
      element.preventDefault();

      swal("Você tem certeza que deseja resetar a senha deste usuario? </br> O usuario irá receber um e-mail com a nova senha.", {
        icon: "warning",
        text: "Você tem certeza que deseja resetar a senha deste usuario? </br> O usuario irá receber um e-mail com a nova senha.",
        title: "Você tem certeza?",
        dangerMode: true,
        buttons: ["Oh noez!", true],
      })
        .then((willDelete) => {
          if (willDelete) {
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Your imaginary file is safe!");
          }
        });

    });


  }
}