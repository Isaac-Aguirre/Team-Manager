module.exports = function render(arr) {
    let team = '';
    appendMng =(data)=>{

        return `<div class="shadow bg-white rounded">
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${data.name}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${data.role}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                    <li class="list-group-item">Office number: ${data.officeNumber}</li>
                </ul>
            </div>
            </div>
        </div>`
    }

    appendEng = (data) => {

        return ` <div class="shadow bg-white rounded">
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${data.name}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${data.role}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${data.github}" target="_blank" rel="noopener noreferrer">${data.github}</a></li>
                </ul>
            </div>
            </div>
        </div>`
    }

    appendInt = (data) => {

       return `<div class="shadow bg-white rounded">
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${data.name}</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${data.role}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                    <li class="list-group-item">School: ${data.school}</li>
                </ul>
            </div>
        </div>
        </div>`
    }

    for(let i=0; i < arr.length; i++){
        if (arr[i].role === 'Manager'){
            team += appendMng(arr[i]);
        } else if (arr[i].role === 'Engineer'){
            team += appendEng(arr[i]);
        } else {
            team += appendInt(arr[i]);

        }
    }

    let main =
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Nobile:700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${team}
            </div>
        </div>
    </div>
</body>
</html>`

return main
}
