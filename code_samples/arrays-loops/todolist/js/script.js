$(document).ready(function(){

	$("#addButton").click(function(event){
		event.preventDefault();
		saveTask(); //this is calling saveTask
	});

	var taskArray = [];
				//position 0,   position 1,   position 2,       pos3
	// taskArray = ["Do homework", "clean room", "clean kitchen", "eat", "sleep"];
	// console.log(taskArray[3]);
	var saveTask = function(){
		var newTask = $("#newTask").val();//get value from the input bar
		taskArray.push(newTask); //pushing my new Task into the taskArray
		console.log(taskArray);
		displayTasks();
	};

	var displayTasks = function(){
		 $("#taskList").empty(); //remove everything we have added so far 
		
		console.log(taskArray.length);

		for(var i=0; i<taskArray.length; i++){
			//make a new div
			var newDiv = $('<div/>');
			//insert task item into the html of that div
			newDiv.html(taskArray[i]);
			newDiv.addClass('task');
			newDiv.attr('id',i);
			//append div to the page
			$("#taskList").append(newDiv);
			//we can add fake html as a string like this (method 2 to do it)
			//$("#taskList").append('<div class="task">' +taskArray[i]+'</div>');
		}

		
	}


	


});