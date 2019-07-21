$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});

function signupSubmit(){
  var signupData = JSON.stringify($("#signupForm").serializeArray());
  console.log(signupData);
  $.ajax({
    type: "POST",
    url: "signup",
    data: signupData,
    success: function(){},
    dataType: "json",
    contentType : "application/json"
  });
}


$('#doctorSearch').on('click', function (e) {
  e.preventDefault();
  var patientInfo = ["John Doe", "Doe John"];
  var patientDob = ["8062244999", "8062244988"];
  data = "";
  for (var i = 0; i < patientInfo.length; ++i) {
	  data += '<li class="list-item"><a class="" href="./records.html">'+patientInfo[i]+ '  <p class="pDob">Phone Number: '+ patientDob[i]+'</p></a></li>'
  }
  $('#patientList').html(data);
});
