$(function(){
  $('#target').fluentgallery();
  
  $.ajax({
  url : 'http://api.flickr.com/services/feeds/photos_public.gne',
  data : {
    tags : 'cat',
    tagmode : 'any',
    format : 'json'
  },
  dataType : 'jsonp',
  jsonp : 'jsoncallback',
  complete : function(){
    console.log("complate");
  },
  success : function(data, status){
    console.log(data);
    length = data.items.length;
    for(var i = 0; i < length; i++){
      var div = $( "#tileTemplate" ).tmpl( data.items[i] );
      console.log(div);
      $('#target').fluentgallery({add:div.html() , reset :false });
    }
  },
  beforeSend : function(){
    console.log("beforeSend");
  },
  error : function(){
    console.log("monstar.fm");
  }
});
  
  function getCapture(url){
    return 'http://capture.heartrails.com/200x200/free?' + url;
  }
});