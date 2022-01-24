

const add_product = document.getElementById('add_product');
const non = document.getElementById('non');
const plist = document.getElementById('plist');
const add_box = document.querySelector('.product-add-box');

const product = document.getElementById('product');


add_product.addEventListener('click', function(){
    add_box.style.display = 'block';
});

non.addEventListener('click', function(){
    add_box.style.display = 'none';
});


product.addEventListener('submit', function(e){
    e.preventDefault();

    let namee = this.querySelector('input[name="namee"]').value;
    let price = this.querySelector('input[name="price"]').value;
    let sale = this.querySelector('input[name="sale_price"]').value;
    let photoo = this.querySelector('input[name="photoo"]').value;

    let product_arr;
    
    if( dataaGet('products') ){
        product_arr = dataaGet('products');
    }else{
        product_arr = [];
    }


    product_arr.push({
        namee    : namee,
        price   : price, 
        sale    : sale, 
        photoo   : photoo 
    });


    dataaSend('products', product_arr);

    allProducts(); 
    


});



allProducts();
function allProducts(){

    let all_products = dataaGet('products');

    let dataa = '';

    all_products.map(pdata => {
        dataa += `

        <div class="col-md-3 my-3">
            <div class="card">
                <img class="card-image" src="${pdata.photoo}" alt="">
                <div class="card-body">
                    <h3>${pdata.namee}</h3>
                    <p> <span class="regular-price">$200</span>  <span class="sale-price">$200</span> </p>

                    <br>
                    <button class="btn btn-success">Add to cart</button>
                </div>
            </div>
        </div>
        
        
        `;

    });

    plist.innerHTML = dataa;


};








// const product= [

// {
//     name   : 'T-shirt',
//     Price  :  120,
//     sell   :  100,
//     photo  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZllQqPO4CE2se9qVfx5EvmKp51JCQZoL1Q&usqp=CAU'
// },
// {
//     name   : 'T-shirt',
//     Price  :  120,
//     sell   :  100,
//     photo  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZllQqPO4CE2se9qVfx5EvmKp51JCQZoL1Q&usqp=CAU'
// },
// {
//     name   : 'T-shirt',
//     Price  :  120,
//     sell   :  100,
//     photo  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZllQqPO4CE2se9qVfx5EvmKp51JCQZoL1Q&usqp=CAU'
// },


// ];


// dataSend('products',product);



const devs_form = document.getElementById('devs_form');
const devs_area = document.querySelector('.devs-area');














devs_form.addEventListener('submit', function(e){
    e.preventDefault();

    let name = this.querySelector('input[name="name"]');
    let gender = this.querySelector('input[name="gender"]:checked');
    let skill = this.querySelectorAll('input[name="skill"]:checked');
    let photo = this.querySelector('input[name="photo"]');

    let skills_arr = [];

    for(let i = 0; i < skill.length ; i++){
        skills_arr.push(skill[i].value);
    }

    let data_arr;
    if(dataGet('devs')){
        data_arr = dataGet('devs');
    }else{
        data_arr = [];
    }

    data_arr.push({
        name : name.value, 
        gender : gender.value, 
        skills : skills_arr,
        photo : photo.value
    });

    dataSend('devs', data_arr);
  
    allDevs();

});


allDevs();
function allDevs(){
    let all_devs = dataGet('devs');

    let data = '';

    all_devs.map(d => {

   let lists = '';

        d.skills.map(list => {
            lists += '<li class="list-group-item"> '+ list +'  </li>';
        });

        data += `
          <div class="col-md-4 my-3">
			<div class="card">
				<img style="width:100%; height:250px; object-fit: cover; " class="card-img" src="${ d.photo }" alt="">
						<div class="card-body">
						<h2>${ d.name }</h2>
						<p>Gender : ${ d.gender }</p>
							<hr>
							skills 
								<hr>
								<ul class="list-group"> 
                                    ${ lists }	
								</ul>
								
							</div>
						</div>
					</div>
        
        `;

    });

    devs_area.innerHTML = data;

};



// Fiverr counter

const fiver_order = document.getElementById('fiver_order');
const counter = document.querySelector('.counter');





fiver_order.addEventListener('submit' , function(e){

e.preventDefault();



let date =this.querySelector('input[type="date"]').value;
let time =this.querySelector('input[type="time"]').value;




 
setInterval(() =>{


    let start_time = new Date();
    let end_time = new Date(date +' ' + time);



    let time_diff = Math.floor(Math.abs(end_time.getTime() - start_time.getTime()));


    let total_sec = Math.floor(time_diff / 1000);
    let total_min = Math.floor(total_sec / 60);
    let total_hours = Math.floor(total_min / 60);
    let total_day = Math.floor(total_hours / 24);

    let hours = total_hours - (total_day * 24);
    let min = total_min - (total_day * 24 * 60) - (hours * 60);
    let sec = total_sec - (total_day * 24 * 60 * 60) - (hours * 60 * 60 ) - (min * 60);



counter.innerHTML = `  ${total_day > 9 ? total_day : '0'+total_day} : ${hours > 9 ? hours : '0'+hours} : ${min > 9 ? min : '0'+min } : ${sec > 9 ? sec : '0'+sec}`




}, 1000 );





});

// age check






const age_counter = document.getElementById('age_counter');
const counterr = document.querySelector('.counterr');





age_counter.addEventListener('submit' , function(e){

e.preventDefault();



let datee =this.querySelector('input[type="date"]').value;
let timee =this.querySelector('input[type="time"]').value;




 
setInterval(() =>{


    let start_timee = new Date();
    let end_timee = new Date(datee +' ' + timee);



    let timee_diff = Math.floor(Math.abs( start_timee.getTime() - end_timee.getTime()));


    let totall_sec = Math.floor(timee_diff / 1000);
    let totall_min = Math.floor(totall_sec / 60);
    let totall_hours = Math.floor(totall_min / 60);
    let totall_day = Math.floor(totall_hours / 24);
    let totall_month = Math.floor(totall_day / 30);
    let totall_years = Math.floor(totall_month / 12);


let monthA = totall_month - (totall_years * 12);
let dayA = totall_day - (totall_years * 12 * 30) - (monthA * 30);
let hoursA = totall_hours - (totall_years * 12 * 30 * 24 ) - ( monthA * 30 * 24) - (dayA * 24);
let minA = totall_min - (totall_years * 12 * 30 * 24 * 60 ) - ( monthA * 30 * 24 * 60) - (dayA * 24 * 60) - (hoursA * 60);
let secA = totall_sec - (totall_years * 12 * 30 * 24 * 60 * 60 ) - ( monthA * 30 * 24 * 60 * 60 ) - (dayA * 24 * 60 * 60) - (hoursA * 60 * 60) - (minA * 60); 



counterr.innerHTML = `Yeaes: ${totall_years} Month : ${monthA} Day :${dayA > 9 ? dayA : '0'+dayA} Hours : ${hoursA > 9 ? hoursA : '0'+hoursA} Min : ${minA > 9 ? minA : '0'+minA } Sec : ${secA > 9 ? secA : '0'+secA}`


}, 1000 );


});
