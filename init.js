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
         var div = $("#tileTemplate").tmpl(data.results[i]);
         fluentgallery.append(div);
       }
    },
    beforeSend : function() {
    },
    error : function() {
    }
  });

});