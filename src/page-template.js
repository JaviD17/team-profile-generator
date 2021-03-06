const generateEmployees = employeesArr => {
    const engineerEmployees = employeesArr.filter(add => {
        if (add.engineer) {
            return true;
        }
        else {
            return false;
        }
    });

    const internEmployees = employeesArr.filter(add => {
        if (add.intern) {
            return true;
        }
        else {
            return false;
        }
    });

    const engineerEmployeeHtmlArr = engineerEmployees.map(({ confirmAdd, add, name, id, email, addMore }) => {
        return ``
    });
    return `
            <div class="col-xs-6 col-sm-4 border">
                <div class="card">
                    <div class="card-header">
                        ${employeesArr.name}
                        <br>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        ${employeesArr.add}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employeesArr.id}</li>
                        <li class="list-group-item">Email: Javi@gmail.com</li>
                        <li class="list-group-item">Office Number: 1</li>
                    </ul>
                </div>
            </div>`;
};

module.exports = templateData => {
    console.log(templateData);

    // destructure projects and about data from templateData based on their property key names
    // ... stands for 'rest operator' where it's used, often confused with the 'spread operator' in this context

    const { name, id, email, office, ...employees } = templateData;


    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
        <link rel="stylesheet" href="../src/style.css">
    </head>
    
    <body>
        <div class="title-container">
            <h1 class="text-center text-uppercase">My Team</h1>
        </div>
    
        <div class="container main-container">
            <div class="row">
                <div class="col-xs-6 col-sm-4 border">
                    <div class="card">
                        <div class="card-header">
                            ${name}
                            <br>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            Manager
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: 72295292</li>
                            <li class="list-group-item">Email: Javi@gmail.com</li>
                            <li class="list-group-item">Office Number: 1</li>
                        </ul>
                    </div>
                </div>
                ${generateEmployees(employees)}
                <div class="col-xs-6 col-sm-4 border">
                    <div class="card">
                        <div class="card-header">
                            Javi
                            <br>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            Manager
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: 72295292</li>
                            <li class="list-group-item">Email: Javi@gmail.com</li>
                            <li class="list-group-item">Office Number: 1</li>
                        </ul>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-4 border">
                    <div class="card">
                        <div class="card-header">
                            Javi
                            <br>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            Manager
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: 72295292</li>
                            <li class="list-group-item">Email: Javi@gmail.com</li>
                            <li class="list-group-item">Office Number: 1</li>
                        </ul>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-4 border">
                    <div class="card">
                        <div class="card-header">
                            Javi
                            <br>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            Manager
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: 72295292</li>
                            <li class="list-group-item">Email: Javi@gmail.com</li>
                            <li class="list-group-item">Office Number: 1</li>
                        </ul>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-4 border">
                    <div class="card">
                        <div class="card-header">
                            Javi
                            <br>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            Manager
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: 72295292</li>
                            <li class="list-group-item">Email: Javi@gmail.com</li>
                            <li class="list-group-item">Office Number: 1</li>
                        </ul>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-4 border">
                    <div class="card">
                        <div class="card-header">
                            Javi
                            <br>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            Manager
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: 72295292</li>
                            <li class="list-group-item">Email: Javi@gmail.com</li>
                            <li class="list-group-item">Office Number: 1</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
        </script>

        <footer class="container text-center py-3">
            <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${name}</h3>
        </footer>
    </body>
    
    </html>`;
};