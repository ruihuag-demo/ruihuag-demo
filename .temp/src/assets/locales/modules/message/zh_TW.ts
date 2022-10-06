export default {
  //************* Global *************//
  'global.user.unlock': '解鎖用戶',
  'global.create': '新增',
  'global.update': '修改',
  'global.delete': '刪除',
  'global.search': '查找',
  'global.role': '角色',
  'global.name': '名稱',
  'global.createTime': '創建時間',
  'global.title': '標題',
  'global.type': '類型',
  'global.user': '用戶',
  'global.gender': '性別',
  'global.age': '年齡',
  'global.male': '男',
  'global.female': '女',
  'global.secrecy': '保密',
  'global.unlimited': '不限',
  'global.url': '鏈接',
  'global.content': '內容',
  'global.richText': '富文本',
  'global.phoneNum': '手機號',
  'global.email': '郵箱',
  'global.area': '地區',
  'global.upload': '點擊上傳',
  'global.used': '已使用',
  'global.detail': '詳情',
  'global.status': '狀態',
  'global.enabled': '啟用',
  'global.disabled': '禁用',
  'global.all': '全部',
  'global.code': '代碼',
  'global.sort': '排序',
  'global.description': '描述',
  'global.valueBetween': '請輸入介於 {min} ~ {max} 之間的值',
  'global.dateBetween': '請選擇介於 {start} ~ {end} 之間的日期',
  'global.less': '小於 {value}',
  'global.equal': '等於 {value}',
  'global.greater': '大於 {value}',
  'global.defaultValue': '默認值',
  'global.value': '值',
  //************* zhen.x  Global 約定的信息 *************//
  'global.app.info.fail.connect.server': '連接服務器失敗',
  'global.app.info.fail.msg': '未知錯誤',
  'global.app.info.msg': '未知消息',
  'global.app.info.yes': '是',
  'global.app.info.no': '否',

  'global.app.info.talbe.total': '總', // table 組件總條數顯示名
  'global.app.info.talbe.col.optName': '操作', // table 操作例名稱

  'global.app.alert.confirm.title': '確認', // 確認框標題
  'global.app.alert.confirm.del.msg': '確定刪除選中的數據？', // 確認刪除時提示框標題

  'global.app.alert.info.title': '提示', // 提示框標題
  'global.app.alert.info.del.msg': '請選擇需要刪除的數據！', // 刪除未選擇數據時，提示內容
  'global.cannot.supported.sys_personalUser': '不支持個人用戶登錄。',

  //************* zhen.x operation title 操作名稱 *************//
  'global.app.opt.add': '新增',
  'global.app.opt.edit': '修改',
  'global.app.opt.delete': '刪除',
  'global.app.opt.view': '查看',
  'global.app.opt.new': '添加',
  'global.app.opt.addChild': '添加子結點',

  'global.app.opt.addSuccess': '新增成功',
  'global.app.opt.updateSuccess': '修改成功',
  'global.app.opt.deleteSuccess': '刪除成功',
  'global.app.opt.success': '成功',
  'global.app.opt.unsupported': '不支持的文件類型',

  /******** validate *************/
  'global.validate.postalCodeForSix': '請輸入正確的郵政編碼', // 6位邮政编码校验
  'global.validate.notNull': '不能為空', // 輸入驗證不能為空
  'global.validate.username': '用戶名不符合要求', // 驗證用戶名
  'global.validate.url': '請輸入正確的URL地址', // 驗證Url地址url
  'global.validate.string': '要求為字符類型', // 驗證string類型
  'global.validate.number': '要求為數字類型', // 驗證數字類型
  'global.validate.integer': '要求為整數類型', // 驗證整數類型
  'global.validate.float': '要求為浮點數類型', // 驗證浮點數類型
  'global.validate.object': '要求為對象', // 驗證對象
  'global.validate.boolean': '要求為布爾類型', // 驗證浮布爾類型
  'global.validate.array': '要求為數組類型', // 驗證數組類型
  'global.validate.date': '要求為日期類型', // 驗證日期類型
  'global.validate.enum': '必須為以下選項其中壹個 {value}', // 驗證枚舉類型
  'global.validate.len': '長度必須為{value}', // 驗證長度
  'global.validate.max': '不能超過 {value} 個字符', // 驗證最大長度
  'global.validate.min': '不得少於{value}個字符', // 驗證最小長度
  'global.validate.overChar': '不能超過{num}個字符', // 輸入驗證，長度不能超出 num
  'global.validate.inputNum': '請輸入壹個數字', // 輸入驗證，只允許輸入數字
  'global.validate.inputNumMinMax': '請輸入壹個 {minNum} 到 {maxNum} 之間的數字', // 輸入驗證，只允許輸入數字，區間 [minNum, maxNum]
  'global.validate.inputNumMin': '請輸入壹個不小於 {minNum} 的數字', // 輸入驗證，數字不小於 minNum
  'global.validate.inputNumMax': '請輸入壹個不大於 {maxNum} 的數字', // 輸入驗證，數字不能大於 maxNum
  'global.validate.input.str.front': "只允許字母數字或下劃線，不能以 '{str}' 開頭",
  'global.validate.input.login': '用戶名由字母數字或下劃線組成，且不能以數字開頭',
  'global.validate.input.phoneNum': '格式有誤，正確格式為：地區代碼-號碼；例：+86-13212341234',
  'global.validate.input.mobileNum':
    '格式有誤，正確格式為：地區代碼-區號-號碼；例：+86-0574-87376060',
  'global.validate.input.mail': '格式有誤，正確格式示例：mail@xxxxxx.xxx',
  'global.validate.change': '請修改內容再提交',
  'global.validate.illegalCharacter': '只能包含大小寫英文、數字和下劃線',
  'global.validate.cannotContain': '不能包含字符{characters}',
  'global.editor.error': '所有圖片大小總和不能超過2M!',
  //************* zhen.x Global userDropDown *************//
  'global.userDropDown.logout': '登出',
  'global.userDropDown.account': '個人資料',
  'global.userDropDown.password': '修改密碼',
  'global.userDropDown.deleteAccount': '刪除賬號',
  'global.userDropDown.deleteAccountConfirm': '確認刪除賬號？所有用戶信息將被刪除並且無法恢復！',
  'global.userDropDown.login': '登錄',
  'global.userDropDown.about': '關於',
  'global.addBtn': '新增',
  'global.editBtn': '修改',
  'global.delBtn': '刪除',
  'global.viewBtn': '查看',
  'global.delConfirm': '是否刪除?',
  'global.warehouse.filter.search': '查找',
  'global.operation': '操作',
  'global.nowEditLocale': '當前編輯的語言',
  'global.saveBtn': '保存',
  'global.nextBtn': '下壹步',
  'global.prevBtn': '上壹步',
  'global.okBtn': '確定',
  'global.cutBtn': '剪切',
  'global.cleanBtn': '清除',
  'global.cancelBtn': '取消',
  'global.backBtn': '返回',
  'global.searchBtn': '查詢',
  'global.resetBtn': '重置',
  'global.pleaseSelect': '請選擇',
  'global.tableNo': '序號',
  'global.error.loginTimeOut': '登陸超時，請重新登陸',
  //************* zhen.x menu name *************//
  'menu.name._menu_demo': 'Demo',
  'menu.name._menu_demo_form': 'Form',
  'menu.name._menu_demo_searchRow': 'ARSearchRow',
  'menu.name._menu_demo_optRow': 'AROptRow',
  'menu.name._menu_demo_operation': 'Operation',
  'menu.name._menu_demo_modal': 'Modal',
  'menu.name._menu_demo_uploader': 'Uploader',
  'menu.name._menu_home': '首頁',
  'menu.name._menu_verification': '驗證管理',
  'menu.name._menu_verification_verify': '驗證',
  'menu.name._menu_verification_gift': '送禮記錄',
  'menu.name._menu_dev': '開發者中心',
  'menu.name._menu_dev_app': '應用',
  'menu.name._menu_dev_api': '接口',
  'menu.name._menu_sys': '系統',
  'menu.name._menu_sys_rsa': 'RSA',
  'menu.name._menu_sys_dict': '字典',
  'menu.name._menu_sys_companyUser': '公司用戶',
  'menu.name._menu_sys_personalUser': '個人用戶',
  'menu.name._menu_sys_company': '公司',
  'menu.name._menu_sys_role': '角色',
  'menu.name._menu_sys_menu': '權限',
  'menu.name._menu_sys_test': '測試視圖',
  'menu.name._menu_product': '商品',
  'menu.name._menu_product_category': '商品類型',
  'menu.name._menu_warehouse': '倉庫',
  'menu.name._menu_warehouse_warehouses': '倉庫',
  'menu.name._menu_warehouse_shelfs': '倉庫貨架',
  'menu.name._menu_warehouse_positions': '倉庫倉位',
  'menu.name._menu_warehouse_inStock': '入庫單',
  'menu.name._menu_warehouse_inStockIndex': '入庫單',
  'menu.name._menu_warehouse_inStockView': '查看入庫單',
  'menu.name._menu_warehouse_receiptGood': '收貨單',
  'menu.name._menu_warehouse_receiptGoodIndex': '收貨單',
  'menu.name._menu_warehouse_receiptGoodView': '查看收貨單',
  'menu.name._menu_warehouse_outStock': '發貨單',
  'menu.name._menu_warehouse_outStockIndex': '發貨單',
  'menu.name._menu_warehouse_outStockAdd': '添加發貨單',
  'menu.name._menu_warehouse_outStockEdit': '編輯發貨單',
  'menu.name._menu_warehouse_outStockView': '查看發貨單',
  'menu.name._menu_warehouse_stockTransfer': '轉倉單',
  'menu.name._menu_warehouse_stockTransferIndex': '轉倉單',
  'menu.name._menu_warehouse_stockTransferAdd': '添加轉倉單',
  'menu.name._menu_warehouse_warehouseDeliverTaskDetail': '發貨明細',
  'menu.name._menu_warehouse_stock': '庫存',
  'menu.name._menu_warehouse_stockIndex': '庫存',
  'menu.name._menu_warehouse_stockPositionProduct': '庫存明細',
  'menu.name._menu_product_products': '商品列表',
  'menu.name._menu_product_add': '添加商品',
  'menu.name._menu_product_edit': '修改商品',
  'menu.name._menu_product_detail': '查看商品',
  'menu.name._menu_uaid': 'UAID管理',
  'menu.name._menu_uaid_uaidManager': 'UAID',
  'menu.name._menu_uaid_uaidGen': 'UAID生成',
  'menu.name._menu_uaid_uaidGenIndex': 'UAID生成',
  'menu.name._menu_uaid_uaidGenInfo': 'UAID生成',
  'menu.name._menu_uaid_uaidPrint': 'UAID打印',
  'menu.name._menu_uaid_uaidPrintIndex': 'UAID打印',
  'menu.name._menu_uaid_uaidPrintAction': 'UAID打印類型',
  'menu.name._menu_uaid_uaidActivate': 'UAID激活',
  'menu.name._menu_uaid_uaidActivateIndex': 'UAID激活',
  'menu.name._menu_uaid_uaidActivateAction': 'UAID激活',
  'menu.name._menu_uaid_uaidBind': 'UAID綁定',
  'menu.name._menu_uaid_uaidBindIndex': 'UAID綁定',
  'menu.name._menu_uaid_uaidBindAction': 'UAID綁定',
  'menu.name._menu_uaid_batchManager': '批次管理',
  'menu.name._menu_uaid_batchIndex': '批次管理',
  'menu.name._menu_uaid_addBatch': '添加批次',
  'menu.name._menu_uaid_batchView': '查看批次',
  'menu.name._menu_uaid_batchEdit': '修改批次',
  'menu.name._menu_uaid_packTemp': '箱子模板',
  'menu.name._menu_uaid_packTempIndex': '箱子模板',
  'menu.name._menu_demo_table': 'ARTable',
  'menu.name._menu_demo_test': '測試',

  'menu.name._menu_info': '信息管理',
  'menu.name._menu_info_case': '案例管理',
  'menu.name._menu_info_caseType': '案例類型管理',
  'menu.name._menu_info_partner': '合作夥伴圖標管理',
  'menu.name._menu_info_news': '新聞管理',

  'menu.name._menu_verification_info': '驗證信息設置',
  'menu.name._menu_product_uaidGen': '生成UAID',
  'menu.name._menu_members': '會員管理',
  'menu.name._menu_member_point': '積分記錄獎勵',

  'global.bangding': '綁定商品',
  'global.welcome_name': '產品身份，無限可能',

  'global.imageUploader.sizeUnfit': '請上傳小於 {value} K 的圖片',
  'global.imageUploader.typeUnfit': '不支持的文件類型',
  'global.imageUploader.pixelConfirm': '妳的圖片尺寸不是推薦的{width}×{height} PX,依舊上傳嗎？',
  'golbal.imageUploader.sizeExtra': '小於{value}k',
  'golbal.imageUploader.pixelExtra': '尺寸為{width}×{height}px',
  'golbal.imageUploader.extra': '請上傳{sizeExtra} {pixelExtra}的圖片',

  'golbal.month.Jan': '一月',
  'golbal.month.Feb': '二月',
  'golbal.month.Mar': '三月',
  'golbal.month.Apr': '四月',
  'golbal.month.May': '五月',
  'golbal.month.Jun': '六月',
  'golbal.month.Jul': '七月',
  'golbal.month.Aug': '八月',
  'golbal.month.Sept': '九月',
  'golbal.month.Oct': '十月',
  'golbal.month.Nov': '十一月',
  'golbal.month.Dec': '十二月',

  // 全局标签
  'global.label.workspace': '數據域',
  'global.label.my.company': '本公司',
  'global.label.parent.company': '父公司',
  'global.label.child.company': '子公司',
  'global.label.partner.company': '夥伴公司',
  'global.label.other.company': '其他公司'
}
