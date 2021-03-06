/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { MaterialListApp } from "./MaterialListApp";

export class MaterialFunc extends ibas.ModuleFunction {

    /** 功能标识 */
    static FUNCTION_ID = "e92ad4b0-6848-444e-aab8-8f2649bd7555";
    /** 功能名称 */
    static FUNCTION_NAME = "materials_func_material";
    /** 构造函数 */
    constructor() {
        super();
        this.id = MaterialFunc.FUNCTION_ID;
        this.name = MaterialFunc.FUNCTION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 默认功能 */
    default(): ibas.IApplication<ibas.IView> {
        let app: MaterialListApp = new MaterialListApp();
        app.navigation = this.navigation;
        return app;
    }
}
