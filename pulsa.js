      function getContact() {
        window.location.href = linkOlshop + "/ambil_kontak"
      }
      $('#nohp').on('input', function () {
        $('#nohp').change()
      })
      var nohp = []
      $('#nohp').on('change', function () {
        var no = $(this).val()
        newno = no.replace('-', '').trim()
        var cek = newno.substring(0, 3).replace('-', '').trim()
        var ceka = newno.substring(3, 16).replace('-', '').trim()
        if (cek == '+62') {
          let result = 0
          $(this).val(result + ceka)
          getNmr(result + ceka)
        } else {
          $(this).val(cek + ceka)
          getNmr(cek + ceka)
        }
      });
      function getNmr(val) {
        var id = val.substring(0, 4)
        if (id.length > 3 && nohp[0] != id) {
          nohp[0] = id
          cekNmr(nohp[0])
        } else {
        }
      }

      function cekNmr(id) {
        $('#display').removeClass('d-none');
        var reg = '';
        var tf = '';
        var masaaktif = '';

        if (id.length < 4) {
          $('span#addon_pulsa').html('error');
          $('#display').hide();
          $('#info').html("<div class='d-grid'><div class='container text-center'>Nomor Tidak Lengkap / Kode Operator Tidak Ditemukan.</div></div>");
        } else {
          $('#display').show();
          $('#info').html('');
          $('#loading').html('');

          if (
            id == '0811' ||
            id == '0812' ||
            id == '0813' ||
            id == '0821' ||
            id == '0822' ||
            id == '0823' ||
            id == '0852' ||
            id == '0853'
          ) {
            $('span#addon_pulsa').html('');
            $('span#addon_pulsa_name').html('Telkomsel');
            $('span#addon_pulsa').html('<img src="https://bukaolshop.s3-id-jkt-1.kilatstorage.id/106083/502555766s.jpg" alt="">');
            $('span#addon_pulsa2').html('<img src="https://bukaolshop.s3-id-jkt-1.kilatstorage.id/106083/502555766s.jpg" alt="">');
            $('span#addon_pulsa_opt').html('Telkomsel');
            reg = telkomselReguler;
            tf = telkomselTransfer;
          }
          else if (
            id == '0814' ||
            id == '0815' ||
            id == '0816' ||
            id == '0855' ||
            id == '0856' ||
            id == '0857' ||
            id == '0858'
          ) {
            $('span#addon_pulsa').html('');
            $('span#addon_pulsa_name').html('Indosat');
            $('span#addon_pulsa').html('<img src="https://i.ibb.co/N6KhhY1/indosat-logo-by-idiotz.png" alt="">');
            $('span#addon_pulsa2').html('<img src="https://i.ibb.co/N6KhhY1/indosat-logo-by-idiotz.png" alt="">');
            $('span#addon_pulsa_opt').html('Indosat');
            reg = indosatReguler;
            tf = indosatTransfer;
          } else if (
            id == '0851'
          ) {
            $('span#addon_pulsa').html('');
            $('span#addon_pulsa_name').html('By.U');
            $('span#addon_pulsa').html('<img src="https://bukaolshop.s3-id-jkt-1.kilatstorage.id/153444/975223121e.jpg" alt="">');
            $('span#addon_pulsa2').html('<img src="https://bukaolshop.s3-id-jkt-1.kilatstorage.id/153444/975223121e.jpg" alt="">');
            $('span#addon_pulsa_opt').html('By.U');
            reg = byuReguler;
            tf = byuTransfer;
          } else if (
            id == '0817' ||
            id == '0818' ||
            id == '0819' ||
            id == '0859' ||
            id == '0877' ||
            id == '0878'
          ) {
            $('span#addon_pulsa').html('');
            $('span#addon_pulsa_name').html('XL Axiata');
            $('span#addon_pulsa').html('<img src="https://bukaolshop.s3-id-jkt-1.kilatstorage.id/106083/841353370t.jpg" alt="">');
            $('span#addon_pulsa2').html('<img src="https://bukaolshop.s3-id-jkt-1.kilatstorage.id/106083/841353370t.jpg" alt="">');
            $('span#addon_pulsa_opt').html('XL-Axiata');
            reg = xlReguler;
            tf = xlTransfer;
          } else if (
            id == '0838' ||
            id == '0831' ||
            id == '0832' ||
            id == '0833'
          ) {
            $('span#addon_pulsa').html('');
            $('span#addon_pulsa_name').html('Axis');
            $('span#addon_pulsa').html('<img src="https://bukaolshop.s3-id-jkt-1.kilatstorage.id/153444/16338585.jpg" alt="">');
            $('span#addon_pulsa2').html('<img src="https://bukaolshop.s3-id-jkt-1.kilatstorage.id/153444/16338585.jpg" alt="">');
            $('span#addon_pulsa_opt').html('Axis');
            reg = axisReguler;
            tf = axisTransfer;
          } else if (
            id == '0895' ||
            id == '0896' ||
            id == '0897' ||
            id == '0898' ||
            id == '0899'
          ) {
            $('span#addon_pulsa').html('');
            $('span#addon_pulsa_name').html('Tri');
            $('span#addon_pulsa').html('<img src="https://bukaolshop.s3-id-jkt-1.kilatstorage.id/153444/94542056.jpg" alt="">');
            $('span#addon_pulsa2').html('<img src="https://bukaolshop.s3-id-jkt-1.kilatstorage.id/153444/94542056.jpg" alt="">');
            $('span#addon_pulsa_opt').html('Tri');
            reg = triReguler;
            tf = triTransfer;
          } else if (
            id == '0881' ||
            id == '0882' ||
            id == '0883' ||
            id == '0884' ||
            id == '0885' ||
            id == '0886' ||
            id == '0887' ||
            id == '0888' ||
            id == '0889'
          ) {
            $('span#addon_pulsa').html('');
            $('span#addon_pulsa_name').html('Smartfren');
            $('span#addon_pulsa').html('<img src="https://bukaolshop.s3-id-jkt-1.kilatstorage.id/153444/21570258.jpg" alt="">');
            $('span#addon_pulsa2').html('<img src="https://bukaolshop.s3-id-jkt-1.kilatstorage.id/153444/21570258.jpg" alt="">');
            $('span#addon_pulsa_opt').html('Smartfren');
            reg = smartfrenReguler;
            tf = smartfrenTransfer;
          }
          else {
            $('span#addon_pulsa').html('<i class="fas fa-do-not-enter" style="color:red;"></i>')
            $('#display').hide()
            $('#data').html('')
            $('#info').html("<div class='nothings container text-center'><img src='https://cdn-icons-png.flaticon.com/128/12324/12324286.png'><p>Operator Tidak Ditemukan</p></div>")
          }
        }
        $('#reg').off('click')
        $('#tf').off('click')
        $('#reg').on('click', function () {
          getData(reg)
        })
        $('#tf').on('click', function () {
          getData(tf)
        })
        getData(reg)
      }
      function getData(kategori) {
        var no = $('#nohp').val()
        var link = linkOlshop
        $.ajax({
          type: "POST",
          url: "https://kobodev.xyz/sistem/api/product.php",
          data: {
            api_key: key,
            main: '',
            kategori: kategori
          },
          dataType: "JSON",
          beforeSend: function () {
            $('#modalDetail').html('')
            $('#data').html('')
            for (let i = 0; i < 1; i++)
              $('#fake').append('<div class="coloading"><div class="loader"></div></div>')
          },
          success: function (response) {
            $('#loading').html('')
            $('#fake').html('')
            if (response.data.length !== 0) {
              $.each(response.data, function (i, v) {
                $('#data').append('<button class="d-produk my-shadow" id="btn-link" onclick="getDetail(\'' + v.links + '\')"><div class="icon-produk"><img class="img-produk" id="myImage" src="' + v.img + '"></div><div class="w-100"><p id="prod-name" class="nama-item">' + v.names + '</p><p class="caption-produk">Langsung Masuk Ke Nomor tujuan</p><p class="harga-item">' + v.prices + '</p><p class="m-0 diskon" id="d' + i + '"> <span class="text-decoration-line-through">' + v.price_old + '</span> <span class=" text-white rounded" style="font-size:10px;"> -' + v.discount + ' OFF</span></p></div><div></div></div></button>')
                let discount = jQuery.isEmptyObject(v.discount) ? $(`#d${i}`).addClass('d-none') : v.discount;
              });
            } else {
              $('#data').html("<div class='kosong mt-5'><div class= 'container text-center'><p> Produk Belum Tersedia</p></div > ")
            }
          },
          error: function () {
          }
        });
        $(document).on('click', ".submit-form", function () {
          var no = $('#nohp').val()
          $('#link-extra-info input').val(no);
          $('#link-extra-info').attr('action', $(this).attr('href'));
          $('#link-extra-info').submit();
          return false;
        });
      }
      function getDetail(produk) {
        var no = $('#nohp').val()
        if (no == '') {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No Tujuan Tidak Boleh Kosong!',
          })
        } else {
          $("#linkBeli").attr("href", "#");
          $.ajax({
            type: "POST",
            url: "https://kobodev.xyz/sistem/api/detail.php",
            data: {
              detail: produk,
              api_key: key,
            },
            dataType: "JSON",
            beforeSend: function () {
              $('#nama_produk').text('Loading...')
              $('#no_tujuan').text('Loading...')
              $('#harga').text('Loading...')
              $('#harga2').text('Loading...')
              $('#short-desc').text('Loading...')
              $('#full-desc').text('Loading...')
              $("#linkBeli").attr("href", "" + linkOlshop + produk);
              $('#mask').removeClass('d-none')
              $('#modalTrx').offcanvas('show')
              $('#no_tujuan').text(no)
            },
            success: function (result) {
              let response = result.data
              $('#nama_produk').text(response.name)
              $('#harga').text(response.price)
              $('#harga2').text(response.price)
              $('#short-desc').text(response.desc)
              $('#full-text').text(response.full_text)
              $('#full-bold').text(response.full_bolds)
              $('#full-desc').text(response.full)
              let text = response.full
              let formated = text.replace(/\|/g, '<br/>- ')
              $('#full-desc').append(formated)
              $('#mask').addClass('d-none')
            },
            error: function () {
            }
          });
        }
      }
