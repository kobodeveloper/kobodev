 var api = 'da9029ea8470fee'
  $('#id').on('change', function () {
   var id = $(this).val();
   $.ajax({
    method: "GET",
    url: "https://api-rekening.my.id/trueid/game/" + game + "/?id=" + id + "&key=" + api,
    beforeSend: function () {
     $('#cek').val('Sedang Mengecek ID Player');
    },
    success: function (response) {
     if (response.hasOwnProperty('error_msg')) {
      $('#cek').val(response.error_msg);
      $('#nick').text('Tidak Ditemukan');
     } else {
      $('#cek').val(response.nickname);
      $('#nick').text(response.nickname);
      $('#linkBeli').show();
      $('#spaces').show();
     }
    }
   });
  });
