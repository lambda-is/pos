/* Copyright 2018 Lambda IS DOOEL
   License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl). */

odoo.define("pos_proxy_http_error.chrome", function (require) {
    "use strict";

    var core = require('web.core');
    var chrome = require('point_of_sale.chrome');
    var PopupWidget = require('point_of_sale.popups');
    var gui = require('point_of_sale.gui');
    var _t = core._t;

    var ErrorHTMLPopupWidget = PopupWidget.extend({
        template:'ErrorHTMLPopupWidget',

        show: function (options) {
            this._super(options);
            this.gui.play_sound('error');
        },
    });
    gui.define_popup({name:'error-html', widget: ErrorHTMLPopupWidget});

    chrome.ProxyStatusWidget.include({
        start: function(){
            this._super();
            if (this.pos.config.use_proxy) {
                this.pos.proxy.on('change:status', this, function (eh, status) {
                    if (['disconnected', 'error'].includes(status.newValue.status)) {
                        var msg = _t('The POSBox is not reachable on ' + this.pos.config.proxy_ip)
                        if (window.location.protocol === 'https:' && this.pos.config.proxy_ip.match(/^([0-9]+|http:)/) !== null) {
                            msg = _t('Your browser is not allowing to connect to the POSBox because you are accessing Odoo using a secure HTTPS (encrypted) connection. The POSBox however uses a plain HTTP (non-encrypted) connection since it is accessed from the local network. As a security measure the browser doesn\'t allow this and requires your action to enable it. Please see the instructions on how to this in your browser.');
                        }
                        this.gui.show_popup('error-html', {
                            'title': _t('POSBox is not connected'),
                            'body':  msg,
                        });
                    }
                });
            }
        }
    });

});
