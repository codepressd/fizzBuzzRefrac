$(document).ready(function(){


		
		$('.numCap').submit(function(e){
			e.preventDefault();
			var numChosen = parseInt($('.number').val());
			listNums(numChosen);
		});

		function listNums (num){

			var currNum = 0;

			for(var i = 0; i < num; i++){

				currNum = currNum + 1; //+= wasn't working for some reason???

				if(currNum % 3 == 0 && currNum % 5 == 0){

					$(".num-list").append('<li>FizzBuzz</li>');

				}else if(currNum % 5 == 0){

					$(".num-list").append('<li>Buzz</li>');

				}else if(currNum % 3 == 0){

					$(".num-list").append('<li>Fizz</li>');

				}else {

					$(".num-list").append('<li>'+ currNum + '</li>');

				}

			}
		};
		
	
});