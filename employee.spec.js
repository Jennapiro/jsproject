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
		expect(Jenna.last_name).toBe("Piromalli");
	});

	it("has a position", () => {
		let Jenna = new Employee({ first_name: "Jenna" , last_name: "Piromalli" , position: "Division Vice President" });
		expect(Jenna.position).toBeDefined();
		expect(Jenna.position).toBe("Division Vice President")
	});


	it("has meetings", () => {
		let Jenna = new Employee({ first_name: "Jenna" , last_name: "Piromalli" });
		expect(Jenna.meetings).toBeDefined();
		expect(Array.isArray(Jenna.meetings)).toBe(true);
	});

	it ("can schedule a meeting", () => {
		let Jenna = new Employee({ first_name: "Jenna", last_name: "Piromalli" });
	});
	
	it("has an average number of meetings per week", () => {
    		let Jenna = new Employee({ first_name: "Jenna", last_name: "Piromalli" });
		
    // create a mock meeting
    let meet01 = { time: new Date(2018,1,2), location: "the clients office", client: "IBM" };
    let meet02 = { time: new Date(2018,1,5), location: "the clients office", client: "IBM" };
    let meet03 = { time: new Date(2018,1,6), location: "the clients office", client: "IBM" };
    let meet04 = { time: new Date(2018,1,7), location: "the clients office", client: "IBM" };
    let meet05 = { time: new Date(2018,1,12), location: "the clients office", client: "IBM" };
    let meet06 = { time: new Date(2018,1,13), location: "the clients office", client: "IBM" };
    let meet07 = { time: new Date(2018,1,14), location: "the clients office", client: "IBM" };
    let meet08 = { time: new Date(2018,1,15), location: "the clients office", client: "IBM" };
    let meet09 = { time: new Date(2018,1,16), location: "the clients office", client: "IBM" };
    let meet10 = { time: new Date(2018,1,19), location: "the clients office", client: "IBM" };
    let meet11 = { time: new Date(2018,1,20), location: "the clients office", client: "IBM" };
    let meet12 = { time: new Date(2018,1,21), location: "the clients office", client: "IBM" };
    let meet13 = { time: new Date(2018,1,22), location: "the clients office", client: "IBM" };
    // schedule them
    Jenna.schedule(meet01);
    Jenna.schedule(meet02);
    Jenna.schedule(meet03);
    Jenna.schedule(meet04);
    Jenna.schedule(meet05);
    Jenna.schedule(meet06);
    Jenna.schedule(meet07);
    Jenna.schedule(meet08);
    Jenna.schedule(meet09);
    Jenna.schedule(meet10);
    Jenna.schedule(meet11);
    Jenna.schedule(meet12);
    Jenna.schedule(meet13);

    // test what we epxect 
    expect(Jenna.meetings_per_week()).toBe(3.25);
  });
});
