var exec = require('child_process').exec;

var branch = process.env.TRAVIS_BRANCH,
    pr = process.env.TRAVIS_PULL_REQUEST,
    pr_branch = process.env.TRAVIS_PULL_REQUEST_BRANCH;

var token = process.env.FIREBASE_TOKEN

function deployToFirebase(project) {
    console.log('Deploying to firebase project openforge-'+project);
    if(project === 'dev'){
        exec("firebase use default && firebase deploy --token " + token, function(error, stdout, stderr) {
            console.log(error);
            console.log(stdout);
            console.log(stderr);
        });
    } else if(project === 'qa') {
        exec("firebase use qa && firebase deploy --token " + token, function(error, stdout, stderr) {
            console.log(error);
            console.log(stdout);
            console.log(stderr);
        });
    } else if(project === 'staging') {
        exec("firebase use staging && firebase deploy --token " + token, function(error, stdout, stderr) {
            console.log(error);
            console.log(stdout);
            console.log(stderr);
        });
    } else if(project === 'prod') {
        exec("firebase use production && firebase deploy --token " + token, function(error, stdout, stderr) {
            console.log(error);
            console.log(stdout);
            console.log(stderr);
        });
    }
}

if (
    (branch == 'develop' && (!pr || pr == 'false') )
) {
    deployToFirebase('dev');
} else if (branch == 'qa' && (!pr || pr == 'false')) {
    deployToFirebase('qa');
} else if (branch == 'staging' && (!pr || pr == 'false')) {
    deployToFirebase('staging');
} else if (branch == 'master' && (!pr || pr == 'false')) {
    deployToFirebase('prod');
}