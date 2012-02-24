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
      console.log("complate");
    },
    success : function(data, status) {
      console.log(status);
      console.log(data);
       length = data.results.length;
       for(var i = 0; i < length; i++) {
         var div = $("#tileTemplate").tmpl(data.results[i]);
         console.log("logggg");
         fluentgallery.append(div);
         //$('#target').fluentgallery({add:div , reset:false});
       }
    },
    beforeSend : function() {
    },
    error : function() {
    }
  });

});