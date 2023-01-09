function supr_alert(num){
    switch(num){
        case 1:
            alert("啥？你说你想要这个？"+"\n"+"想的倒美！(￣▽￣)");
            break;
        case 2:
            window.location.href="redirect.html";
            break;
        }
}

function audio_play(the_switch){
    switch(the_switch){
        case 1:
            var audio = document.getElementById("../music/effect/cilck_research.wav");
            audio.play();
            break;
        case 2:
            var audio = document.getElementById("../music/effect/world_news.wav");
            audio.play();
            break;
        default:
            alert("出现了BUG！"+"如果可以的话，请对我反馈！");
            break;
    }
}

function sleep(time){
    return new Promise(function(resolve){
    setTimeout(resolve, time); 
    });  
}

function ScreenWidth() {      //获取屏幕尺寸，判断PC端或移动端
    if (/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Fennec|BlackBerry|Mobile|IEMobile|MQQBrowser|JUC|Fennec|WosBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent)) {
//如果是移动端，则跳转到移动端对应的页面
          window.location.href = 'trans.html';
      }
  }

function CookieCreate(){
    var user=getCookie("userchoice");
    user = 1;
    alert("Cookie已设置，也许你不会再传送回来。。。"+"毕竟这个b的水平谁知道会不会出BUG");
    setCookie("userchoice",user,10);
}

function CookieCheck(){
    var user=getcookie("userchoice");
    if(user == 1){
        return 1;
    }else return 0;
}

function alert(e){
    $("body").append("<div id='msg'><span>"+e+"</span></div>");
    clearmsg();
}

function clearmsg(){
    var t = setTimeout(function(){
        $("#msg").remove();
    },2000)
};

function snow() {
    // 1、定义一片雪花模板
    var flake = document.createElement('div');
    // 雪花字符 ❄❉❅❆✻✼❇❈❊✥✺
    flake.innerHTML = '❅';
    flake.style.cssText = 'position:absolute;color:#fff;';
   
    //获取页面的高度 相当于雪花下落结束时Y轴的位置
    var documentHieght = window.innerHeight;
    //获取页面的宽度，利用这个数来算出，雪花开始时left的值
    var documentWidth = window.innerWidth;
   
    //定义生成一片雪花的毫秒数
    var millisec =10;
    //2、设置第一个定时器，周期性定时器，每隔一段时间（millisec）生成一片雪花；
    setInterval(function() { //页面加载之后，定时器就开始工作
    //随机生成雪花下落 开始 时left的值，相当于开始时X轴的位置
    var startLeft = Math.random() * documentWidth;
   
    //随机生成雪花下落 结束 时left的值，相当于结束时X轴的位置
    var endLeft = Math.random() * documentWidth;
   
    //随机生成雪花大小
    var flakeSize = 3 + 20 * Math.random();
   
    //随机生成雪花下落持续时间
    var durationTime = 4000 + 7000 * Math.random();
   
    //随机生成雪花下落 开始 时的透明度
    var startOpacity = 0.7 + 0.3 * Math.random();
   
    //随机生成雪花下落 结束 时的透明度
    var endOpacity = 0.2 + 0.2 * Math.random();
   
    //克隆一个雪花模板
    var cloneFlake = flake.cloneNode(true);
   
    //第一次修改样式，定义克隆出来的雪花的样式
    cloneFlake.style.cssText += `
     left: ${startLeft}px;
     opacity: ${startOpacity};
     font-size:${flakeSize}px;
     top:-25px;
      transition:${durationTime}ms;`;
   
    //拼接到页面中
    document.body.appendChild(cloneFlake);
   
    //设置第二个定时器，一次性定时器，
    //当第一个定时器生成雪花，并在页面上渲染出来后，修改雪花的样式，让雪花动起来；
    setTimeout(function() {
     //第二次修改样式
     cloneFlake.style.cssText += `
      left: ${endLeft}px;
      top:${documentHieght}px;
      opacity:${endOpacity};`;
   
     //4、设置第三个定时器，当雪花落下后，删除雪花。
     setTimeout(function() {
     cloneFlake.remove();
     }, durationTime);
    }, 0);
   
    }, millisec);
   }