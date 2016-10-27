org.vits.eclipsee.app.filter('gender', function() {
	return function(input,type) {
		input = (_.isBoolean(input))?((input)?1:0):parseInt(input);
		switch(type){
			case "suffix":
				switch(input){
					case 0 : return "Ms.";
					case 1 : return "Mr.";
				}
			case "full":
				switch(input){
					case 0 : return "Female";
					case 1 : return "Male";
				}
		}
	}
});
