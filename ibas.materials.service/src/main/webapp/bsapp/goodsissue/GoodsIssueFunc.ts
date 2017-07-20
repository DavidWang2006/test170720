/**
 * @license
 * Copyright color-coding studio. All Rights Reserved.
 *
 * Use of this source code is governed by an Apache License, Version 2.0
 * that can be found in the LICENSE file at http://www.apache.org/licenses/LICENSE-2.0
 */

import * as ibas from "ibas/index";
import { GoodsIssueListApp } from "./GoodsIssueListApp";

export class GoodsIssueFunc extends ibas.ModuleFunction {

    /** 功能标识 */
    static FUNCTION_ID = "6070c45e-d16d-4514-971b-282e1d48bada";
    /** 功能名称 */
    static FUNCTION_NAME = "materials_func_goodsissue";
    /** 构造函数 */
    constructor() {
        super();
        this.id = GoodsIssueFunc.FUNCTION_ID;
        this.name = GoodsIssueFunc.FUNCTION_NAME;
        this.description = ibas.i18n.prop(this.name);
    }
    /** 默认功能 */
    default(): ibas.IApplication<ibas.IView> {
        let app: GoodsIssueListApp = new GoodsIssueListApp();
        app.navigation = this.navigation;
        return app;
    }
}
