// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').trigger('focus')
// })

let b= 0
function showDonate() {
    b++
    (b % 2 != 0) ? $('#donate_modal').modal('show') : $('#donate_modal').modal('hide');
}
