import { student } from "./studentobject.js";
//arrow function
const message = ()=> {
    console.log("Hello Module messsage");
    ///console.log(student.getStudentMessage());
    return student.getStudentName() + ", you are " + student.age + " years old.";
};
export default message; //Exporting Message function so that it can be used from other files