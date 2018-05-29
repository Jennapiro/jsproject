// Here is where we'll implement
//the student class

function Employee(props) {
	this.first_name = props.first_name || "";
	this.last_name = props.last_name || "";
	this.position = props.position || "";
	this.meetings = [];
	this.schedule = function(meeting) {
		this.meetings.push(meeting);
	};
	var number_of_meetings_per_month;
	if (number_of_meetings_per_month < 10) {
		console.log ("in a bad company standing");
	}
	if (number_of_meetings_per_month < 19){
		console.log ("in an average company stadning");
	}
	if (number_of_meetings_per_month < 30){
		console.log ("in a competitive company standing");
	}
	else if (number_of_meetings_per_month == 0){
		console.log ("need to meet with your boss");
	}
}
module.exports = Employee;