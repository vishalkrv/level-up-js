/**
 * @name: Parentheses Checker
 * @description: Efficiently checks whether or not the input string’s opening and closing brackets are correctly nested.
 * @input: A string containing opening and closing brackets
 * @output: A boolean value-true or false
 * @sampleInput: "{ [ ] ( ) }"
 * @sampleInput: "{ [ ( ] ) }"
 * @sampleOutput: "true"
 * @sampleOutput: "false"
 */

// function balancedParentheses (str) {
//   let stack = [];
//   let match = {
//     "(":")",
//     "{":"}",
//     "[":"]",
//   }
//   for(var i = 0 ; i < str.length; i++){
//     if(str[i] === '')
//   }
// }


// balancedParentheses('{ [ ] ( ) }')

length = 10;
function func() {
	console.log(this.length);
}

var obj = {
  length: 5,
  thisFunc: function(func) {
    func();
    arguments[0]();
  }
};

obj.thisFunc(func, 3);

