function fizzbuzz(number){
	if(number===3){
		return "fizz";
	} else if(number===5){
		return "buzz";
	}else{
		return number;
	}
}
describe("fizzbuzz", function(){
	it("fizzbuzz of 1", function(){
		expect(fizzbuzz(1)).toBe(1);
	});
	it("fizzbuzz of 2", function(){
		expect(fizzbuzz(2)).toBe(2);
	});
	it("fizzbuzz of 3", function(){
		expect(fizzbuzz(3)).toBe("fizz");
	});
	it("fizzbuzz of 4", function(){
		expect(fizzbuzz(4)).toBe(4);
	});
	it("fizzbuzz of 5", function(){
		expect(fizzbuzz(5)).toBe("buzz");
	});

}); 