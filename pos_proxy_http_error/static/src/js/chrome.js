/* Copyright 2018 Lambda IS DOOEL
   License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl). */

odoo.define("pos_proxy_http_error.chrome", function (require) {
    "use strict";

    var chrome = require("point_of_sale.chrome");

    chrome.ProxyStatusWidget.include({
        start: function(){
            this._super();
            if (window.location.protocol == 'https:') {
                this.pos.proxy.on('change:status', this, function (eh, status) {
                    if (['disconnected', 'error'].includes(status.newValue.status)) {
                        var config = this.pos.config;
                        if (config.use_proxy && config.proxy_ip.match(/^([0-9]+|http:)/) !== null){
                            // TODO: raise error
                        }
                    }
                });
            }
        }
    });

});
