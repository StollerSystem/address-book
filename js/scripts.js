// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber,newAddresses) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.newAddresses = newAddresses;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// Business Logic for Addresses ---------
function Address (inputtedEmailAddress,inputtedPhysicalAddress) {
  this.emailAddresses = inputtedEmailAddress;
  this.physicalAddresses = inputtedPhysicalAddress;
}



// User Interface Logic ---------
let addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  let contactsList = $("ul#contacts");
  let htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};

function showContact(contactId) {
  const contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  $(".personal-email-address").html(contact.newAddresses.emailAddresses[0]);
  $(".work-email-address").html(contact.newAddresses.emailAddresses[1]);
  $(".physical-home-address").html(contact.newAddresses.physicalAddresses[0]);
  $(".physical-work-address").html(contact.newAddresses.physicalAddresses[1]);
  
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
}

function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    showContact(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
};


$(document).ready(function() {
  attachContactListeners(); 
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    const inputtedFirstName = $("input#new-first-name").val();
    const inputtedLastName = $("input#new-last-name").val();
    const inputtedPhoneNumber = $("input#new-phone-number").val();
    const inputtedEmailAddress = [$("input#new-personal-email-address").val(), $("input#new-work-email-address").val()];
    const inputtedPhysicalAddress = [$("input#new-physical-home-address").val(), $("input#new-physical-work-address").val()];  
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    $("input#new-personal-email-address").val("");
    $("input#new-work-email-address").val("");
    $("input#new-physical-home-address").val("");
    $("input#new-physical-work-address").val("");

    $("#workEmail").remove();
    $("#workAddress").remove();
    
    let newAddresses = new Address(inputtedEmailAddress,inputtedPhysicalAddress)

    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber,newAddresses);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook); 
  })
})
