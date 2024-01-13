const girl = {};
console.log(girl?.name?.surname);

const admin = {
    surname: "Kudinov",
}
console.log(admin.name?.surname);

const car = {
    color: "blue",
    name: "Mazda",
    year: 2010,
}
console.log(car.color);
for (key in car) {
    console.log(key)
    console.log(car[key])
}

let Symbol = Symbol("id");

const boy = {
    name: "Misha",
    [id]: 156
}
let copyboy = boy;
console.log(id.toString);
console.log(boy.name);


const carsrLol = {
    name: "BMv",
}
console.log(carsrLol?.country);

