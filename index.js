let cursor = document.querySelector(".cursor");
        let cursor2 = document.querySelector(".cursor2");
        let cursorScale = document.querySelectorAll(".cursor-scale");
        let mouseX = 0;
        let mouseY = 0;

        gsap.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
            gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
            });
            gsap.set(cursor2, {
            css: {
                left: mouseX,
                top: mouseY
            }
            });
        }
        });

        window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        });

        cursorScale.forEach((link) => {
        link.addEventListener("mousemove", () => {
            cursor.classList.add("grow");
            if (link.classList.contains("small")) {
            cursor.classList.remove("grow");
            cursor.classList.add("grow-small");
            }
        });

        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("grow");
            cursor.classList.remove("grow-small");
        });
        });




  document.querySelector('.brakes').style.display = 'none'
  document.querySelector('.seat').style.display = 'none'
  document.querySelector('.wheels').style.display = 'none'
  document.querySelector('.battery').style.display = 'none'
  document.querySelector('.motor').style.display = 'none'



document.querySelector('.btn-brakes').addEventListener('mouseover', function(){ 
  gsap.from('.brakes', { opacity: 0})
  gsap.to('.brakes', { opacity: 1, duration: 1.2})
    document.querySelector('.brakes').style.display = 'block'
});

document.querySelector('.btn-brakes').addEventListener('mouseleave', function(){ 
  gsap.from('.brakes', { opacity: 1})
  gsap.to('.brakes', { opacity: 0, duration: 1.2})
  document.querySelector('.brakes').style.display = 'none'
})





document.querySelector('.btn-seat').addEventListener('mouseover', function(){ 
  gsap.from('.seat', { opacity: 0})
  gsap.to('.seat', { opacity: 1, duration: 1.2})
    document.querySelector('.seat').style.display = 'block'
});

document.querySelector('.btn-seat').addEventListener('mouseleave', function(){ 
  gsap.from('.seat', { opacity: 1})
  gsap.to('.seat', { opacity: 0, duration: 1.2})
  document.querySelector('.seat').style.display = 'none'
})




document.querySelector('.btn-wheels').addEventListener('mouseover', function(){ 
  gsap.from('.wheels', { opacity: 0})
  gsap.to('.wheels', { opacity: 1, duration: 1.2})
    document.querySelector('.wheels').style.display = 'block'
});

document.querySelector('.btn-wheels').addEventListener('mouseleave', function(){ 
  gsap.from('.wheels', { opacity: 1})
  gsap.to('.wheels', { opacity: 0, duration: 1.2})
  document.querySelector('.wheels').style.display = 'none'
})




document.querySelector('.btn-battery').addEventListener('mouseover', function(){ 
  gsap.from('.battery', { opacity: 0})
  gsap.to('.battery', { opacity: 1, duration: 1.2})
    document.querySelector('.battery').style.display = 'block'
});

document.querySelector('.btn-battery').addEventListener('mouseleave', function(){ 
  gsap.from('.battery', { opacity: 1})
  gsap.to('.battery', { opacity: 0, duration: 1.2})
  document.querySelector('.battery').style.display = 'none'
})




document.querySelector('.btn-motor').addEventListener('mouseover', function(){ 
  gsap.from('.motor', { opacity: 0})
  gsap.to('.motor', { opacity: 1, duration: 1.2})
    document.querySelector('.motor').style.display = 'block'
});

document.querySelector('.btn-motor').addEventListener('mouseleave', function(){ 
  gsap.from('.motor', { opacity: 1})
  gsap.to('.motor', { opacity: 0, duration: 1.2})
  document.querySelector('.motor').style.display = 'none'
})










//gsap loading animation
var tl = gsap.timeline({defalts:{duration: 5}});

tl.from('.load-box', {scaleY: 0, duration: .5, marginTop: '100px', ease:'power.inOut', transformOrigin: 'bottom', stagger: .2})
.to('.load-box', { scaleY: 1, y: 0, stagger: .2 })
.to('.load-box', { scaleY: 0, marginTop: '-100px', transformOrigin: 'top', stagger: .2 })
.to('.loader', { scaleY: 0, duration: .7, ease: 'power.inout', transformOrigin: 'top'})
.from('.navbar', { opacity: 0, duration: .7})
.from('.hero', {opacity:0, duration:2, ease: 'power.Outs', marginTop: '100px'}, '= -2')
.from('.load-text', { opacity: 0, duration: 1.2, ease:'power.inOut', y: 50, stagger: .4})
.from('.feature-item', {opacity: 0, marginTop: '75px', ease: 'power.inOut', duration: 1, stagger: .4}, '=-3' );

var blurElement = {a:0};

gsap.from('.icon', {opacity:0, duration:1.2, ease: 'power.inOut', stagger: .4, scale: '100', rotate: '180'}, '=-3');
gsap.from(blurElement, 1, {a: 1, onUpdate:applyBlur, duration: 1, ease: 'power.inOut'}, '=-3');

function applyBlur()
{
    gsap.set('.icon', {webkitFilter:"blur(" + blurElement.a + "px)",filter:"blur(" + blurElement.a + "px)"}, '=-3')
};




//slide animation
document.querySelector('.side').style.display = 'none'


 var button = document.querySelectorAll('.bike-feats')
 var slide = gsap.timeline({  onReverseComplete: function() {
    slide.clear()
  }
});

 var back = document.querySelector('.back')

  button.forEach((e) => { 
    e.addEventListener('click', function(){ 
      slide.add(function(){
        document.querySelector('.side').style.display = 'none'
      })

        .to('.load-text', { opacity: 0, duration: .7, ease:'power.inOut', y: 50, stagger: .4},)
        .to('.feature-item', {opacity: 0, marginTop: '75px', ease: 'power.inOut', duration: 1, stagger: .2}, '=-2' )
        .to('.icon', { opacity:0, duration: 1, ease: 'power.inOut', stagger: .2 }, '=-2')
        .to('.main', {duration: 2, ease: 'power.inOut', x: '-65%'}, '=-2')

        .add(function show(){
          gsap.from('.side', { opacity:0, duration: 1,})
          gsap.to('.side', { opacity:1, duration: 1, ease: 'power.inOut'})
          document.querySelector('.side').style.display = 'block'}, '=-1')

          .add( function scroll (){
            if(document.querySelector('.side').style.display === 'block'){
            
            ScrollTrigger.create({
                trigger: '.down-btn',
                start: 'top center',
                end: 'top 100px',
                toggleActions: 'restart none none none'
            })
        
            gsap.from('.down-btn',{
            ease: "power.inOut",
            opacity: 0,
            duration: .5,
            y: '50px',
            stagger: .5
            })
            }
          });

        slide.play()
    })
  })



  back.addEventListener('click', function(e){ 
          e.preventDefault();
            slide.reverse(0)
  });





