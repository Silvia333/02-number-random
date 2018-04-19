describe("main", function() {
    
   it('number random is greater than 1', function(){
        // getRandom(min, max);
        var number = startApp();
        expect(number).toBeGreaterThan(1);
               
       
    });
    it('number random is less than 100', function(){
        var number = startApp();
        expect(number).toBeLessThan(100);
               
    });
  
});