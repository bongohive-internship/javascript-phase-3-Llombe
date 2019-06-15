// solutions to the exercises mentioned in the readme should be in this file.
<html>
    <body>
        <script>
function integer(a, b) {
   if (a >= 0 && b >= 0) {
       if (a != b) {
           console.log("The larger number is " + Math.max(a, b));
       } else {
           console.log("Both numbers are equal!")
       }
   } else {
       console.log("Please add an integer!");
   }
}

for (var i = 0; i <= 15; i++) {
   if (i % 2 === 0) {
       console.log(i + ' is even');
   } else {
       console.log(i + ' is odd');
   }
}

let sum = 0;
for (let x = 0; x < 1000; x++) {
   if (x % 3 === 0 || x % 5 === 0) {
       sum += x;
   }
}
console.log(sum);
        </script>
    </body>
</html>
