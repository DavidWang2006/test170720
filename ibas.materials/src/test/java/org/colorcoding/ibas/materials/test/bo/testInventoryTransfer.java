package org.colorcoding.ibas.materials.test.bo;

import junit.framework.TestCase;
import org.colorcoding.ibas.bobas.data.*;
import org.colorcoding.ibas.bobas.common.*;
import org.colorcoding.ibas.bobas.repository.*;
import org.colorcoding.ibas.materials.data.*;
import org.colorcoding.ibas.materials.bo.inventorytransfer.*;
import org.colorcoding.ibas.materials.repository.*;

/**
* 库存转储 测试
* 
*/
public class testInventoryTransfer extends TestCase {
    /**
     * 获取连接口令
    */
    String getToken() {
        return "";
    }
    
    /**
     * 基本项目测试
     * @throws Exception 
    */
    public void testBasicItems() throws Exception {
        InventoryTransfer bo = new InventoryTransfer();
        // 测试属性赋值

        // 测试库存转储-行
        IInventoryTransferLine inventorytransferline = bo.getInventoryTransferLines().create();
        // 测试属性赋值
        


        // 测试对象的保存和查询
        IOperationResult<?> operationResult = null;
        ICriteria criteria = null;
        IBORepositoryMaterialsApp boRepository = new BORepositoryMaterials();
        //设置用户口令
        boRepository.setUserToken(this.getToken());

        // 测试保存
        operationResult = boRepository.saveInventoryTransfer(bo);
        assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);
        InventoryTransfer boSaved = (InventoryTransfer)operationResult.getResultObjects().firstOrDefault();


        // 测试查询
        criteria = boSaved.getCriteria();
        criteria.setResultCount(10);
        operationResult = boRepository.fetchInventoryTransfer(criteria);
        assertEquals(operationResult.getMessage(), operationResult.getResultCode(), 0);


    }

}
