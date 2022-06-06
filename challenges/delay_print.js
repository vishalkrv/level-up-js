// Write a function that will loop through a list of integers and print the index of each element after a 3-second delay

/* This is the old school ES5 version fix. Here the setTimeout function has another function as its first parameter. 
That function takes the parameter local_i, that is the variable i. It calls another function in return, 
an anonymous function that displays the value of i stored in the variable local_i (line 5).

On line 7, (i) means the function passed to the setTimeout is being invoked for the respective value of i immediately. 
Such a function is known as IIFE (Immediately Invoked Function Expression). And the second parameter, 3000, 
is the time delay before setTimeout executes the IIFE.

Now let’s understand what is happening. First, the for loop will start executing. 
Each value of i will bind to the setTimeout function. That is, 
for values i=0,1,2,3 the binds: setTimeout(0,3000), setTimeout(1,3000), setTimeout(2,3000), and setTimeout(3,3000) are created.
 However, in each loop iteration, setTimeout is passed from the call stack to the event queue instead of getting executed 
 because setTimeout is an asynchronous web API. After the setTimeout command enters the event queue, 
 the next loop iteration occurs. Once the for loop is done executing, that is, the call stack is empty, 
 the event queue passes the setTimeout commands to the call stack to execute them. */

// const array = [5, 11, 18, 25]
// for (var i = 0; i < array.length; i++) {
//   setTimeout(
//     (function (local_i) {
//       return function () {
//         console.log('Element: ' + array[local_i] + ', at index: ' + local_i)
//       }
//     })(i),
//     3000
//   )
// }

/**
 * Changing var to let changes the implementation so that the value of i is “held” until after the timeout finishes.
 * It creates a new binding (storage space) for each loop iteration; each i refers to the binding of one specific iteration
 * and preserves the value that was current at that time. Previously, using var, a single binding was created for i,
 * each loop iteration referred to the same binding hence returning the same value.
 */
const array = [5, 11, 18, 25]
for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log('Element: ' + array[i] + ', at index: ' + i)
  }, 3000)
}
