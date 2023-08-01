function submit(){
let a=parseInt(document.getElementById("name").value);
let i=0;
let c=0;
   while(a>0){
    let b=a%10;
    a=Math.floor(a/10);
    if(b==0||b==1){
     c+=(b*Math.pow(2,i))
      i++;
    }
    else{
        document.getElementById("name1").value="invalid";
        return "invalid";
    }
   }if(c!=0)document.getElementById("name1").value=c; return c;
}
function hexa(){ 
  let n=parseInt(document.getElementById("name").value);
  let c=parseInt(submit(n));
  let c1=0;
  let ch=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  let r;
  let h="";
  console.log(c);
  while(c>0){
    r=c%16;
    h=ch[r]+h;
    c1++
    c=Math.floor(c/16);
  }
  document.getElementById("name1").value=h;
  
}
function octal(){ 
  let n=parseInt(document.getElementById("name").value);
  let c=parseInt(submit(n));
  
  let r;
  let h="";
  console.log(c);
  while(c>0){
    r=c%8;
    h=r+h;
    c=Math.floor(c/8);
  }
  document.getElementById("name1").value=h;

}
