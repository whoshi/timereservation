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
      
      
      const resultrsvdateid = document.getElementById("resultdate");//
      var mes = "出庫予約を受け付けました。\n予定の10分前にLINEでお知らせします。\n予定時刻に間に合うように\n駐車場にお越しください。";
      const date1 = new Date();
      const date2 = date1.getFullYear() + "年" + 
				(date1.getMonth() + 1)  + "月" + 
				date1.getDate() + "日" + 
				date1.getHours() + "時" + 
				date1.getMinutes() + "分";
	
	// 2020年2月1日20時55分
       var mes2 = "\n-------------------------------\n";
       var mes3 = "【予約内容】\n受付NO.:\n    NSPARK-2021NC-294\n";
       var mes4 = "受付日時:\n    " + date2 + "\n入庫NO: 8\n"
       var mes5 = "出庫予約時間:\n   " + resultrsvdateid.innerText;
       //alert(mes + mes2 + mes3 + mes4 + mes5);
       
       var sendsyrings = mes + mes2 + mes3 + mes4 + mes5;
       sendText(sendsyrings);  
       
	    
      //sendText(inputdata);//To LINE 送信
       //liff.closeWindow(); 
      	return false;//これ絶対必要（liff.sendmessages()が失敗する）
    });
});
