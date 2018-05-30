// Here is where we'll implement
//the employee class

const moment = require('moment'); 

function Employee(props) {
	this.first_name = props.first_name || "";
	this.last_name = props.last_name || "";
	this.position = props.position || "";
	this.meetings = [];
	this.schedule = function(meeting) {
		this.meetings.push(meeting);
	};
	
	this.meetings_per_week = function() {
    let mpw = []; 
    for (let meeting of this.meetings) {
      let dt = moment(meeting.time);
      let week = dt.week();
      if (undefined === mpw[week]) {
        mpw[week] = 1;
      } else {
        mpw[week] += 1;
      }
    }
    mpw = mpw.filter(Number);
    let avg_mpw = mpw.reduce((acc, cv) => acc += cv / mpw.length, 0);
    return avg_mpw;
  }
}

module.exports = Employee;
