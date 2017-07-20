/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { MaterialInventoryListApp } from "./MaterialInventoryListApp";

export class MaterialInventoryFunc extends ibas.ModuleFunction {

    /** 功能标识 */
    static FUNCTION_ID = "d2d53bb5-2c97-4d16-b135-a8924f15f0e2";
    /** 功能名称 */
    static FUNCTION_NAME = "materials_func_materialinventory";
    /** 构造函数 */
    constructor() {
        super();
        this.id = MaterialInventoryFunc.FUNCTION_ID;
        this.name = MaterialInventoryFunc.FUNCTION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 默认功能 */
    default(): ibas.IApplication<ibas.IView> {
        let app: MaterialInventoryListApp = new MaterialInventoryListApp();
        app.navigation = this.navigation;
        return app;
    }
}
