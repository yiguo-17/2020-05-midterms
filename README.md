# 2020-05 Midterms Solution

### Introduction

Welcome to the test! You've made it this far; let's see where you're at.


### Guidelines

* This is your typical fork-clone-and-run-tests situation.
* If you find what you believe to be an error in the tests, please let us know!
* Do not hesitate to ask any clarification questions as well. Just no questions about solutions. You're on your own for those!
* Except for our helpful hints below. "README" is in all caps for a reason!
* You will absolutely get partial credit for attempting a problem. Problems that can seem overwhelming will become doable if you just start coding and take it one piece at a time.
* Conversely, don't stay stuck for too long. Unless you're on your final function, there are other questions you could be tackling.


### Tasks

`capitalizeSentences` - capitalizes every sentence after the first in the given paragraph

**Example Calls**

capitalizedSentences('Binge-watching is the best. why would you pause. when you can just. keep. going.') -> 'Binge-watching is the best. Why would you pause. When you can just. Keep. Going.'

capitalizeSentences('Example sentences are hard to come up with. you just try it. you will, huh. go on, try it then.') -> 'Example sentences are hard to come up with. You just try it. You will, huh. Go on, try it then.'

capitalizeSentences('In a way fighting was just like using Magic. You said the words, and they alterEd the universe. By merely speaking you could create damage and pain, cause tEars to fall, drive people Away, make yourself feel better, make your life worsE.') -> 'In a way fighting was just like using magic. You said the words, and they altered the universe. By merely speaking you could create damage and pain, cause tears to fall, drive people away, make yourself feel better, make your life worse.'

capitalizeSentences('A magIcian is strong because he feels pain. He Feels the difference beTween what the world is and what he would make of it.') -> 'A magician is strong because he feels pain. He feels the difference between what the world is and what he would make of it.'

**Hints**

* Remember that, if you're looping, you can always check what characters are in front or behind the current `i`.

---

`isValidPassword` - returns false if there is a space in the given string or its length is less than 12 characters, and true otherwise--in other words, a valid password has no spaces and is at least 12 characters, and this function tells you if the string passed in follows those rules

**Example Calls**

isValidPassword('hey no this is not how it should be') -> false

isValidPassword('bad password') -> false

isValidPassword('shorty') -> false

isValidPassword('ritemoarpls') -> false

isValidPassword('longpasswordwithnospaces') -> true

isValidPassword('justlongenuf') -> true

**Hints**

* Remember that it should return `true` only if both conditions are true, and `false` if either condition is not met.
* Your logic will be a little simpler with `.includes` (also not too hard to research if you're not used to it!), although this is definitely solvable with a `for` loop.

---

`makeHalfSquares` - returns a new array where every number in the given array has been squared and then halved (divided by two)

**Example Calls**

makeHalfSquares([6, 7, -8, 10]) -> [18, 24.5, 32, 50]

makeHalfSquares([12, 3, 5, 3.5]) -> [72, 4.5, 12.5, 6.125]

**Hints**

* This is a mapping operation! You can even use `.map` if you'd like, but making your own array manually will suffice.

---

`countAs` - returns the number of grades that are at least 90 in the given array

**Example Calls**

countAs([90, 50, 63, 87, 100, 93, 76, 0]) -> 3
countAs([90, 50, 80, 87, 100, 90, 106, 110]) -> 5

---

`deleteMiddleLetters` -> deletes the middle letter(s) from a string, returning the remaining string

**Example Calls**

deleteMiddleLetters('hello') -> 'helo'
deleteMiddleLetters('goodbye') -> 'goobye'
deleteMiddleLetters('yessir') -> 'yeir'
deleteMiddleLetters('oh hello there') -> 'oh hel there'

**Hints**

* You can solve this with string building, but `.slice` might be easier. Usually learning a new tool takes too much time to do on a test, but slice isn't too hard. Spending time researching it might be worth it, depending on how the problem is shaping up for you.
* Either way, by the second test, you'll need to treat strings with odd numbers of characters different from even numbers of characters.
* It would likely help to make a variable holding some middle index of your string. Calculate it beforehand so you don't have to write that code out over and over!
* And to calculate it, you may want to use a built-in rounding method. Particularly check out `Math.floor`, although `Math.round` or `Math.ceil` might fit your style better.

---

`lastIndexOfSpace` -> returns the last appearance of a space character within the given string, and -1 if none is found

**Example Calls**

lastIndexOfSpace('hey you') -> 3
lastIndexOfSpace(`what even I can't`) -> 5
lastIndexOfSpace('pizzapizza') -> -1
lastIndexOfSpace('hardtoreadwithnospaceshuh') -> -1

**Hints**

* You can use some complex `indexOf` calls to find the very last index, but it's easier to loop yourself or to find a JavaScript method that returns the last index of a character in a string. It exists!
* If you don't use a method, the difficult logic is in finding when to return the index and when to return a -1. But it's doable!

---

`hyphenateName` -> replaces the space between the last and next-to-last names with a hyphen

**Example Calls**

hyphenateName('Jaffe Obama') -> 'Jaffe-Obama'
hyphenateName('Kaleziq Musk') -> 'Kaleziq-Musk'
hyphenateName('Colin Jaffe Obama') -> 'Colin Jaffe-Obama'
hyphenateName('Mesuara Kaleziq Musk') -> 'Mesuara Kaleziq-Musk'
hyphenateName('Edward James Olmos McDonnell') -> 'Edward James Olmos-McDonnell'

**Hints**

* This can be solved reasonably easily using string-building.
* Especially if you don't redo your logic for `lastIndexOfSpace`. If it passes the tests, then it works, and you can use that function's return value in this one!
