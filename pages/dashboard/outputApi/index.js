var plugin = requirePlugin("myPlugin");
var app = getApp();
Page({
    data: {
        pluginInfo: '',
        saasPluginParams:app.globalData.saasPluginParams
    },
    usePluginInfo() {
        this.setData({
            pluginInfo: JSON.stringify(plugin.getPluginInfo())
        })
        // console.log(plugin.getPluginInfo())
    },
    getPluginscore() {
        var appid = this.data.saasPluginParams.appid,
            phone = this.data.saasPluginParams.phone;
        plugin.getBusUserIntegral({ appid, phone }, function(res) {
            if (!res.res) {
                wx.showToast({
                    title: res.message.mes,
                    icon: 'none',
                    duration: 2000
                })
                return;
            }
            wx.showToast({
                title: '获取积分：' + res.data.score + '',
                icon: 'none',
                duration: 2000
            })
        })
    },
    addPluginscore() {
        var appid = this.data.saasPluginParams.appid,
            phone = this.data.saasPluginParams.phone,
            integralNum = '2';
        plugin.setAddBusIntegral({ appid, phone, integralNum }, function(res) {
            if (!res.res) {
                wx.showToast({
                    title: res.message.mes,
                    icon: 'none',
                    duration: 2000
                })
                return;
            }
            wx.showToast({
                title: '加积分成功',
                icon: 'none',
                duration: 2000
            })
        })
    },
    reducePluginscore() {
        var appid = this.data.saasPluginParams.appid,
            phone = this.data.saasPluginParams.phone,
            integralNum = '2';
        plugin.setMinBusIntegral({ appid, phone, integralNum }, function(res) {
            if (!res.res) {
                wx.showToast({
                    title: res.message.mes,
                    icon: 'none',
                    duration: 2000
                })
                return;
            }
            wx.showToast({
                title: '减积分成功',
                icon: 'none',
                duration: 2000
            })
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
    }
})