import { friends } from './01-basics'
import { colleagues } from './01-basics'
import {Friend, Colleague } from './myTypes'


function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

function allOlder(friendsArray: Friend[]): string[] {
    return friendsArray.map((friend) => older(friend));
}

console.log(allOlder(friends));

// ---------------------------------------------

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));



// Exercise
// ------------------------------------------
// Spread Operator ... -> Math.max(...) Find highest extension no.
function addColleague(currentColleagues: Colleague[], name: string, department: string, email: string): void {
    const highestExtension = Math.max(...currentColleagues.map(c => c.contact.extension), 0);
    
    const newColleague: Colleague = {
        name,
        department,
        contact: {
            email,
            extension: highestExtension + 1,
        },
    };

    currentColleagues.push(newColleague);
}

// Test the implementation
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

