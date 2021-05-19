$(document).ready(function () {
    // liffId: LIFF URL "https://liff.line.me/xxx"のxxxに該当する箇所
    // LINE DevelopersのLIFF画面より確認可能
    var liffId = "1656006924-528VoLqM"; 
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
            console.log('LIFF Initialization failed ', err);
        });
}

function sendText(text) {
    if (!liff.isInClient()) {
        shareTargetPicker(text);
    } else {
        sendMessages(text);
        //liff.closeWindow();
    }
}

// LINEトーク画面上でメッセージ送信
function sendMessages(text) {
    alert(text);
    liff.sendMessages([{
         '': "text",
         'text': "Hello, World!"
    }]).then(function() {
            window.alert('Message sent');
            liff.closeWindow();
        }).catch(function(error) {
            window.alert('Error sending message: ' + error);
            liff.closeWindow();
        });
}

// Webブラウザからメッセージ送信
function shareTargetPicker(text) {
    alert('Picker');
    liff.shareTargetPicker([{
        'type': 'text',
        'text': text
    }]).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}
