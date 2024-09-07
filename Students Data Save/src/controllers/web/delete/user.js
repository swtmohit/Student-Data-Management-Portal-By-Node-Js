const { app, apiPAth, db, apiPath } = require('rohit-node-app');

app.get(apiPath(__filename), async (req, res) => {
    let result;
    let { id } = req.query;
    try { 
        let sql = `DELETE FROM students WHERE id = ${id}`;
        let [queryRes] = await db.promise().query(sql);
         result = {
            swal: {
                icon: 'success',
                title: 'success',
                html: 'User deleted',
                timer: 1000,
                keydownListenerCapture: true
            }
         }
    } catch (e) {

    }
    return res.json(result);
})