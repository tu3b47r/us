var type = document.createAttribute('type');
/*這是用JavaScript寫一個新增節點存入變數之程式語法*/

type.value = 'circle';
/*這是用JavaScript寫一個對此節點設定為空心圓點之程式
語法*/

var ls2 = document.getElementsByTagName('ul')[0];
/*這是用JavaScript寫一個將此節點加入標籤的第一個位置
之程式語法*/

ls2.setAttributeNode(type);
/*這是用JavaScript寫一個將此節點加入所指定的項目前之
程式語法*/