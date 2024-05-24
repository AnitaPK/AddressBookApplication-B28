// 1. Address Book Application:
// Create an address book application where each contact is represented as an object with properties like name, email, phone, and address.
// Implement functionalities to add new contacts, edit existing contacts, delete contacts, and search for contacts by name or email.


const contacts = {
    allContacts:[],
    gerenateId:()=>{
        return Date.now().toString(36) + Math.random().toString(36).substring(2)
    },
    addContacts:(n,e,p,add)=>{
    const newContact={
        id:contacts.gerenateId(),
        name1:n,
        email:e,
        phone:p,
        address:add
        }
        console.log(newContact);
        contacts.allContacts.push(newContact);
        console.log(contacts.allContacts);
        displayContacts(contacts.allContacts);
    },
    deleteContact:(id)=>{
        indexNo = contacts.allContacts.findIndex((elm)=>elm.id === id);

        if(indexNo != -1){
            contacts.allContacts.splice(indexNo,1);
        }
        displayContacts(contacts.allContacts);
    },
    updateContact:(updateid)=>{
        console.log(updateid);
        updatePhoneNumber = prompt("Enter Updated Phoe Number...");
        console.log(updatePhoneNumber);
        for(let i=0; i<contacts.allContacts.length; i++){
            if(contacts.allContacts[i].id == updateid){
               contacts.allContacts[i].phone = updatePhoneNumber;
            }
        }
        displayContacts(contacts.allContacts);
    }
}
function displayContacts(array1){
    result = document.getElementById("result");
        result.innerHTML='',
        console.log(array1);
        array1.forEach(element=>{
        console.log(element);
        newCard = document.createElement('div');
         newCard.className = 'card';

         newCard.innerHTML = `<div class="card-body">
                            <h4 class="card-title">${element.name1}</h4>
                            <p class="card-text">${element.email}</p>
                            <p  class="card-text">${element.address}</p>
                            <p class="card-text">${element.phone}</p>
                            <button class="btn btn-primary" onclick=contacts.updateContact('${element.id}')>Edit</button>
                            <button class="btn btn-primary" onClick=contacts.deleteContact('${element.id}')>Delete</button>
        `;
        console.log(element.name1);
        // newCard.appendChild(list);
        result.appendChild(newCard);
    })
}
contacts.addContacts('vijay','vijay@gmail.com',123456789,'Pune');
contacts.addContacts('nisha','nisha@gmail.com',678912345,'Pune');
// displayContacts(contacts.allContacts);


document.getElementById('sbmitBTN').addEventListener('click',()=>{
    nameInput = document.getElementById('nameInput'); 
    emailInput = document.getElementById('emailInput');
    phoneInput = document.getElementById('phoneInput');
    addressInput = document.getElementById('addressInput'); 
    
name1 = nameInput.value;
email =emailInput.value;
phone = phoneInput.value;
address = addressInput.value;
contacts.addContacts(name1,email,phone,address);

nameInput.value = "";
emailInput.value="";
phoneInput.value="";
addressInput.value="";

})