# _Address Book_

#### _Application functions as a mock data base for an address book, 08.25.2020_

#### By _**Jillian Gibson and Ben Stoller**_

## Description

_This HTML demonstrates the fundamental understanding of creating objects in JavaScript and building out business logic with specs for address book data. 

## Specs
| Spec | Description | Input | Output |
| :-------------     | :------------- | :------------- |:------------- |
| 1 |**Create Address Book constructor to hold a Contact object** | Input: new Contact("Joe")| Output: First Name: Joe|
| 2 |**Assign unique ID to recall Contact object** | Input: Contact2("Ada")| Output: [2], Ada|
| 3 |**Add delete contact function to Business Logic** | Input: AddressBook.prototype.deleteContact | Output: |
| 4 |**Build UI with Dynamic Contact Data, event bubbling and event delegation** | Input: $("ul#contacts").on("click", "li", function() | Output: Ada, Joe|
| 5 |**Add delete functionality to UI ** | Input: $("#buttons").on("click", ".deleteButton", function()| Output: Delete btn|
| 6 |**Add "empty form fields" function** | Input: $("input#new-first-name").val(""); | Output: Cleared form on submit|
| 7 |**Add functionality to record and display a contact's email address.** | Input: this.emailAddresses = inputtedEmailAddress; | Output: Personal Email, Work Email |
| 8 |**Add functionality to record and display a contact's physical address.** | Input: this.physicalAddresses = inputtedPhysicalAddress; | Output: Home Address, Work Address |
| 9 |**Add functionality that allows a user to record multiple addresses.** | Input: function Address (inputtedEmailAddress,inputtedPhysicalAddress) | Output: |
| 10 |**Remove any additional address fields when the form is submitted.** | Input: $("#workEmail").remove();| Output: Work Email field removed|
| 11 |**Homepage** | User accesses localhost:5004 | Homepage with user input form |

## Setup/Installation Requirements

* _Clone down repository from Git Hub to machine._
* _Navigate to root directory._
* _Open index.html in text editor to view code._
* _Launch index.html to in browser to display.._


## Known Bugs

_No known bugs._

## Support and contact details

_Questions or comments can be directed to [Jillian Gibson](jillian.l.gibson@gmail.com) or [Ben Stoller](stollersystemsound@gmail.com)._

## Technologies Used

* _HTML_
* _JavaScript_
* _Bootstrap_
* _jQuery_

### License

*_This software operates under the [MIT](https://en.wikipedia.org/wiki/MIT_License) license._*

Copyright (c) 20202 **_Jillian Gibson and Ben Stoller_**