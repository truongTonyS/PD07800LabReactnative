const class1 = [
    {
        mssv:"PS000",
        name: "Nguyen van A",
        avgPoint: 8.9,
        avgTraningPoint: 7,
        status: "pass",
    },
    {
        mssv:"PS001",
        name: "Nguyen van B",
        avgPoint: 4.9,
        avgTraningPoint: 10,
        status: "pass",
    },
];
const class2 = [
    {
        mssv:"PS002",
        name: "Nguyen van C",
        avgPoint: 4.9,
        avgTraningPoint: 10,
        status: "pass",
    },
    {
        mssv:"PS003",
        name: "Nguyen van D",
        avgPoint: 10,
        avgTraningPoint: 10,
        status: "pass",
    },  
    
    {
        mssv:"PS004",
        name: "Nguyen van E",
        avgPoint: 10,
        avgTraningPoint: 2,
        status: "pass",
    },

];
//Sắp xếp danh sách sinh vien thep avgPoint từ cao xuống thấp

const sortedByAvgPoint = [...class1, ...class2].sort((a, b) => b.avgPoint - a.avgPoint);
console.log("Danh sách sinh viên theo avgPoint từ cao xuống thấp:");
console.log(sortedByAvgPoint);

//Sắp xếp danh sách sinh viên theo avgTraningPoint từ cao xuống thấp

const sortedByTraningPoint = [...class1, ...class2].sort((a, b) => b.avgPoint - a.avgTraningPoint);
console.log("Danh sách sinh viên theo avgTraningPoint từ cao xuống thấp:");
console.log(sortedByTraningPoint);

//Tìm sinh viên có avgPoint và avgTraningPoint cao nhất
const allStudents = [...class1, ...class2];
const maxAvgPointStudent = allStudents.reduce((max, student) =>(student.avgPoint > max.avgPoint ? student : max));
const maxAvgTraningPointStudent = allStudents.reduce((max, student) => (student.avgTraningPoint > max.avgTraningPoint ? student : max));

console.log("Thông tín sinh viên có avgPointn cao nhất:");
console.log(maxAvgPointStudent);

console.log("Thông tin sinh vien có avgTraningPoint cao nhất:");
console.log(maxAvgTraningPointStudent);
