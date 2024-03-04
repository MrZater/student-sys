import StudentService from "./services/StudentService"

require('./init')

StudentService.getStudents().then(r=> {
    console.log(r);
})