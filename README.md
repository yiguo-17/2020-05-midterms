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
