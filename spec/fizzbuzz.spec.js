function fizzbuzz(number){
	return number; 
}
describe("fizzbuzz", function(){
	it("fizzbuzz of 1", function(){
		expect(fizzbuzz(1)).toBe(1);
	});
	it("fizzbuzz of 2", function(){
		expect(fizzbuzz(2)).toBe(2);
	});
}); 