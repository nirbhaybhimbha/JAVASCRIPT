// let user = JSON.parse(localStorage.getItem("use")) || [];

// const maydata = () => {
//     const namee = document.getElementById("name").value;
//     const eml = document.getElementById("email").value;
//     const numberr = document.getElementById("number").value;
//     const piin = document.getElementById("pin").value;

//     let data = { name: namee, email: eml, number: numberr, pin: piin };

//     user.push(data);

//     localStorage.setItem("use", JSON.stringify(user));

//     user1();
//     console.log(data);
// }


// const user1 = () => {
//     document.getElementById("tbodya").innerHTML = user?.map((item, index) => {
//         return (
//             `
//         <tr>
//         <td>${item.name}</td>
//         <td>${item.email}</td>
//         <td>${item.number}</td>
//         <td>${item.pin}</td>
//         </tr>
//         `
//         )
//     })

//         .join("")
// }
// user1();


// // 
// // 
// // 
// // 
// // 
// // 
// // 



let fromdata = JSON.parse(localStorage.getItem("from")) || [];
let isEdit = -1;


const maydataa = () => {

    const nam = document.getElementById("name").value;
    const eml = document.getElementById("email").value;
    const num = document.getElementById("teel").value;
    const pn = document.getElementById("pin").value;

    let user = { name: nam, email: eml, number: num, pin: pn };

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
        <td>${item.email}</td>
        <td>${item.number}</td>
        <td>${item.pin}</td>
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
    document.getElementById("email").value = record.email;
    document.getElementById("teel").value = record.number;
    document.getElementById("pin").value = record.pin;

    // fromdata.record = indeex;
    // console.log(fromdata);


}

const maydataa1 = () => {

    // const nam = document.getElementById("name").value;
    // const eml = document.getElementById("email").value;
    // const num = document.getElementById("teel").value;
    // const pn = document.getElementById("pin").value;

    // let user = { name: nam, email: eml, number: num, pin: pn };
    // fromdata.push(user);

    // tdaat()

}