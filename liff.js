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
        sendMessages(text);
    }
}

// LINEトーク画面上でメッセージ送信
/*
function sendMessages(text) {
    liff.sendMessages([{
        'type':'text',
        'text':text
    }]).then(function () {
        
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
        liff.closeWindow();
    });
}
*/
function sendMessages(text) {
liff.sendMessages([{
            type: 'text',
            text: "テキストメッセージの送信"
        }, {
            type: 'sticker',
            packageId: '2',
            stickerId: '144'
        }]).then(function () {
            window.alert("送信完了");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    
}
