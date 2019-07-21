function Proverka_Chisl(input){
	
	var ch 		= Number(input.value);			
	input.value = ch;
	if (input.min > ch){
		input.value = input.min;
		}			
	else if (input.max < ch){			
		input.value = input.max;
		}
}

function Clickсустав(суставName, ClassName){		
	
	var element = document.getElementById(суставName);			
	var fill 	= element.getAttribute('fill');		
	
	if (fill == "#FFFFFF"){
		element.setAttribute('fill', "#428BCA");					
	}
	else{
		element.setAttribute('fill', "#FFFFFF");					
	};
		
	var elements 	= document.getElementsByClassName(ClassName);
	var sum 		= 0;
	
	for (i = 0; i < elements.length; ++i){
		fill 	= elements[i].getAttribute('fill');
		if (fill == "#428BCA"){
			sum = sum + 1;					
		}				
	}
					
	if (ClassName == "tender_сустав"){
		element = document.getElementById('sum_tender_сустав');						
	}
	else if (ClassName == "swollen_сустав"){
		element = document.getElementById('sum_swollen_сустав');					
	};	
	element.value = sum;	
	
	itog();
}