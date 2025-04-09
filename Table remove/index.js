// let car = JSON.parse(localStorage.getItem("from")) || []

// const mydata = () => {
//     const nam = document.getElementById("name").value
//     const address = document.getElementById("address").value
//     const email = document.getElementById("email").value
//     const number = document.getElementById("number").value

//     let fromdata = { name: nam, address: address, email: email, number: number }
//     car.push(fromdata)

//     localStorage.setItem("from", JSON.stringify(car))

//     tddat()
// }
// const tddat = () => {
//     document.getElementById("tbody").innerHTML = car?.map((item, index) => {
//         return (`
//             <tr>
//             <td>${item.name}</td>
//             <td>${item.address}</td>
//             <td>${item.email}</td>
//             <td>${item.number}</td>
//             <td><button onclick=remove(${index})>Remove</button></td>

//             </tr>
//         `)
//     })
//         .join("")
// }
// tddat()
// const remove = (index) => {
//     car.splice(index, 1)
//     tddat();
//     localStorage.setItem("from", JSON.stringify(car))
// }


let fromdata = JSON.parse(localStorage.getItem("from")) || [];
let isEdit = -1;


const mydata = () => {

    const nam = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;

    let user = { name: nam, address: address, email: email, number: number };

    if (isEdit === -1) {
        fromdata.push(user);
    }
    else {


        let updatedData = fromdata.map((item, index) => {
            if (index === isEdit) {
                return user
            }
            else return item
        })
        fromdata = updatedData
    }
    localStorage.setItem("from", JSON.stringify(fromdata));

    tdaat();

}


const tdaat = () => {
    document.getElementById("tbody").innerHTML = fromdata?.map((item, index) => {
        return (
            `
        <tr>
        <td>${item.name}</td>
        <td>${item.address}</td>
        <td>${item.email}</td>
        <td>${item.number}</td>
        <td><button onclick="remove(${index})">Remove</button></td>
        <td><button onclick="edit(${index})">edit</button></td>
        </tr>

        `
        )

    })


        .join("");

}
tdaat();



// const remove = (index) => {
//     fromdata.splice(index, 1);
//     tdaat();
//     localStorage.setItem("from", JSON.stringify(fromdata));

// }


const remove = (index) => {

    let deletdata = fromdata.filter((item, indexrow) => { return (indexrow !== index) })
    console.log(deletdata);
    fromdata = deletdata;
    localStorage.setItem("from", JSON.stringify(deletdata));
    tdaat();

};

document.getElementById("tbody").style.color = "green";



const edit = (indeex) => {
    isEdit = indeex;

    const record = fromdata?.find((item, index) => index === indeex);
    // console.log(record);


    document.getElementById("name").value = record.name;
    document.getElementById("address").value = record.email;
    document.getElementById("email").value = record.number;
    document.getElementById("number").value = record.pin;

    // fromdata.record = indeex;
    // console.log(fromdata);


}

const mydata1 = () => {

    // const nam = document.getElementById("name").value;
    // const eml = document.getElementById("email").value;
    // const num = document.getElementById("teel").value;
    // const pn = document.getElementById("pin").value;

    // let user = { name: nam, email: eml, number: num, pin: pn };
    // fromdata.push(user);

    // tdaat()

}

