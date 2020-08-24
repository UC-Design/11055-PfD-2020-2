/* Always write a comment at the top of your file saying what is for
you might even include your name and the date */

// Arrays

//create
var student_names = ["Simon", "Billybob"];

//write to html
document.write("The student names manually");
document.write(student_names[0]);
document.write(student_names[1]);

// write the length
document.write("The number of students in the array");
document.write(student_names.length);

// write out using a for
document.write("the student names automatically");
for(let i = 0; i < student_names.length; i++) {
    document.write(student_names[i]);
}

// add a student
document.write("add a student");
// the prompt function allows you to ask the user to enter a name
student_names.push(prompt("enter a name"));

// write using the same for...
document.write("the student names automatically");
for(let i = 0; i < student_names.length; i++) {
    document.write(student_names[i]);
}


