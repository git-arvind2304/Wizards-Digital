var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y:-50,
    duration:1,
    opacity:0,
    delay:0,
    stagger:0.1,
     
})

tl.from(".center-part1 h1",{
    x:-200,
    duration :0.5,
    opacity:0,
})

tl.from(".center-part1 p",{
    x:-100,
    duration :0.5,
    opacity:0,
})

tl.from(".center-part1 button",{
     
    duration :0.5,
    opacity:0,
})

tl.from(".center-part2 img",{
     
    duration :0.2,
    opacity:0,
    x:100
},"-=0.5")


tl.from("#sectionbottom img",{
    x:-70,
    duration:0.5,
    opacity:0,
    stagger:0.2
    
  
})


 
    
    
  
 
 
 






 var tl2 =gsap.timeline({
    scrollTrigger:{
        scroller:"body",
        trigger:".section2",
        
        start:"top 60%",
        end:"top 0%",
        scrub:2,
        

    }
 })
 
 tl2.from(".services",{
x:-300,
opacity:0,

 })
 tl2.from(".elem.line1.left",{
x:-300,
opacity:0,

 
 },"Anime")

 tl2.from(".elem.line1.right",{
x:300,
opacity:0,


 },"Anime")

 tl2.from(".elem.line2.left",{
x:-300,
opacity:0,
duration:0.5,
 
 },"Arvind")

 tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:0.5,
  
 },"Arvind")