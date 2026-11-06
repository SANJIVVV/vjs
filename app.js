app.get("/students", (req, res) => {
//initializing students array  of students objects. 
    const students = [
        { regno: MX101, name: "Arun", CGPA: 8.5 },
        { regno: MX102, name: "Meena", CGPA: 9.2 },
        { regno: MX103, name: "Ravi", CGPA: 7.8 }
    ];

res.render("students", { students }); //Passing students object array to students.ejs template 

});
