 export default function(timestamp) {
     const data = new Date(+timestamp);
     const month = (data.getMonth() + 1.).toString()
         .padStart(2, "0");
     const year = data.getFullYear();
     const day = data.getDate().toString()
         .padStart(2, "0");
     return `${year}-${month}-${day}`

 }