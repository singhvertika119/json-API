import express from "express";
const app = express();
const PORT = 3526;

// displaying data in JSON format

app.get('/', (req, res) => {
    const data = {
        name: "vertika",
        roll_no: 36
    }

    // const newData = JSON.stringify(data);
    res.json(data);

})

app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}/`);
})