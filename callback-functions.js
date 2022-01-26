let callback = function () {
    console.log("This is First Callback");
};

setTimeout(callback, 3000);

//Since Javascript is asynchronous, this log will be printed on the screen first.
console.log("This isn't Callback");

setTimeout(function () {
    console.log("This is Second callback");
}, 4000);



let data = [
    {
        id: 1,
        name: "Ali Sakaroğlu",
        age: 27,
        phone: "05368218685",
    },
    {
        id: 2,
        name: "Test",
        age: 28,
        phone: "05555555555",
    },
];

function addData(callback) {
    setTimeout(function () {
        data.push(
            {
                id: 3,
                name: "data3",
                age: 33,
                phone: "05555555555",
            },
            {
                id: 4,
                name: "data4",
                age: 34,
                phone: "05555555555",
            },
            {
                id: 5,
                name: "data5",
                age: 35,
                phone: "05555555555",
            }
        );
        callback();
    }, 2000);
}
let list = document.getElementById("list");
function getAllData() {
    setTimeout(function () {
        let output = "<ul>";
        data.forEach((data) => {
            output += `<li> ${data.id} - ${data.name} - ${data.age} - ${data.phone} </li>`;
        });
        output += "</ul> <hr>";
        list.innerHTML = output;
    }, 1000);
}

addData(getAllData);
