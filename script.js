var element = document.getElementById('element');
    var heightInput = document.getElementById('height');
    var widthInput = document.getElementById('width');
    var borderRadiusInput = document.getElementById('border');
    var heightval = document.getElementById('heightval');
    var widthval = document.getElementById('widthval');
    var borderval = document.getElementById('borderval');
    var martop = document.getElementById('martop');
    var marleft= document.getElementById('marleft');

    heightInput.addEventListener('input', function() {
        element.style.display='block';
        element.style.height = heightInput.value + "px";
        heightval.innerHTML= this.value + "px";
    });

    widthInput.addEventListener('input', function() {
        element.style.display='block';
        element.style.width = widthInput.value + "px";
        widthval.innerHTML=this.value + "px";
    });

    borderRadiusInput.addEventListener('input', function(){
        element.style.display='block';
        element.style.borderRadius = borderRadiusInput.value + "px";
        borderval.innerHTML=this.value + "px";
    });

    marleft.addEventListener('input',function(){
        element.style.marginLeft=this.value+'px';
        document.getElementById('marleftval').innerHTML=this.value+'px';
    })
    martop.addEventListener('input',function(){
        element.style.marginTop=this.value+'px';
        document.getElementById('martopval').innerHTML=this.value+'px';
    })

    document.getElementById('color').addEventListener('input',function(){
        element.style.backgroundColor=this.value;
        document.getElementById('colorval').innerHTML=this.value;
    })
    document.getElementById('rotate').addEventListener('input',function(){
        element.style.rotate=this.value+'deg';
        document.getElementById('rotateval').innerHTML=this.value+'deg'
    })