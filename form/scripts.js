function checkUrl() { 

	var output = document.getElementById("forename").value + document.getElementById("surname").value; 	

	// alert($output);

	$.ajax({
      type: "get",
      url: "script.php",
      data: {
				urlToCheck : output
								
				},
			dataType: 'json',
      success: function(data) {
				var json = $.parseJSON(data[2]);

				console.log(json);

				console.log(json.available); 

				//console.log(json.errors[0].messageDetails[0]); 				

			
				if (json.available != undefined) { 
					console.log(json.requestedUrl);					
					document.getElementById("personalUrl").value = json.requestedUrl;
				}	

				else document.getElementById("personalUrl").value = json.errors[0].messageDetails[0];

	
		}
	});
}

