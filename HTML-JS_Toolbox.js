var queryEl = document.querySelector("QueryID"); //creates a variable 'queryEl' from a query of the HTML for 'QueryID'

var queryEls = document.getElementsByClassName("ClassName"); //creates a variable 'queryEls' from a class of HTML 'ClassName'

var idEl = document.getElementById("your-ID"); // creates a variable 'idEl' from an HTML id 'your-ID'

var tagEls = document.getElementByTagName("p"); // creates a variable 'tagEls' from the HTML tag 'p'

queryEl.innerHTML = "Replace this for the query"; /*replaces queryEl's value with 'Replace this fore the query'if there is only one
Element selected by the query */

for (var i = 0; i < queryEl.length; i++) {
  queryEls[i].innerHTML = "Replace this for the query"; /*Use this if there are multiple Elements in queryEl*/
}

console.log(queryEl); /*Prints querryEl to the console. on windows, you open it with 'ctrl-Shift-I' and then in the left side click
'console' */

document.body.innerHTML = "this is the new webpage" //replaces the whole webpage for 'this is the new webpage'
