$(document).ready(function(){
   console.log('ready');
    $("#contacts").submit(function(event){
        event.preventDefault();
        $.ajax({
            url: $(this).attr('action'),
            method: 'post',
            data: $(this).serialize(),
            success: function(json){
                if(json['success']){
                    $("#contacts_error").empty();
					$('#contacts_error').hide();
                    $("#contacts").trigger('reset');
                    alert(json['success']);
                }else{
					$('#contacts_error').show();
                    $("#contacts_error").html(json['error']);
                }
            }
        });
    });
    $("#feedback_form").submit(function(event){
        event.preventDefault();
        $.ajax({
            url: $("#feedback_form").attr('action'),
            method: 'post',
            data: $("#feedback_form").serialize(),
            dataType: 'json',
            success: function(json){
                if(json['success']){
                    $("#feedback_form")[0].reset();
                    $(".alert-danger").empty().fadeOut();
                    $(".alert-success").html(json['success']).fadeIn();
                }else{
                    $(".alert-danger").html(json['error']).fadeIn();
                }
            }
        });
    });
	
});
