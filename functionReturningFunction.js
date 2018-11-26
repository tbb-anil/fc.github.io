function interviewQuestion(job) {
    if (job === 'designer'){
         return function (name) {
        console.log(name + ', can you please explain what ux design is?');

        }
    }
    else if (job=== 'teacher'){
        return function (name) {
            console.log('what subject do you teach,' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello' + name + ', what do you do?');
        }
    }
}
var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('john');