Component({
  properties: {
    // 这里定义了 innerText 属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: '张三先生',
    },
  },
  data: {
    // 这里是一些组件内部数据
    someData: {},
    time:''
  },
  lifetimes: {
    attached: function() {
      const date=new Date();
    const hour = date.getHours();
    if(hour<12&&hour>=6){
      this.setData({
        time:"上午好！"
      })
    }else if(hour>=12&&hour<18){
      this.setData({
        time:"下午好！"
      })
    }else{
      this.setData({
        time:"晚上好！"
      })
    }
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){
     
    }
  }
})
