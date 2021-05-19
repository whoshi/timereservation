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
        sendMessages(text);
    }
}


function sendMessages(text) {
    var data = {
                type: "text",
                text: text,
    };
    liff.sendMessages([ data ]).then(function () {
        
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
        liff.closeWindow();
    });
}
