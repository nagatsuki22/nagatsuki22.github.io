function func1(){
	
	var unsei = ["大吉","ペン吉","諭吉","住吉","中吉","末吉","小吉","凶"];
	var description = ["何もかもうまく行きます","ペンギンがめっちゃ見れます","お金めっちゃ振ってきます","新快速は止まりません","まぁまぁです","悪くはないです","悪くはなりません","もう一度ボタンを押しましょう"];
	var unseiNumber = 8;
	var item = ["バナナ","ニザダイ","弾道ミサイル","ペンギンの羽根","磯竿","ちくわ","アアソウカイ","ケサランパサラン","かぼす","みつあみ","蓮子のおさげ","メリーのドアノブカバー","お祓い棒","ふなずし","ホタルイカ","鶏天","しろくま","クエ鍋","ウニ","ティッシュ"];
	var itemNumber = 20;
	var place = ["博麗神社","人形の館","霧雨魔法店","紅魔館","永遠亭","命蓮寺","人間の里","酉京都","妖怪の山","地底","ヨドバシ","動物園","羽田空港","魔法の森","グレートバリアリーフ","ハワイ","おでんやさん","そばやさん","水族館","海"];
	var placeNumber = 20;
	var rnd = Math.floor(Math.random() * unseiNumber);
	var unseiVal = unsei[rnd];
	var descVal = description[rnd];
		
	rnd = Math.floor(Math.random() * itemNumber);
	var itemVal = item[rnd];
	rnd = Math.floor(Math.random() * placeNumber);
	var placeVal = place[rnd];
		
	var txt = unseiVal + " "+descVal +" ラッキーアイテム:"+itemVal+" ラッキープレイス:"+placeVal;
	
	document.getElementById("output").textContent=txt;
}