$(function() {
  fluentgallery = $('#target').fluentgallery();

  $.ajax({
    url : 'http://search.twitter.com/search.json',
    data : {
      q : 'on gumroad',
      rpp : 100 ,
      format : 'json'
    },
    dataType : 'jsonp',
    jsonp : 'callback' ,
    complete : function() {
    },
    success : function(data, status) {
       length = data.results.length;
       for(var i = 0; i < length; i++) {
         console.log(data);
         var obj = createTweetObj(data.results[i].text);
         data.results[i].download_url = obj.download_url;
         data.results[i].text = obj.text;
         var div = $("#tileTemplate").tmpl(data.results[i]);
         //fluentgallery.append(div);
         $('#target').fluentgallery({add:div});
       }
    },
    beforeSend : function() {
    },
    error : function() {
    }
  });
  
  function createTweetObj(str){
    var download_url = "";
    var text = str.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
        download_url = url;
        return '<a target="_blank" href="'+url+'">'+url+'</a>';
      }).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
        return  reply.charAt(0)+'<a target="_blank" href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
      });
    
    return {text:text , download_url:download_url};
  }

});