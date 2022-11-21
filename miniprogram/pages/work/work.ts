// pages/work.ts
Page({

  /**
   * 页面的初始数据
   */
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  data: {
    background: ['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0114fd5b42d5c3a80121b99468d3ec.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671599641&t=a68ba85d8e9e1fac73bf737dfae08814', 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F014c6e5b42d5c3a80121b994aa4eb6.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671599667&t=5f5cb0e1ac4cdc30a978c778324f49f0', 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0111dd5b3c0b4ea80121b9945c3b66.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671599681&t=c284be9bb04652eefe56b316a253fc7b'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    tool: [{
      "iconPath": "/assets/icon/tool.jpg",
      "title": "功能1"
    }, {
      "iconPath": "/assets/icon/tool.jpg",
      "title": "功能2"
    }, {
      "iconPath": "/assets/icon/tool.jpg",
      "title": "功能3"
    }, {
      "iconPath": "/assets/icon/tool.jpg",
      "title": "功能4"
    }, {
      "iconPath": "/assets/icon/tool.jpg",
      "title": "功能5"
    }],
    tools: [{
      "title": "功能A",
      "tool": [{
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能1",
      }, {
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能2",
      }, {
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能3",
      }, {
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能4",
      },
      ]
    }, {
      "title": "功能B",
      "tool": [{
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能1",
      }, {
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能2",
      }, {
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能3",
      }, {
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能4",
      }, {
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能5",
      }, {
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能6",
      }, {
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能7",
      }, {
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能8",
      }, {
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能9",
      }
      ]
    }, {
      "iconPath": "/assets/icon/tool1.png",
      "title": "功能C",
      "tool": [{
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能1",
      }, {
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能2",
      }, {
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能3",
      }, {
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能4",
      }],
    }, {
      "title": "功能D",
      "tool": [{
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能1",
      }],
    }, {
      "title": "功能E",
      "tool": [{
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能1",
      }]
    }, {
      "title": "功能F",
      "tool": [{
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能1",
      }]
    }, {
      "iconPath": "/assets/icon/tool1.png",
      "title": "功能G",
      "tool": [{
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能1",
      }]
    }, {
      "title": "功能H",
      "tool": [{
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能1",
      }]
    }, {
      "title": "功能I",
      "tool": [{
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能1",
      }]
    }, {
      "title": "功能J",
      "tool": [{
        "iconPath": "/assets/icon/tool1.png",
        "title": "功能1",
      }]
    }],
    show: false,
    showData:{}
  },
  showPopup(e:any) {
    this.setData({ show: true });
    let item=e.currentTarget.dataset.item
    this.setData({
       showData:item
    })
  },

  onClose() {
    this.setData({ show: false });
  },

  onChange() {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },


})