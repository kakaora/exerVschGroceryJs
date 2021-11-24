var shopper = [
    {
        firstName: 'Gorilla'
        lastName: 'Grocer'
        weight: '4000'
        fullName: function(){return this.firstName + " " + this.lastName;}
    },{
        firstName: "Mike",
        lastName: "Magoo"
        weight: "180"
        fullName: function(){return this.firstName + " " + this.lastName;}
    },{
        firstName: "Logan",
        lastName: "Limbo"
        weight: "150"
        fullName: function(){return this.firstName + " " + this.lastName;}
      }]

grocerycart: ["cashews", "cardamom", "pine nuts", "beets", "almonds"]

length = shopper.length;

for (var j = 0; j < length; j++){
    if (shopper[j].weight >= 200){
        console.log(shopper[j].firstName + 
            " " + shopper[j].lastName) + "is too heavy!")
        }
        else {
            console.log(shopper[j].firstName + 
                " " + shopper[j].lastName)) +
            " is too light!")
