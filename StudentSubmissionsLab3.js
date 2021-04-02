const submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true,
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true,
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false,
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true,
    }
];

// for(let submission of submissions){
//     console.log(`Name: ${submission.name}, Score: ${submission.score}, Date: ${submission.date}, Passed: ${submission.passed}`
//     );
// }

function addSubmission(array, newName, newScore, newDate){
    let newStudentSubmission =
        {
            name: newName,
            score: newScore,
            date: newDate,
            passed: true,
        };

    array.push(newStudentSubmission);
    console.log(submissions);

    if (newStudentSubmission.score >= 60){
        newStudentSubmission.passed = true;
    }else{
        newStudentSubmission.passed = false;
    }
    
}
//addSubmission(submissions, 'Morgan', 50, '2021-03-25');

function deleteSubmissionByIndex(array, index){
    array.splice(index, 1);
    console.log(submissions);
}
//deleteSubmissionByIndex(submissions, 4);


function deleteSubmissionByName(array, name){
    const index = array.findIndex(submission => submission.name === name);
    array.splice(index, 1);
    console.log(submissions)
}
//deleteSubmissionByName(submissions, 'Joe');

function editSubmission(array, index, score){
    array[index].score = score;
    if(array[index].score >= 60){
        array[index].passed = true;
    }else{
        array[index].passed = false;
    }
}
//editSubmission(submissions, 1, 75);
//console.log(submissions);

function findSubmissionByName(array, name){
    // return array.name === name;
    // console.log(submissions.find());
    const index = array.find(submission => submission.name === name);
    console.log(submissions.find());
}

function findLowestScore(array){

}

function findAverageScore(array){

}

function filterPassing(array){

}

function filter90AndAbove(array){
    
}


