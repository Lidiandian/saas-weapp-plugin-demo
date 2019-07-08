var app = getApp();
Page({
    data: {
        saasPluginParams: app.globalData.saasPluginParams
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },
    open() {
        var baseUrl = `plugin-private://${this.data.saasPluginParams.pluginAppid}/pages/`,
            goUrl = `${baseUrl}home/home?appid=${this.data.saasPluginParams.appid}&phone=${this.data.saasPluginParams.phone}`;
        wx.navigateTo({
            url: goUrl
        })
    }
})