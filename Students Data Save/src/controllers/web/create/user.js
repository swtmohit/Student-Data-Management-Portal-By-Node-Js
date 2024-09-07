// const {app , apiPath , db} = require('rohit-node-app');

// app.post(apiPath(__filename) , async (req , res) => {
//     let result;
//     const {name , phone , email , gender} = req.body;

//     let sql = `INSERT INTO students(name , phone , email , gender) VALUES ('${name}','${phone}','${email}','${gender}')`;
//     let [queryRes] = await db.promise().query(sql);
//     console.log(queryRes)
//     result = {
//         swal: {
//             icon: 'success',
//             title: 'success',
//             html: 'user created'
//         },
//     }
//     return res.json(result)
// })

const { app, apiPath, db } = require('rohit-node-app');

app.post(apiPath(__filename), async (req, res) => {
    let result;
    const { name , phone , email , gender } = req.body;

    // if (!name || !phone || !email || !gender) {
    //     result = {
    //         swal: {
    //             icon: 'success',
    //             title: 'success',
    //             html: 'all feilds are required'
    //         },
    //     }
    //     return res.json(result);
    // }

    // validations
    // let errors = [];

    // name || errors.push('name is required');
    // mobile || errors.push('mobile is required');
    // fatherName || errors.push("Father's Name is required");

    // if (mobile.length == 10) {

    //     if (Number(mobile)) {

    //         if (mobile >= 6000000000 && mobile <= 9999999999) {
    //             let sql = `SELECT * FROM users WHERE mobile = ${mobile}`;
    //             let [queryRes] = await db.promise().query(sql);
    //             console.log(queryRes);
    //             queryRes.length && errors.push('mobile already exists');
    //         } else {
    //             errors.push("invalid mobile 3");
    //         }
    //     } else {
    //         errors.push("invalid mobile 2");
    //     }
    // } else {
    //     errors.push("invalid mobile 1");
    // }

    // if (errors.length) {
    //     result = {
    //         swal: {
    //             icon: 'error',
    //             title: 'Oops!',
    //             html: errors
    //         }
    //     }
    //     return res.json(result);
    // }

    try {
        let sql = `INSERT INTO students(name , phone , email , gender) VALUES ('${name}','${phone}','${email}','${gender}')`;
        let [queryRes] = await db.promise().query(sql);
        console.log(queryRes);
        result = {
            swal: {
                icon: 'success',
                title: 'success',
                html: 'user created'
            },
            row: `<tr>
                <td>${name}</td>
                <td>${phone}</td>
                <td>${email}</td>
                <td>${gender}</td>
            </tr>`,
        }
    } catch (err) {
      console.log(err,'---err in create');
      
    }
    return res.json(result);
});