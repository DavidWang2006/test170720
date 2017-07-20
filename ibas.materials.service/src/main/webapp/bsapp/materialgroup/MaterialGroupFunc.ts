/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { MaterialGroupListApp } from "./MaterialGroupListApp";

export class MaterialGroupFunc extends ibas.ModuleFunction {

    /** 功能标识 */
    static FUNCTION_ID = "771a0c8d-3974-424e-b2d0-af16ffed1d71";
    /** 功能名称 */
    static FUNCTION_NAME = "materials_func_materialgroup";
    /** 构造函数 */
    constructor() {
        super();
        this.id = MaterialGroupFunc.FUNCTION_ID;
        this.name = MaterialGroupFunc.FUNCTION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 默认功能 */
    default(): ibas.IApplication<ibas.IView> {
        let app: MaterialGroupListApp = new MaterialGroupListApp();
        app.navigation = this.navigation;
        return app;
    }
}
