import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import styles from './index.css';
import Popup from '@vant/weapp/dist/popup/index';
import { useState } from 'react';

export default () => {
  const [show, setShow] = useState(false);
  return (
    <View className={styles.app}>
      <View className={styles.header} onClick={() => {
        setShow(true);
      }}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
          alt="logo"
        />
        <View className={styles.text}>
          编辑 <Text className={styles.path}>src/pages/index/index.js</Text>{' '}
          开始
        </View>
      </View>
      <Popup
        show={show}
      >
        <View>这是POPUP 内容</View>
      </Popup>
    </View>
  );
};
