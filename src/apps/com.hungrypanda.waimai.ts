import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hungrypanda.waimai',
  name: '熊猫外卖',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds:
            'com.haya.app.pandah4a.ui.sale.home.container.HomeContainerActivity',
          matches:
            '[text*="广告" || text*="廣告"] <<n ViewGroup > @ImageView[vid="iv_home_ad_close"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25813448',
        },
        {
          key: 1,
          activityIds:
            'com.haya.app.pandah4a.ui.sale.home.container.HomeContainerActivity',
          matches:
            '[vid="iv_header_img"] <<n ViewGroup > @ImageView[vid="iv_close"][clickable=true][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/25813449',
        },
      ],
    },
  ],
});
