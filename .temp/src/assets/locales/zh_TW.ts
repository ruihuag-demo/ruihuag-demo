import appLocaleData from 'react-intl/locale-data/zh'
import antd from 'antd/lib/locale/zh_TW'
import system from './modules/system/zh_TW'
import messages from './modules/message/zh_TW'
import test from './modules/test/zh_TW'
import echart from './modules/echart/zh_TW'

export default {
  name: '繁體中文',
  locale: 'zh-TW',
  data: appLocaleData,
  antd,
  messages: {
    ...echart,
    ...messages,
    ...system,
    ...test
  }
}
