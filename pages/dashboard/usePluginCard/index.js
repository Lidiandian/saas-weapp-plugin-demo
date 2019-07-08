var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        pluginInfo: '&lt;goods<br><span style="margin-left: 10px;"></span>' +
            'appid="{{appid}}"<br><span style="margin-left: 10px;"></span>' +
            'phone="{{phone}}"<br>/&gt;',
        saasPluginParams: app.globalData.saasPluginParams
    },
    goOrderConfirm(e) {
        const { detail } = e;
        var baseUrl = `plugin-private://${this.data.saasPluginParams.pluginAppid}/pages/`,
            goUrl = `${baseUrl}detail/detail?id=${detail.id}`;
        wx.navigateTo({
            url: goUrl
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },
})