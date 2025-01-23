const subtract=  require("./subtract");

test("Properly Subracting two numbers", ()=>{
    expect(subtract(5,3)).toBe(2);
})