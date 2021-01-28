// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// })

let b= 0
function showWhatsApp() {
    b++
    (b % 2 != 0) ? $('#whatsApp_account_modal').modal('show') : $('#whatsApp_account_modal').modal('hide');
}
