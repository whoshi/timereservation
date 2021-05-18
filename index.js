$(function () 
{
    // カレンダー
    $(function () {
	$.datepicker.setDefaults($.datepicker.regional["ja"]);    
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
	    
        });
	
	
    });
   
    
    // 送信
    $('form').submit(function () 
    {
      
      //sendText(inputdata);//To LINE 送信
      //liff.closeWindow(); 
      
      
});

