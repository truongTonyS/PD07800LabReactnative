//yêu cầu thứ nhất : dừng các promise khác nếu một promise thất và log ra lỗi của proise đó
const promise1 = new Promise((resole, reject) => {
    setTimeout(() => {
        reject("lỗi promise 1");
    }, 2000);
});

const promise2 = new Promise((resole, reject) => {
    setTimeout(() => {
        reject("lỗi promise 2");
    }, 3000);
});

const promise3 = new Promise((resole, reject) => {
    setTimeout(() => {
        reject("lỗi promise 3");
    }, 4000);
});

Promise.all([promise1, promise2, promise3])
   .then((results) => {
    console.log("Tất cả các promise đã hoàn thành thành công");
   })
   .catch((error) =>{
    console.log("Promise thất bại", error);
   });
