import { friends,colleagues } from './01-basics'
import {Friend, Colleague, EmailContact } from './myTypes'

//function older(f: Friend) : string 
// { (Type Leveraging) (:string) removed

function older(f: Friend) {
    f.age += 1
    return `${f.name} is now ${f.age}` 
    
}
// :string[] removed type leveraging
function allOlder(friendsArray: Friend[]) {
    return friendsArray.map((friend) => older(friend));
}

console.log(allOlder(friends));

// ---------------------------------------------

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }


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

// -------------------------------------

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  // Test invocations
  console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW

//   -------------------Exercise---------------------------

function findFriends(friendsArray: Friend[], criterion: (friend: Friend) => boolean): string[] {
    return friendsArray.filter(criterion).map(friend => friend.name);
}

// Example usage:
console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));
