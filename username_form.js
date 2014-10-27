$(document).ready(function() {

	//MAKING SURE SOMETHING IS ENTERED INTO THE USERNAME FIELD
	function checkUsername() {
		if ($("#username").val() == "") {
			alert("Please fill in a username.");
			return false
		} else {
			return true
		}

	};

	//CONFIRMING PASSWORD AS 12345
	function checkPassword() {
		var p = $("#password").val();
		if (p == "") {
			alert("Please fill in a password.");
			return false
		} else if (p !== "12345") {
			alert("Sorry, that is not the correct password.");
			return false
		} else {
			return true
		}

	};

	//CONFIRMING THE MONTH VALUE
	  function checkMonth(m){
	       if (m<=0 || m>12){
	      alert("Please correct your month number.");
		} 
			return false
		};    


	//CONFIRMING THE DAY VALUE
	  function checkDay(d){
	      if (d<=0 || d>=32) {
	   alert("Please fix your day number.");
	    }
	    	return false
	    };
	 

	//CONFIRMING THE YEAR VALUE
	  function checkYear(yr){
	      if (yr<1900 || yr>2100) {
	        alert("Try typing in that year again.");
	      }
	      	return false
	      };
	  

	//SPLITTING UP THE INPUT AND ANALYZING IT
	  $("form").submit(function(){ 
	           var date = $("#date").val();
	            var date_split = date.split("/");
	            var m = date_split[0];
	            var d = date_split[1];
	            var yr = date_split[2];

				checkUsername() //RUN USERNAME FUNCTION
				checkPassword() //RUN PASSWORD FUNCTION

		            if (date == ""){ 
		              alert("date cannot be blank");    
		              return false;
		            } else {
		            checkMonth(m);		//PARSE DATE
		            checkDay(d);
		            checkYear(yr);
		         
		            return false;
		          
		        };
		 });

});



