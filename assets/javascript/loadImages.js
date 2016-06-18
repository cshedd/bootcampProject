var ref = new Firebase('https://webdevprojectut.firebaseio.com/');

var placesRef = ref.child("places");


function main(){

	//later add that if the date changes so do the two suggestions 
	//reset the vote 

	placesRef.set({
		optionOne: {
			name: "Zilker Park",
			imgFilePath: "../images/filename",
			votes: 0
		},
		OptionTwo: {
			name: "Barton Creek Mall",
			imgFilePath: "../images/filename",
			votes: 0 
		}
	});

}

main()