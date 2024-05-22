// 1. Address Book Application:
// Create an address book application where each contact is represented as an object with properties like name, email, phone, and address.
// Implement functionalities to add new contacts, edit existing contacts, delete contacts, and search for contacts by name or email.


const contacts = {
    allContacts:[],
    addContacts:(n,e,p,add)=>{
    const newContact={
        name:n,
        email:e,
        phone:p,
        address:add
        }
        console.log(newContact);
        this.allContacts.push(newContact);
        console.log(this.allContacts);
        displayContacts(this.allContacts);
    }
}

function showContacts(){
    contacts.allContacts.forEach(element=>{
        list = document.createElement(div);
        list.innerHTMl = `
                            <h3>${element.name}</h3>
                            <h2>${element.email}</h2>
                            <div><span>${element.phone}</span><span>${element.address}</span></div>
        `
    })
}


contacts.addContacts('vijay','vijay@gmail.com',123456789,'Pune');
contacts.addContacts('nisha','nisha@gmail.com',678912345,'Pune');

document.getElementById('sbmitBTN').addEventListener('click',()=>{
name = document.getElementById('nameInput').value; 
email = document.getElementById('emailInput').value;
phone = document.getElementById('phoneInput').value;
address = document.getElementById('addressInput').value; 

contacts.addContacts(name,email,phone,address);
})