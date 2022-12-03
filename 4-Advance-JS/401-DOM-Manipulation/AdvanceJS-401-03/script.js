const slides = document.querySelectorAll(".slide");
var counter=0;
slides.forEach(
    (slide, index)=>{
        slide.style.left=`${index *100}%`;
    })

    const goPrev = ()=>{
        if(counter<1)
        counter=3;
        counter--;
        
        slideImage();
    }

    const goNext = () =>{
        if(counter>1)
        counter=-1;
        counter++;
        slideImage();
    }
    const slideImage = () =>{
        slides.forEach(
            (slide) =>{
                slide.style.transform =`translateX(-${counter*100}%)`
            }
        )
    }