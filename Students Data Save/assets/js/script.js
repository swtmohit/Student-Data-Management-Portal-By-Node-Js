$(document).on('submit' , '.form-submit' , function (e) {
    e.preventDefault();
    let url = $(this).attr('action');
    let type = $(this).attr('method');
    let data = new FormData($(this)[0]);
    $.ajax({
        url,
        type,
        data,
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function (res) {
            res.swal && Swal.fire(res.swal);
            console.log(res);
            $('input').val('');
        },
        error: function (err) {
            console.log(err);
        }
    })
    $(this).find('input[type="radio"]').prop('checked', false);
})


function getRows (url) {
    $.ajax({
        url,
        dataType: 'json',
        success: function (res){
            $('table tbody').html(res.rows);
        },
        error: function (e) {
            console.log(e);
        }
    })
    console.log("hiiiii---------------")
}

  
$(document).on('click', '.delete', function () {
    let url = '/web/delete/' + $(this).data('url');
    let row = $(this);
    $.ajax({
        url,
        dataType: 'json',
        success: function (res) {
            res.swal && Swal.fire(res.swal);
            $(row).parents('tr').fadeOut(3000, () => {
                $(this).remove();
            });
        },
        error: function (e) {
            console.log(e);
        }
    })
})



$(document).on('submit', '.form-update', function () {
    e.preventDefault()
    let $form = $(this);
    let url = $form.attr('action');
    let type = $form.attr('method');
    let data = new FormData(this);

    $.ajax({
      url: url,
      type: type,
      data: data,
      processData: false, 
      contentType: false, 
      success: function (response) {
        console.log('Success:', response);
      },
      error: function (textStatus, errorThrown) {
        console.error('Error:', textStatus, errorThrown);
      }
    });
  });


