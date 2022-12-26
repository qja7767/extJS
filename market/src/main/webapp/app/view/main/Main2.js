Ext.onReady(function(){
	
	Ext.create('Ext.Panel', {
		width : 300,
		height : 300,
		title : 'Title Configs',
		items : [{
			xtype : 'button',
			text : 'button Component'
		}, {
			xtype : 'textfield'
		}],
		renderTo: Ext.getBody()
	});
	
	//Toolbar
	Ext.create('Ext.Panel', {
		width : 300,
		height : 300,
		title : 'Title Configs',
		
		dockedItems : [{
			xtype : 'toolbar',
			items : [{
				xtype : 'button',
				text : 'copy'
			}, {
				type : 'button',
				text : 'cut'
			}, {
				type : 'button',
				text : 'paste'
			}]
		}],
		rednerTo: Ext.getBody()
	});
	
	//Tabbar
	Ext.create('Ext.tab.Panel', {
		width : 300,
		height : 300,
		tabPosition : 'top',
		items : [{
			title : 'TAB1',
			html : 'Tab1'
		}, {
			title : 'TAB2',
			html : 'Tab2'
		}],
		renderTo : document.getElementById("top")
	});
	
	Ext.create('Ext.panel', {
		title : 'Data Store Example',
		items : [{
			xtype : 'combo',
			fieldLabel : 'ComboBox',
			displayField : 'label',
			valueField : 'value',
			store : Ext.create('Ext.data.Store', {
				fields : ['label', 'value'],
				data : [
					{
						label : 'label1',
						value : 'value1'
					},
					{
						label : 'label2',
						value : 'value2'
					},
					{
						label : 'label3',
						value : 'value3'
					},
				]
			})
		}],
		renderTo : Ext.getBody()
	})
	
	Ext.create('Ext.grid.Panel', {
		title : 'Grid Example',
		columns : [{
			flex : 1,
			text : 'first column',
			dataindex : 'first'
		}, {
			flex : 1,
			text : 'second column',
			dataindex : 'second'
		}, {
			flex : 1,
			text : 'third column',
			dataindex : 'third'
		}],
		store : Ext.create('Ext.data.Store', {
			fields : [ 'first', 'second', 'third'],
			data : [['1-1', '1-2', '1-3'], ['2-1', '2-2', '2-3'], ['3-1', '3-2', '3-3']]
		}),
		renderTo : Ext.getBody(),
	})
	
}) //onReady

/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.onReady(function() {
	/**
	Ext.Msg.confirm("테스트 제목", "아무 내용", function(button) {
		console.log(button);
	});
	 */
	/**
	Ext.toast({
		html : '테스트',
		align : 'br'
	});
	*/
	Ext.MessageBox.show({
		title : 'title',
		msg : 'msg',
		/**
		buttonText : {
			ok : 'OK',
			no : 'NO',
			yes : 'YES',
			cancel : 'CANCEL'
		}
		 */
		buttons : Ext.MessageBox.YESNOCANCEL,
		fn : function(button) {
			if(button == "yes") {
				console.log("if yes");
			}else if(button == "no"){
				console.log("else if no");	
			}else{
				console.log("else cancel");
			}
		}
	});
});

Ext.define('study.view.main.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'app-main',

	requires: [
		'Ext.plugin.Viewport',
		'Ext.window.MessageBox',

		'study.view.main.MainController',
		'study.view.main.MainModel',
		'study.view.main.List'
	],

	controller: 'main',
	viewModel: 'main',

	ui: 'navigation',

	tabBarHeaderPosition: 1,
	titleRotation: 0,
	tabRotation: 0,

	header: {
		layout: {
			align: 'stretchmax'
		},
		title: {
			bind: {
				text: '{name}'
			},
			flex: 0
		},
		iconCls: 'fa-th-list'
	},

	tabBar: {
		flex: 1,
		layout: {
			align: 'stretch',
			overflowHandler: 'none'
		}
	},

	responsiveConfig: {
		tall: {
			headerPosition: 'top'
		},
		wide: {
			headerPosition: 'left'
		}
	},

	defaults: {
		bodyPadding: 20,
		tabConfig: {
			responsiveConfig: {
				wide: {
					iconAlign: 'left',
					textAlign: 'left'
				},
				tall: {
					iconAlign: 'top',
					textAlign: 'center',
					width: 120
				}
			}
		}
	},

	items: [{
		title: 'Home',
		iconCls: 'fa-home',
		// The following grid shares a store with the classic version's grid as well!
		items: [{
			xtype: 'mainlist'
		}]
	}, {
		title: 'Users',
		iconCls: 'fa-user',
		bind: {
			html: '{loremIpsum}'
		}
	}, {
		title: 'Groups',
		iconCls: 'fa-users',
		bind: {
			html: '{loremIpsum}'
		}
	}, {
		title: 'textArea',
		iconCls: 'fa-th-list',
		xtype: 'textfield',
		text: 'test'
	}, {
		title: 'timeArea',
		iconCls: 'fa-clock ',
		items: [{
			xtype: 'htmleditor'
		}]
	}, {
		title: 'Button',
		iconCls: 'fa-home',
		xtype: 'button',
		text: 'Click',
		scale: 'small',
		handler: function() {
			Ext.Ajax.request({
				url: '/testAPI',
				success: function(res) {
					var api = Ext.decode(res.responseText);
					console.log("API Result::", api);
				}
			})
		},
	}]
});
