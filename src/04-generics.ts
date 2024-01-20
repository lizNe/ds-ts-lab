import {friends, colleagues} from './01-basics'
import {Friend, Colleague} from './myTypes'

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')  ))
console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'  ))

function sort<T>(arr: T[], comparator: (a: T, b: T) => number): T[] {
    return [...arr].sort(comparator);
  }
  
  // Sort friends by age
  console.log(sort(friends, (a, b) => a.age - b.age));
  
  // Sort colleagues by extension number
  console.log(sort(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
  