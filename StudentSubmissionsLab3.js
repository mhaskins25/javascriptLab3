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

function addSubmission(array, newName, newScore, newDate){
    let newStudentSubmission =
        {
            name: newName,
            score: newScore,
            date: newDate,
            passed: newScore >= 60 //shorthand way of doing the true/false rather than the if statments
        };

    array.push(newStudentSubmission);
    console.log(submissions);

    if (newStudentSubmission.score >= 60){
        newStudentSubmission.passed = true;
    }else{
        newStudentSubmission.passed = false;
    }
    
}
addSubmission(submissions, 'Morgan', 50, '2021-03-25');

function deleteSubmissionByIndex(array, index){
    array.splice(index, 1);
    console.log(submissions);
}
deleteSubmissionByIndex(submissions, 4);


function deleteSubmissionByName(array, name){
    const index = array.findIndex(submission => submission.name === name);
    array.splice(index, 1);
    console.log(submissions)
}
deleteSubmissionByName(submissions, 'Joe');

function editSubmission(array, index, score){
    array[index].score = score;
    if(array[index].score >= 60){
        array[index].passed = true;
    }else{
        array[index].passed = false;
    }
}
editSubmission(submissions, 1, 75);
console.log(submissions);

function findSubmissionByName(array, name){
    const aSubmission = array.find(submission => submission.name === name);
    return aSubmission //very important that you use return when the question asks you to and not console
    //it changes what value actually comes out of the function. With console.log no value is actually returned
}
findSubmissionByName(submissions, 'Jane');

function findLowestScore(array){
    let minScore = array[0].score; //best to use a real value from the array
    let lowestScoreSubmission;
    array.forEach(element =>{
        if(element.score < minScore){
            minScore = element.score;
            lowestScoreSubmission = element;
        }
    })
   return lowestScoreSubmission;

}
findLowestScore(submissions);

function findAverageScore(array){
    let totalScore = 0;
    for(let submission of submissions){
        totalScore += submission.score;
    }
    return totalScore/array.length;
}
findAverageScore(submissions);

function filterPassing(array){
    let passedArray = array.filter(submission => submission.passed); //this is the same thing
    return passedArray;
}
filterPassing(submissions);

function filter90AndAbove(array){
    let passedArray = array.filter(submission => submission.score >= 90);
    return passedArray;
}
filter90AndAbove(submissions);


