let fruit = function(person, color){
    this.person = person;
    this.color = color;
    this.displayInfo = function() {
        console.log(this.person + " is " + this.color);//John is 21 years old
    }
}


let bindingObj = {
    person:"Banana",
    color:"yellow"
}

let fruit1 = new fruit("Orange","orange");
fruit1.displayInfo();

let newBound = fruit1.displayInfo.bind(bindingObj);

// newBound();
// console.log(bindingObj);
// console.log(fruit1);

let noBinding = {
    persons: "John",

    passAround(){
        setTimeout(this.displayInfo.bind(this),3000)
    },
    displayInfo(){
        console.log(this),
        console.log(this.persons)
    }
}
noBinding.passAround();