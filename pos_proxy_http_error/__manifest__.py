# -*- coding: utf-8 -*-
# Copyright 2018 Lambda IS DOOEL <https://www.lambda-is.com>
# License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl).
{
    "name": "PoS Mixed Content Policy Error",
    "summary": "Show error in PoS when posbox uses HTTP",
    "version": "11.0.1.0.0",
    "development_status": "Beta",
    "category": "Point of Sale",
    "website": "https://github.com/OCA/pos/tree/11.0/pos_proxy_http_error",
    "author": "Lambda IS, "
              "Odoo Community Association (OCA)",
    "maintainers": [
        "kirca",
    ],
    "license": "AGPL-3",
    "application": False,
    "installable": True,
    "depends": [
        "point_of_sale",
    ],
    "data": [
        "templates/assets.xml",
    ],
}
