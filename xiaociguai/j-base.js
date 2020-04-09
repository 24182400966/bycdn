var ox=document.getElementById('xiaociguai');
        ox.onclick=function(){
            var od=document.getElementById('div_digg');
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