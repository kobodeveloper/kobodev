 var api = '43558dcd949149bf18fa65178af2654e'
    $('#id').on('change', function () {
      var id = $(this).val()
      $.ajax({
        method: "POST",
        url: "https://api-otomatis.my.id/trueid/bill/token/",
        data: {
          id: id,
          key: api
        },
        beforeSend: function () {
          $('#cek').val('Sedang Mengecek Nama Pelanggan');
          $('#linkBeli').hide();
          $('#space').hide();
        },
        success: function (response) {
          if (response.hasOwnProperty('error_msg')) {
            $('#cek').val(response.error_msg);
            $('#nick').text(response.error_msg);
            $('#linkBeli').hide();
            $('#space').hide();
          } else {
            $('#cek').val(response.nama);
            $('#nick').text(response.nama);
            $('#daya').text(response.daya);
            $('#linkBeli').show();
            $('#space').show();
          }
        }
      })
    })
