const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });

  function firstPageAnim() {
    let tl = gsap.timeline();
  
    tl.from("#nav", {
      y: '-10px',
      opacity: 0,
      duration: 2,
      ease: Expo.easeInOut
    })
    .to(".boundingelem", { // Consider adding logic to handle missing element
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay:-1,
      stagger: 0.2
    })
    .from("#herofooter", {
        y: '-10px',
        opacity: 0,
        duration: 1.5,
        delay:-1,
        ease: Expo.easeInOut
      });
  }
  
  function circlemove(){
    //define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function(dets){    
        xscale = gsap.utils.clamp(.8,1.2,dets.clientX -xprev);
        yscale = gsap.utils.clamp(.8,1.2,dets.clientY -yprev);
   
        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale,yscale);
   
    });

  }
  circlemove();





  function circleMouseFollower() {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) `;
    })
  }
  
  circleMouseFollower();
  // Call firstPageAnim after ensuring elements exist (optional)
  window.onload = function() {
    firstPageAnim();
  }
  

  document.querySelectorAll("  .elem").forEach(function(elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave",function (dets){
      gsap.to(elem.querySelector("img"),{
        opacity: 0,
        ease: Power3,
        duration:.3,
      });
     });

    elem.addEventListener("mousemove",function (dets){
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"),{
      opacity: 1,
      ease: Power4,
      top:dets.clientY,
      left: dets.clientX,
     rotate:gsap.utils.clamp(-20,20,diff),
    });
   });
  });
  