    var ici, sc,max, en, resultat, resultatest, nbrtent, randval, niv1, niv2, niv3, nivGame,btnParam;
    

    niv1 = document.getElementById('niv1');
    niv2 = document.getElementById('niv3');
    niv3 = document.getElementById('niv3');

    niv1 = 10;
    niv2 = 5;
    niv3=3;

    max = 30;
    

    function randomize(max){
      return Math.floor(Math.random()*max25+1);
    }

    btnParam = document.getElementById('btnParam');
    btnParam.onclick=function(){

      if(niv1.checked){
        nivGame=n1;
        niv1.checked=false;
      } 
      else if(niv2.checked){
        nivGame=n2;
        niv2.checked=false;
      } 
      else if(niv3.checked){
        nivGame=n3;
        niv3.checked=false;
      } 
    }
    
    randval=randomize();
    alert(randval);

    ici=document.getElementById('ici');
    en=document.getElementById('en');
    resultat = document.getElementById('resultat');

  /*
  en.onclick=function(){
    if(ici.value.trim() !===''){
      
      alert('ok');

   /* }
    else{
      alert('ok');
    }
    */
    en.onclick=function(){
      var  tmp=ici.value;
      ici.value='';
      nbrtent++;
      

      if(nbrtent<niveaux){
        nbrtent ++;
        var tmp= nbr.value.trim();
        var restest = test(tmp);
      /*if(nbr.value.trim()!==''){
        if (nbrtentative < nivGame){
            nbrtentative ++;
            var tmp = nbr.value.trim();
            var restest = test (tmp);
            resultat.innerHTML += 'Tentative N°: '+nbrtentative+' =>' restest + '<br>';
            nbr.value = '';
            */
          }

        }
        if(tmp>randval){
          
          resultat.innerHTML =resutat.innerHTML +'<br>' + 'Tentative N°1 :' + nbrtent + tmp  + ' chiffre trop grand' ;
        }

        else if  (tmp<randval){ 
          
          resultat.innerHTML=resutat.innerHTML +'<br>' + 'Tentative N°2 :' + nbrtent + tmp + ' trop petit';
        }
        else if  (tmp = randaval) {
          resultat.innerHTML = tmp + 'FELICITATION';
          
        }
        else {
          resultat.innerHTML = resuslat.innerHTML +'<br>' + 'fin'; 
        };


    /*function test(param){
      if(param > randval){
        //alert(ngeza b');
        resultattest = 'NY ISA' + param + ' dia Ngeza B';
    }
     else if (param < randval){
      resultattest = 'NY ISA' + param + ' dia kely lotra';
     } 
     else if( param > randaval ){
      resultattest = 'NY ISA' + param + ' OK';
     }
     else
          resultat.innerHTML = resutat.innerHTML+'<br>'+ 'fin';
    }                          

  /*
  var itemlist = document.createElement('li');
      
      itemlist.setAttribute('class','list-group-item');
      resultat.innerHTML= tmp + br ;
      }*/