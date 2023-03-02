const thisTeam = function(data){
    const managerCard = function(manager) {
        return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${manager.name}</h3>
                    <h4>Manager</h4><i class="material-icons">groups</i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${manager.id}</p>
                    <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p class="office">Office Number: ${manager.getOffice}</p>
                </div>
            </div>
        </div>`
    };

    const engineerCard = function(engineer) {
        return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${engineer.name}</h3>
                    <h4>Engineer</h4><i class="material-icons">groups</i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${engineer.id}</p>
                    <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="github">github:<a href = "https://github.com/${engineer.github}"></a>${engineer.github}</p>
                </div>
            </div>
        </div>`
    };

    const internCard = function(intern) {
        return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${intern.name}</h3>
                    <h4>Intern</h4><i class="material-icons">groups</i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${intern.id}</p>
                    <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="school">School: ${intern.school}</p>
                </div>
            </div>
        </div>`
    };

    const teamArray = [];

    teamArray.push(
        data.filter((employee) => employee.getRole() === "Manager")
        .map((manager) => managerCard(manager))
    );
    teamArray.push(
        data.filter((employee) => employee.getRole() === "Engineer")
        .map((engineer) => engineerCard(engineer))
    );
    teamArray.push(
        data.filter((employee) => employee.getRole() === "Intern")
        .map((intern) => internCard(intern))
    );
        
    return teamArray.join('');
}

module.exports = (data) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Card Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <header>
        <div id="headUnit">
            <h1>My Team</h1>
        </div>
    </header>
    <section>
        <div id="carContain" class="d-flex justify-content-center">
            ${thisTeam(data)}
        </div>
    </section>
    <script src="/index.js"></script>
</body>
</html>
    `
}