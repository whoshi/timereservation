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
        
    } else {
        //sendMessages(text);
        liff.sendMessages([{
        'type':'text',
        'text':text
        }]).then(function () {
        }).catch(function (error) {
        window.alert('Failed to send message ' + error);
        liff.closeWindow();
    });
    }
}

// LINEトーク画面上でメッセージ送信

function sendMessages(text) {
    liff.sendMessages([{
  "type": "template",
  "altText": "this is a buttons template",
  "template": {
    "type": "buttons",
    "title": "タイトル",
    "text": "テキスト",
    "actions": [
      {
        "type": "message",
        "label": "アクション 1",
        "text": "アクション 1"
      },
      {
        "type": "message",
        "label": "アクション 2",
        "text": "アクション 2"
      }
    ]
  }
}
]).then(function () {
        
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
        liff.closeWindow();
    });
}
