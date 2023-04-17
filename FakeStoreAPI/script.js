fetch("https://fakestoreapi.com/products/")
    .then(data => data.json())
    // .then(data => console.log(data));
    .then(data => {
        // console.log(data)
        let tableData = ""
        data.map(values => {
            tableData += `<tr>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price}</td>
            <td><img src="${values.image}" class="img-fluid"/></td>
        </tr>`;


        });
        document.getElementById("table_body").innerHTML=tableData

    }).catch(err => console.log(err));
