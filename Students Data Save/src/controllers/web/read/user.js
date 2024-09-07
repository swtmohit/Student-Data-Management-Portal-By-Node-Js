// const { app, db, apiPath } = require('rohit-node-app');

// app.get(apiPath(__filename), async (req, res) => {
//     let result;

//     let { id } = req.query;

//     // return res.json(result);
// });  

const { app, db, apiPath } = require('rohit-node-app');

app.get(apiPath(__filename), async (req, res) => {
    let result;
    let { id } = req.query;
    try {
        let sql = `SELECT * FROM students`;
        let [queryRes] = await db.promise().query(sql);
        // console.log(queryRes);
        let rows = queryRes.map((row) => {
            return `<tr>
            <td>${row.id}</td>
            <td>${row.name}</td>
            <td>${row.phone}</td>
            <td>${row.email}</td>
            <td>${row.gender}</td>
            <td>
                <button class="border btn btn-danger py-2 delete" data-url="user?id=${row.id}"> 
                <i class="border fa-solid fa-trash-can"></i>
                </button>
                
            </td>
            </tr>`
        })
        result = {
            rows
        }
    } catch (e) {

    }

    return res.json(result);

});

