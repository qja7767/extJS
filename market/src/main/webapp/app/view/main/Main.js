Ext.onReady(function() {
	var data_store = Ext.create('Ext.data.Store', {
		autoLoad : true,
		pageSize : 5,
		fields : ['title', 'contents', 'author', 'create_date'],
		proxy : {
			type : 'ajax',
			api : {
				read : './server.jsp'
			},
			reader : {
					type : 'json',
					rootProperty : 'data'
				}
			}
	});
	
	Ext.create('Ext.grid.Panel', {
		title : 'Header',
		Columns : [{
			text : '제목',
			flex : 1,
			dataindex : 'title'
		}, {
			text : '내용',
			flex : 1,
			dataindex : 'contents'
		}, {
			text : '작성자',
			flex : 1,
			dataindex : 'author'
		}, {
			text : '등록일',
			flex : 1,
			dataindex : 'create_date'
		}],
		store : data_store,
		bbar : {
			xtype : 'pagingtoolbar',
			store : data_store,
			displayinfo : true,
			displayMsg : '{0}/{1} Total - {2}',
			emptyMsg : 'No Data'
		},
		renderTo : Ext.getBody()
	})
	
});