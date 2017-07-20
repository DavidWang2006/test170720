/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { GoodsReceiptListApp } from "./GoodsReceiptListApp";

export class GoodsReceiptFunc extends ibas.ModuleFunction {

    /** 功能标识 */
    static FUNCTION_ID = "bba4c1a5-0abf-4605-9881-814a1be9a999";
    /** 功能名称 */
    static FUNCTION_NAME = "materials_func_goodsreceipt";
    /** 构造函数 */
    constructor() {
        super();
        this.id = GoodsReceiptFunc.FUNCTION_ID;
        this.name = GoodsReceiptFunc.FUNCTION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 默认功能 */
    default(): ibas.IApplication<ibas.IView> {
        let app: GoodsReceiptListApp = new GoodsReceiptListApp();
        app.navigation = this.navigation;
        return app;
    }
}
