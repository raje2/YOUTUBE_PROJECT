let video= JSON.parse(localStorage.getItem("video"));

  
// console.log(video.videoId);

let container= document.getElementById("container");
        let div=document.createElement("div");
        div.id="mybox";
   
       let iframe= document.createElement("iframe");
       iframe.src=`https://www.youtube.com/embed/${video.videoId}`;
       iframe.allow= "fullscreen";
       iframe.id="iframe"

       div.append(iframe);


container.append(div);