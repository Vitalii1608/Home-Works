'use strict';



//1

let a;


if( a === '1' ){

    console.log( "Верно" );
    
} else{

    console.log( "Неверно" );  
}



//2

let item = false;

if( item != true ){

    console.log( "Верно" );
    
} else{

    console.log( "Неверно" );  
}


//краткая форма

item = (item != true)  ? true : false;

console.log( item );




//3


if(  a > 0 && a < 4){

    console.log( "Верно" );
} else{

    console.log( "Неверно" );  
}


//4

let b;

if( a > 3 && a < 12 || b >= 7 && b < 15 ){

    console.log( "Верно" );
} else{

    console.log( "Неверно" );  
}



//5

let month;

month = 12;

if( month > 0 && month < 3 || month == 12 ) {

    console.log( "Зима" );
} else if(month > 2 && month < 6){

    console.log( "Весна" );  
} else if(month > 5 && month < 9){

    console.log( "Лето" );  
} else if(month > 8 && month < 12){

    console.log( "Осень" );  
}else{

    console.log( "Неверно" ); 
}
