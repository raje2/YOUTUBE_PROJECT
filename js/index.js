 // serach java start here---------


 const apikey="AIzaSyAxp21tpUU3JI7C8wYcBB2H32ogIvEcnmk";

 //url- https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=[YOUR_API_KEY]'
 
 let search= async ()=>{
     let query= document.getElementById("query").value;
     let url=` https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}r&key=${apikey}`
  let res= await fetch(url);
  let data=await res.json();
     append(data.items);
 }
 
 let append= (data)=>{
    let container= document.getElementById("box4");
     container.innerHTML=null;
 console.log(data)
     data.forEach(({id:{videoId},snippet:{title,thumbnails}})=>{
 
        
        
 
 let div=document.createElement("div");
     div.id="mybox";
   let img= document.createElement("img");
   img.src=thumbnails.high.url;
   img.id="iframe"
 //    let iframe= document.createElement("iframe");
 //    iframe.src=`https://www.youtube.com/embed/${videoId}`;
 //    iframe.allow= "fullscreen";
 //    iframe.id="iframe"
    
 
    let h3= document.createElement("h3");
    h3.innerText=title;
    h3.id="h3"
 
    div.append(img, h3);
 
    let video = {
       title,
       videoId,
     };
 
     div.onclick = () => {
       playVideo(video);
     };
 
 
 
    container.append(div);
 
 })
 }
 
 let playVideo = (video) => {
  localStorage.setItem("video", JSON.stringify(video));
   window.location.href = "video.html";
 };
 
 
 
 
 // <iframe width="560" 
 // height="315" 
 // src="https://www.youtube.com/embed/oVOlVouwUY4"
 //  title="YouTube video player"
 //   frameborder="0"
 //    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 //     allowfullscreen></iframe>
 