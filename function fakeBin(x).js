function fakeBin(x){
  x = x+'' ;
 var z =[];
 for(var i=0;i< x.length;i++){
   if((x[i]*1)<5){
      z[i] =0;
    }else{
     z[i]=1;
   }
 }
   return z.join('')
 }
