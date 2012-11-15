function hascheck() {
	//windowの作成
	var win = Titanium.UI.createWindow({
		title:'都道府県を選択',
		backgroundColor: '#eee'
	});
	
	//tableviewの作成
	var tableView = Ti.UI.createTableView({
		top:'0dp',
		bottom:'0dp',
		left:'0dp',
		height:Ti.UI.FILL,
		separatorColor:'#ddd',
		style: Titanium.UI.iPhone.TableViewStyle.GROUPED
	});
	
	//sectionの作成
	var sec1 = Ti.UI.createTableViewSection({
		headerTitle:'都道府県を選択'
	})
	
	//checkのついたrowを保存しておく変数
	var lastClicked;
	//都道府県のデータ
	var region = ['北海道','青森県','岩手県','宮城県','秋田県','山形県','福島県','茨城県','栃木県','群馬県','埼玉県','千葉県','東京都','神奈川県'];
	
	//rowを配列分作成する
	for(i = 0; i < region.length; i++){
		var row = Ti.UI.createTableViewRow();
		row.region = region[i];
		row.height = '50dp';
		row.add(Ti.UI.createLabel({
			text:row.region,
			top:'16dp',
			left:'20dp',
			height: Ti.UI.SIZE,
			font:{fontSize:'19dp',fontFamily:'HiraKakuProN-W3'},
			color:'#000',
			textAlign:'left'
		}));
		sec1.add(row);	
	}
	
	//tableViewに対してクリック時のイベントを設定する
	tableView.addEventListener('click', function(e){
		//lastClickedにデータがあれば、そのrowのhasCheckを外す
		if(lastClicked && lastClicked !== e.row){
			lastClicked.hasCheck = false;
		}
		//hasCheckをつける処理
		e.row.hasCheck = true;

		//hasCheckをつけたrowを変数lastClickedへ一時保存		
		if(e.row.hasCheck){
			lastClicked = e.row;
		}
		else{
			lastClicked = undefined;
		}
	});	
	
	tableView.data = [sec1];
	win.add(tableView);
	return win;
}
module.exports = hascheck;