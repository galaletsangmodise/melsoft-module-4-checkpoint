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

for (let person of attendees) {
  console.log("========================");
  console.log("Name: " + person.name);
  console.log("Age: " + person.age);
  console.log("Ticket: " + person.ticket);
  console.log("Valid Ticket: " + person.hasTicket);
  console.log("========================");
}

// Challenge 2

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

for (let person of attendees) {
  if (person.hasTicket === true && person.ticket === "VIP" && person.age >= 18) {
    console.log(person.name + " -> VIP LOUNGE ACCESS: APPROVED");
  } else {
    console.log(person.name + " -> VIP LOUNGE ACCESS: DENIED");
  }
}

// Challenge 5

let searchName = "Zanele"; 
let found = false;
for (let person of attendees) {
  if (person.name === searchName) {
    console.log("ATTENDEE FOUND");
    console.log("Name: " + person.name);
    console.log("Age: " + person.age);
    console.log("Ticket: " + person.ticket);
    console.log("Valid Ticket: " + person.hasTicket);
    found = true;
    break; 
  }
}
if (found === false) {
  console.log("ATTENDEE NOT FOUND: " + searchName);
}

// Challenge 6

for (let person of attendees) {
  if (person.hasTicket === false) {
    continue; 
  }
  console.log("Checking " + person.name + "...");
}

// Challenge 7

for (let person of attendees) {
  let voucher;
  if (person.spend >= 1000) {
    voucher = "R200 food voucher";
  } else if (person.spend >= 500) {
    voucher = "R100 food voucher";
  } else if (person.spend >= 300) {
    voucher = "R50 food voucher";
  } else {
    voucher = "No voucher";
  }
  console.log(person.name + " (R" + person.spend + ") -> " + voucher);
}

// Challenge 8

{
  let validTickets = 0;
  let invalidTickets = 0;
  let under18 = 0;
  let vipCount = 0;
  let generalCount = 0;
  let totalSpend = 0;
  let topSpender = attendees[0];

  for (let person of attendees) {
    if (person.hasTicket === true) {
      validTickets++;
    } else {
      invalidTickets++;
    }
    if (person.age < 18) {
      under18++;
    }
    if (person.ticket === "VIP") {
      vipCount++;
    } else if (person.ticket === "General") {
      generalCount++;
    }
    totalSpend += person.spend;
    if (person.spend > topSpender.spend) {
      topSpender = person;
    }
  }

  let averageSpend = totalSpend / attendees.length;

  console.log("Total attendees: " + attendees.length);
  console.log("Valid tickets: " + validTickets);
  console.log("Invalid tickets: " + invalidTickets);
  console.log("Under 18: " + under18);
  console.log("General ticket holders: " + generalCount);
  console.log("VIP ticket holders: " + vipCount);
  console.log("Total spent: R" + totalSpend);
  console.log("Average spend: R" + averageSpend.toFixed(2));
  console.log("Highest spender: " + topSpender.name + " (R" + topSpender.spend + ")");
}

// Challenge 9

let biggestSpender = attendees[0];
for (let person of attendees) {
  if (person.spend > biggestSpender.spend) {
    biggestSpender = person;
  }
}
console.log("===== TOP CUSTOMER =====");
console.log("Name: " + biggestSpender.name);
console.log("Amount Spent: R" + biggestSpender.spend);
console.log("Reward: Backstage Upgrade");



