document.addEventListener('scroll', function(){

    // const navHeight = document.querySelector('nav').offsetHeight;
    // const headerHeight = document.querySelector('header').offsetHeight;

    // const art1Hegiht = document.querySelector('.art1').offsetHeight;
    // const art2Hegiht = document.querySelector('.art2').offsetHeight;
    // const art3Hegiht = document.querySelector('.art3').offsetHeight;
    // const art4Hegiht = document.querySelector('.art4').offsetHeight;

    const scrollValue = window.scrollY;

    console.log(scrollValue);

    const fromBegToArt1 = document.querySelector('.art1').offsetTop;
    const fromBegToArt2 = document.querySelector('.art2').offsetTop;
    const fromBegToArt3 = document.querySelector('.art3').offsetTop;
    const fromBegToQuotes = document.querySelector('.quotes').offsetTop;
    const fromBegToOp2 = document.querySelector('.op2').offsetTop;
    const op1Heigh = document.querySelector('.op1').offsetHeight;
    const art4Hegiht = document.querySelector('.art4').offsetHeight;



    

    if (scrollValue >= fromBegToArt1 ){
        document.querySelector('.art2').classList.add('active')
    } else {
        document.querySelector('.art2').classList.remove('active')
    }
    if (scrollValue >= fromBegToArt2){
        document.querySelector('.art3').classList.add('active')
    } else {
        document.querySelector('.art3').classList.remove('active')
    }
    if (scrollValue >= fromBegToArt3){
        document.querySelector('.art4').classList.add('active')
    } else {
        document.querySelector('.art4').classList.remove('active')
    }

    if (scrollValue >= fromBegToQuotes - (art4Hegiht/2)){
        document.querySelector('.op1').classList.add('active')
    } else {
        document.querySelector('.op1').classList.remove('active')
    }

    if (scrollValue >= fromBegToOp2-(op1Heigh/2)){
        document.querySelector('.op2').classList.add('active')
    } else {
        document.querySelector('.op2').classList.remove('active')
    }
    
    


})
