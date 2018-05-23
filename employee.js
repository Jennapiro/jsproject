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
}

module.exports = Employee;