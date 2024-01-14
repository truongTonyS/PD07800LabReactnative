//dữ liệu đầu vào được cung cấp
const oldData = [
    { code: 'ab', name: 'Son moi' },
    { code: 'ac', name: 'Sữa rửa mặt' },
    { code: null, name: null },
    { code: null, name: '' },
  ];


//lấy thông tin mỹ phẩm có mã "ab" newda['ab']
//kết quả :{code: 'ab',name: 'Sôn môi'}

 //Sử dụng phương thức Object.fromEntries để chuyển đổi từ array sang object
 const parseArrayToObject = ({ array = [], keyId = "" }) =>
 Object.fromEntries(
   array?.map(item => [keyId ? item?.[keyId] : item, item]) || []
 );
 //Sử dụng phương thức Object.keys loại bỏ các dữ liệu không đạt yêu cầu
 const filterObject = obj => {
    Object.keys(obj).forEach(key => {
      const item = obj[key];
      if (!item || item.code === null || item.name === null || item.name === '') {
        delete obj[key];
      }
    });
  };

const newData = parseArrayToObject({ array: oldData, keyId: 'code' });
filterObject(newData);
console.log(newData);

 