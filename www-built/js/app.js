(function(){var e=document.querySelector("#dial");e&&(e.onclick=function(){var e=new MozActivity({name:"dial",data:{number:"+34"}})});var t=document.querySelector("#add-contact");t&&(t.onclick=function(){var e=new MozActivity({name:"new",data:{type:"webcontacts/contact"}})});var n=document.querySelector("#send-sms");n&&(n.onclick=function(){var e=new MozActivity({name:"new",data:{type:"websms/sms"}})});var r=document.querySelector("#compose-email");r&&(r.onclick=function(){var e=new MozActivity({name:"new",data:{url:"mailto:ejemplo@email.com"}})});var i=document.querySelector("#take-picture");i&&(i.onclick=function(){var e=new MozActivity({name:"pick",data:{type:["image/png","image/jpg","image/jpeg"]}})});var s=document.querySelector("#browse-picture");s&&(s.onclick=function(){var e=new MozActivity({name:"browse",data:{type:"photos"}})});var s=document.querySelector("#share");s&&(s.onclick=function(){var e=new MozActivity({name:"share",data:{number:1}})})})(),define("../webapp",function(){}),define("../app",["require","./webapp"],function(e){e("./webapp")})