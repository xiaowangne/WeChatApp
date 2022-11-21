// custom-tab-bar/index.ts
Component({
  data: {
    color: "#9a9a9a",
    selectedIconPath: "#88bf01",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "/pages/work/work",
        text: "工作",
        iconPath: "/assets/icon/work.png",
        selectedIconPath: "/assets/icon/work_a.png"
      },
      {
        pagePath: "/pages/help/index",
        text: "助手",
        iconPath: "/assets/icon/help.png",
        selectedIconPath: "/assets/icon/help_a.png"
      },
      {
        pagePath: "/pages/use/index",
        bulge:true,
        text: "常用",
        iconPath: "/assets/icon/use_a.png",
        selectedIconPath: "/assets/icon/use_a.png"
      },
      {
        pagePath: "/pages/analyse/index",
        text: "分析",
        iconPath: "/assets/icon/analyse.png",
        selectedIconPath: "/assets/icon/analyse_a.png"
      },
      {
        pagePath: "/pages/my/index",
        text: " 我的",
        iconPath: "/assets/icon/my.png",
        selectedIconPath: "/assets/icon/my_a.png"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e:any) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url}) 
    }
  }
})
