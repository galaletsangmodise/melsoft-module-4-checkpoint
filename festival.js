let attendees = [
  { name: "Lebo",    age: 22, ticket: "General", hasTicket: true,  checkedIn: false, spend: 350 },
  { name: "Aisha",   age: 19, ticket: "VIP",     hasTicket: true,  checkedIn: false, spend: 1200 },
  { name: "Thabo",   age: 17, ticket: "General", hasTicket: true,  checkedIn: false, spend: 250 },
  { name: "Naledi",  age: 25, ticket: "VIP",     hasTicket: true,  checkedIn: false, spend: 850 },
  { name: "Jason",   age: 31, ticket: "General", hasTicket: false, checkedIn: false, spend: 0 },
  { name: "Zanele",  age: 20, ticket: "General", hasTicket: true,  checkedIn: false, spend: 650 },
  { name: "Karabo",  age: 16, ticket: "VIP",     hasTicket: true,  checkedIn: false, spend: 900 },
  { name: "Michael", age: 28, ticket: "General", hasTicket: true,  checkedIn: false, spend: 450 }
];

// Challenge 1
console.log("\n--- Challenge 1 ---");
for (let person of attendees) {
  console.log("========================");
  console.log("Name: " + person.name);
  console.log("Age: " + person.age);
  console.log("Ticket: " + person.ticket);
  console.log("Valid Ticket: " + person.hasTicket);
  console.log("========================");
}

// Challenge 2
console.log("\n--- Challenge 2 ---");
for (let person of attendees) {
  if (person.age >= 18 && person.hasTicket === true) {
    console.log(person.name + " -> ENTRY APPROVED");
  } else if (person.age < 18) {
    console.log(person.name + " -> ENTRY DENIED: UNDER 18");
  } else {
    console.log(person.name + " -> ENTRY DENIED: NO VALID TICKET");
  }
}

// Challenge 3
console.log("\n--- Challenge 3 ---");
for (let person of attendees) {
  if (person.age >= 18 && person.hasTicket === true) {
    console.log(person.name);
    console.log("Ticket: " + person.ticket);
    switch (person.ticket) {
      case "VIP":
        console.log("Wristband: GOLD WRISTBAND");
        break;
      case "General":
        console.log("Wristband: BLUE WRISTBAND");
        break;
      default:
        console.log("UNKNOWN TICKET TYPE");
    }
  }
}

// Challenge 4
console.log("\n--- Challenge 4 ---");
for (let person of attendees) {
  if (person.hasTicket === true && person.ticket === "VIP" && person.age >= 18) {
    console.log(person.name + " -> VIP LOUNGE ACCESS: APPROVED");
  } else {
    console.log(person.name + " -> VIP LOUNGE ACCESS: DENIED");
  }
}
