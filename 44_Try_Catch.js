
let example = ()=>{
    try {
            // throw new Error('lol'); 
            // aagagasgag
            // undefFun();
       
    } catch (error) {
        console.log(error);
        console.log(error.name);
        console.log(error.message);
    }finally{
        console.log("We are inside the finally block");
    }
}

example();
