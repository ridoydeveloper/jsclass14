


 function dataSend(key , arr){

    let data = JSON.stringify(arr);
    localStorage.setItem(key, data);

    return true;


}


function dataGet(key){

    let data = localStorage.getItem(key);

    return data ? JSON.parse(data) : false ;
      
       

};




function dataaSend(keyy , arry){

    let dataa = JSON.stringify(arry);
    localStorage.setItem(keyy, dataa);

    return true;


}


function dataaGet(keyy){

    let dataa = localStorage.getItem(keyy);

    return dataa ? JSON.parse(dataa) : false ;
      
       

};