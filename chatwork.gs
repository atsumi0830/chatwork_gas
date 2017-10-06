function sendMessageToChatWork(e) { 
  var client = ChatWorkClient.factory({token: '11111111111111111111111111111111(チャットワークトークンID)'});

  // 変数名で格納
  var name = e.namedValues['名前']; 
  var email = e.namedValues['メールアドレス'];
  var date = e.namedValues['タイムスタンプ'];

  var message = '';
  message = "新規で受注が入りました。\n\n";
  message += "日付: "+date+"\n";
  message += "名前: "+name+"\n";
  message += "メールアドレス: "+email+"\n";
  message += "詳細はこちら: スプレッドシートURL";

  client.sendMessage({room_id: 11111111(チャットワークルームID) ,body: message});
}