window.onload=function(){ 

  

    setTimeout(() => {
  
      document.querySelector('.loading-bar').style.display = 'none';
      document.querySelector('body').setAttribute('style','overflow: scroll;');
    
    }, 6000);
    
   
  
    var disheImage = document.querySelectorAll('.image-handle');
    var disheName = document.querySelectorAll('.dish-heading-name');
    var dishTitle = document.querySelectorAll('.dish-title');
    var dishPrice= document.querySelectorAll('.price-food');
    var dropDownMenu = document.getElementById('myDropdown');
   
  
    
    
   
  
  
  
  function addLunch(){
     
      for(var i = 0 ; i < 4 ;i++ ){
        
          disheName[i].textContent = lunchObj[i].name;
          dishTitle[i].textContent = lunchObj[i].desc;
          dishPrice[i].textContent = lunchObj[i].price;
          disheImage[i].src = '';
          disheImage[i].src = lunchObj[i].picture;
      }
  
  }
  
   function addBreakfast(){
    for(var i = 0 ; i < 4 ;i++ ){
        
      disheName[i].textContent = BreakfastObj[i].name;
      dishTitle[i].textContent = BreakfastObj[i].desc;
      dishPrice[i].textContent = BreakfastObj[i].price;
      disheImage[i].src = '';
      disheImage[i].src = BreakfastObj[i].picture;
  }
     
  }
  function addSalads(){
    for(var i = 0 ; i < 4 ;i++ ){
        
      disheName[i].textContent =  saladsObj[i].name;
      dishTitle[i].textContent =  saladsObj[i].desc;
      dishPrice[i].textContent =  saladsObj[i].price;
      disheImage[i].src = '';
      disheImage[i].src =  saladsObj[i].picture;
  }
  
  }
  
   function addCake(){
    for(var i = 0 ; i < 4 ;i++ ){
        
      disheName[i].textContent = cakeObj[i].name;
      dishTitle[i].textContent =  cakeObj[i].desc;
      dishPrice[i].textContent = cakeObj[i].price;
      disheImage[i].src = '';
      disheImage[i].src =   cakeObj[i].picture;
  
    }
  }
   
  
  function addDrink(){
    for(var i = 0 ; i < 4 ;i++ ){
        
      disheName[i].textContent =  DrinkObj[i].name;
      dishTitle[i].textContent =  DrinkObj[i].desc;
      dishPrice[i].textContent =   DrinkObj[i].price;
      disheImage[i].src = '';
      disheImage[i].src =   DrinkObj[i].picture;
  }
  
  }
  function addcatering(){
    for(var i = 0 ; i < 4 ;i++ ){
        
      disheName[i].textContent =  CateringObj[i].name;
      dishTitle[i].textContent =  CateringObj[i].desc;
      dishPrice[i].textContent =   CateringObj[i].price;
      disheImage[i].src = '';
      disheImage[i].src =   CateringObj[i].picture;
  }
  
  }
  
  addBreakfast();
  
    dropDownMenu.addEventListener('click',function(e){
  
          var target = e.target.id;
  
    
  
          if( target === 'Breakfast')
              addBreakfast();
          else if( target === 'Lunch')
              addLunch();
          else if( target === 'Salads')
              addSalads();
          else if( target === 'Cake')
              addCake();
          else if ( target === 'Drink')
              addDrink();
          else if ( target === 'Catering')
              addcatering();
    });
  }
  
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  