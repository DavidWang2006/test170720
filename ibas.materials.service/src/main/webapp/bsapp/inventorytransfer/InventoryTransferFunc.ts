/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { InventoryTransferListApp } from "./InventoryTransferListApp";

export class InventoryTransferFunc extends ibas.ModuleFunction {

    /** 功能标识 */
    static FUNCTION_ID = "86824ad4-9684-4e22-930f-75ebec163b22";
    /** 功能名称 */
    static FUNCTION_NAME = "materials_func_inventorytransfer";
    /** 构造函数 */
    constructor() {
        super();
        this.id = InventoryTransferFunc.FUNCTION_ID;
        this.name = InventoryTransferFunc.FUNCTION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 默认功能 */
    default(): ibas.IApplication<ibas.IView> {
        let app: InventoryTransferListApp = new InventoryTransferListApp();
        app.navigation = this.navigation;
        return app;
    }
}
