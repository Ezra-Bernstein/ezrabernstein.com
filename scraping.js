const jsdom = require("jsdom");
const { JSDOM } = jsdom;

JSDOM.fromURL("https://www.devpost.com/Ezra-Bernstein").then(dom => {
  var names = dom.window.document.querySelectorAll("h5");
  var descs = dom.window.document.querySelectorAll("p.small");
  var imgs = dom.window.document.querySelectorAll("img");
  var html = "";

  for(i = 0; i < names.length; i++ ){
      var name = names[String(i)].textContent.trim();
      var desc = descs[String(i)].textContent.trim()

      if(imgs[String(i)].src.includes("software_thumbnail")){
        var img = imgs[String(i)].src;
      }
      console.log(name);
      console.log(desc);
      console.log(img);
        
      var html = "<h1>" + names +  "</h1>";
      html += "<p>" + desc + "</p>";
      html += "<img src = '" +img + "'>"; 
  }

  for(i=0; i < imgs.length; i++){
    
  }

  
  $("body").append(html);
});
