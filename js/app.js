function boro_font() {
    //local variables
    var jog_koro = document.querySelector("#plus");
    var biyog_koro = document.querySelector("#minus");
    var me = document.querySelector(".boro_hobo");
    var x = 25;
    var y = 1;
    var z = 1;
   me.style.fontSize=x+"px"
    
    //test functions

    jog_koro.addEventListener("click",function(){
       // me.style.fontSize=(x+y)+"px";
       if(x>=25){
        x++;
       
        me.style.fontSize=x+"px";
       }
  
    });

    biyog_koro.addEventListener("click",function(){
        //me.style.fontSize=(x+(-z))+"px";
        if(x>=26){
            x--;
            me.style.fontSize=x+"px";
        }
        else{
            alert(`The Menimum Value Is ${x}`);
        }
    });


    
}
boro_font();