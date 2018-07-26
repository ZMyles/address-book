
class Contacts {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }

}

class Address{
    
    constructor() {
        this.contacts = [];
    }

       add(info){
            this.contacts.push(info);
        }
        
        deleteAt(index) {
            this.contacts.splice(index, 1);
        }

        deleteByName(index) {
           
        }
    
        print(){
            for(let i = 0; i < this.contacts.length; i++) {
            console.log(this.contacts[i]);
            }
        }

}


let book = new Address();

// const bob = new Contacts("bob", "email.gmail", "555-5555", "none")

book.add(new Contacts("bob", "email.gmail", "555-5555", "none"));


// const jeff = new Contacts("jeff", "email.gmail", "555-5555", "none")

book.add(new Contacts("jeff", "email.gmail", "555-5555", "none")
);

//-----------------------------

while(true){
    let question1 = prompt("Would you like to add, delete, print, or quit?");

    if (question1.toLowerCase() === "add") {
        book.add(new Contacts(
        this.name = prompt(`Enter Name`), 
        this.email = prompt(`Enter email`),
        this.phone = prompt(`Enter number`),
        this.relation = prompt(`Enter status`)
    )); 
        console.log(book);
        console.log(`contact was added`);
    } else if ( question1.toLowerCase() === "delete") {
        let deleteContact = prompt(`What index do you want to delete?`);
        book.deleteAt(deleteContact);
        console.log(book);
        console.log(`Contact was deleted`);
    } else if ( question1.toLowerCase() === "print") {
       book.print();
    } else {
        break;
    }
    
}



// prompts --------------------





// const ed = new Contacts("Ed", "Email@gmail.com", "555-222-6521", "none")
// const test_3 = new Address();
// test_3.add(ed);


// const bob = new Contacts("Bob", "Email@gmail.com", "555-222-6521", "none")
// // const test_2 = new Address();
// test_2.add(bob);

// const zavier = new Contacts("Zavier", "stuff@comcast.net", "666-999-666", "none"); 


// // const test = new Address();
// test.add(zavier);


// // test.print();

// // test_2.print();

// // test_3.print();

// test.deleteByName("ed");
