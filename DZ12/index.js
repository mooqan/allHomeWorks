//ZADACHA #1

exports.parity = function(num1){
    if(num1%2 === 0){
        return true;
    } else {
        return false;
  }
  };
  
  exports.range = function(a, b){
      if(a < b){
         for(let c = 0; c < b; c++){
             if(c > a &&  c < b){
              console.log(c);
             }
         } 
         return true;
      }
      if ( a > b ){
          for(let c = 0; c < a; c++){
              if(c < a && c > b){
              console.log(c);
              }
          } 
          return true;
      } else {
          return false;
      }
  };
  
  //ZADACHA #2
  
  const user = { 
      age: 34,
      name: 'Bastian',
      surname: 'Scholz',
      position: 'Senior JS developer',
      password: '123456789adminadmin'
  };
   
  exports.checkingPassword = function(){
      if(user.password.length >= 9){
          return 'У вас слишком длинный пароль';
      }else if(user.password.length < 9){
          return 'У вас слишком короткий пароль';
      }
  };
  
  exports.checkingUser = function(){
      if(user.name =='' && user.surname =='' && user.position == ''){
          return 'все поля обязательны';
      } else if(user.name == '' && user.surname == ''){
          return 'поля user.name, user.surname обязательны!';
      }else if(user.surname == '' && user.position == ''){
          return 'поля user.surname, user.position обязательны!';
      } else if(user.name == '' && user.position == ''){
          return 'поля user.name, user.position обязательны!';
      } else if(user.name == ''){
          return 'поле user.name обязательно!';
      } else if(user.surname == ''){
          return 'поле user.surname обязательно!';
      } else if(user.position == ''){
          return 'поле user.position обязательно!';
      }
  };
  
  exports.arrayCheck = function(array, value){
      if(array.includes(value)){
          return true;
      } else {
          return false;
      }
  };
  exports.arrayReverse = function (array){
      var output = [];
      while (array.length) {
        output.push(array.pop());
    }
  
    return output;
};

const {parity, range,checkingUser, checkingPassword,arrayCheck,arrayReverse} = require('./lib/module');