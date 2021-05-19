$(document).ready(function () {
    // liffId: LIFF URL "https://liff.line.me/xxx"のxxxに該当する箇所
    // LINE DevelopersのLIFF画面より確認可能
    var liffId = "1656004069-V24JjN5n";
    initializeLiff(liffId);
    
    
})

function initializeLiff(liffId) {
    liff
        .init({
            liffId: liffId
        })
        .then(() => {
            // Webブラウザからアクセスされた場合は、LINEにログインする
            if (!liff.isInClient() && !liff.isLoggedIn()) {
                window.alert("LINEアカウントにログインしてください。");
                liff.login({redirectUri: location.href});
            }
        })
        .catch((err) => {
            window.alert('LIFF Initialization failed ', err);
        });
}

function sendText(text) {
    if (!liff.isInClient()) {
        //shareTargetPicker(text);
    } else {
        alert(text);
        
        sendMessages(text);
        
    }
}
//{
//        'type': 'text',
//        'text': text
//    }
function sendMessages(text) {
    liff.sendMessages([{
  "type": "flex",
  "altText": "Flex Message",
  "contents": {
    "type": "bubble",
    "direction": "ltr",
    "header": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "メモを登録しました",
          "size": "lg",
          "align": "center",
          "weight": "bold",
          "color": "#340AD9"
        },
        {
          "type": "separator"
        }
      ]
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": text,
          "size": "lg",
          "align": "start",
          "gravity": "top",
          "color": "#BF0202",
          "wrap": true
        },
        {
          "type": "separator"
        }
      ]
    }
  }
}]).then(function () {
        liff.closeWindow();
       }).catch(function (error) {
        window.alert('Failed to send message ' + error);
        liff.closeWindow();
    });
}
