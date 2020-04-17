var ox=document.getElementById('xiaociguai');
var od=document.getElementById('div_digg');
ox.onclick=function(){
    // alert(od.style.animation);
    
    this.style.filter="saturate(7)";
    // ox.-webkit-filter="saturate(7)";
    if(od.style.animation=="5s ease-in-out 0s infinite normal none running jumping")
        od.style.animation="0s ease-in-out 0s infinite normal none running jumping";
    else
    {
        od.style.animation="5s ease-in-out 0s infinite normal none running jumping";
        this.style.filter="";
    }
    
};

var odt=document.getElementById('div_digd');
var oimg = odt.getElementsByTagName('img');
var num = 0;//计数
var num2 = 0;
var t;//定时器
function f1(i){
        num=i;
        num2 = 0;
        t=setInterval(function(){
            if(num==oimg.length)num=0;
            num2++;
            for(var j=0;j<oimg.length;j++){
                oimg[j].style.display='none';
            }
            if(num2==oimg.length*1)
            {
                clearInterval(t);
                return false;
            }
            oimg[num].style.display='block';
            num++;
        },180);
    };
od.onclick=function(){
    clearInterval(t);
    f1(0);
};

