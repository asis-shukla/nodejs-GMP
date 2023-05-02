/*
TASK 1.1

Write a program which reads a string from the standard input stdin, reverses it and then writes it to 
the standard output stdout.
1 - The program should be started from npm script via nodemon (i.e. npm run task1).
2 - The program should be running in a stand-by mode and should not be terminated after the 
first-string processing.

Example:

input:
ashish
hsihsa

123456
654321

*/

function reverse(str) {
    return str.split("").reverse().join("") + "\n"
}

process.stdin.on("data", (data) => {
    const str = data.toString();
    console.log(reverse(str.replace("\n", "")));
})
