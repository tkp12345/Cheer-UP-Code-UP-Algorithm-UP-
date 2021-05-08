// new Promise((resolve) => {
//         setTimeout(() => {
//             let name = 'Espresso';
//             console.log(name);
//             resolve(name);
//         }, 500);
//     })
//     .then((prevName) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 let name = prevName + ', Americano';
//                 console.log(name);
//                 resolve(name);
//             }, 500);
//         });
//     })
//     .then((prevName) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 let name = prevName + ', Mocha';
//                 console.log(name);
//                 resolve(name);


//             }, 500);
//         });

//     })
//     .then((prevName) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 let name = prevName + ', Latte';
//                 console.log(name);
//                 resolve(name);
//             }, 500);
//         });
//     });

const addCoffee = (name) => {
    return (prevName) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newName = prevName ? `${prevName}, ${name}` : name;
                console.log(newName);
                resolve(newName);
            }, 500);
        });
    };
};

addCoffee('Espresso')()
    .then(addCoffee('Americano'))
    .then(addCoffee('Mocha'))
    .then(addCoffee('Latte'));