function BMI(){
    var x,y;
    x= bmi.cao.value
    y= bmi.nang.value
    d=document.getElementById("test");
    var z= x/100;
    var w=y/(z*2);
    if (w<18.5){
        d.style.color="yellow";
        return d.innerHTML="Bạn đang gầy và có nguy cơ phát triển bệnh mức thấp";
    }
    if (18.5<=w & w<=24.9){
        d.style.color="green";
        return d.innerHTML="Bạn đang cân đối và có nguy cơ phát triển bệnh mức trung bình";
    }
    if (25<=w & w<=29.9){
        d.style.color="green";
        return d.innerHTML="Bạn đang hơi béo và có nguy cơ phát triển bệnh mức cao";
    }
    if (30<=w & w<=34.9){
        d.style.color="red";
        return d.innerHTML="Bạn đang béo phì cấp độ 1 và có nguy cơ phát triển bệnh mức cao";
    }
    if (35<=w & w<=39.9){
        d.style.color="red";
        return d.innerHTML="Bạn đang Béo phì cấp độ 2 và có nguy cơ phát triển bệnh mức rất cao";
    }
    if (w>=40){
        d.style.color="red";
        return d.innerHTML="Bạn đang Béo phì cấp độ 3 và có nguy cơ phát triển bệnh mức nguy hiểm";
    }
    
}
