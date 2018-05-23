//import the Employee Class
const Employee = require('./employee');

describe("An Employee", () => {

	it("has a first name", () => {
		let Jenna = new Employee({ first_name: "Jenna" });
		expect(Jenna.first_name).toBeDefined();
		expect(Jenna.first_name).toBe("Jenna");
	});

	it("has a last name", () => {
		let Jenna = new Employee({ last_name: "Piromalli" });
		expect(Jenna.last_name).toBeDefined();
		expect(Jenna.last_name).tobe("Piromalli");
	});

	it("has a position", () => {
		let Jenna = new Employee({ first_name: "Jenna" , last_name: "Piromalli" , position: "Division Vice President" });
		expect(Jenna.position).toBeDefined();
		expect(Jenna.position).toBe("Division Vice President")
	});


	it("has meetings", () => {
		let Jenna = new Employee({ first_name: "Jenna" , last_name: "Piromalli" });
		expect(Jenna.position).toBeDefined();
		expect(Array.isArray(Jenna.meetings)).toBe(true);
	});

	it ("can schedule a meeting", () => {
		let Jenna = new Employee({ first_name: "Jenna", last_name: "Piromalli" });

	//create a fake meeting
		let mock(10) = {
		time: "10",
		location: "clients office",
		client_company_name: "IBM",
	};

		let num_scheduled = Jenna.meetings.length;
		Jenna.schedule(mock10);
		expect(Jenna.meetings.length).toBe(num_scheduled +1);
		expect(Jenna.meetings[num_scheduled].time).toBe("10")
		expect(Jenna.meetings[num_scheduled].location).toBe("clients office");
	});
});

