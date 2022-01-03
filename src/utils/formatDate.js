 export default function(timestamp, showTime = false) {
     const data = new Date(+timestamp);
     const month = (data.getMonth() + 1.).toString()
         .padStart(2, "0");
     const year = data.getFullYear();
     const day = data.getDate().toString()
         .padStart(2, "0");
     let str = `${year}-${month}-${day}`;
     if (showTime) {
         // 如果为true的话需要转换时分秒
         const hour = data.getHours().toString().padStart(2, '0');
         const min = data.getMinutes().toString().padStart(2, '0');
         const secods = data.getSeconds().toString().padStart(2, "0");
         str += `  ${hour}:${min}:${secods}`
     }
     return str
 }