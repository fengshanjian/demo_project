/**
 * @Author: will
 * @Date:   2017-06-15T15:12:13+08:00
 * @Filename: TabOptions.js
 * @Last modified by:   smartrabbit
 * @Last modified time: 2018-04-20T16:39:10+08:00
 */


/* eslint-disable react/prop-types */

import { Image } from 'react-native';
import React from 'react';
import appColor from '../common/appColor';

const TabOptions = (navigation, normalImage, selectedImage, tabBarTitle) => ({
  tabBarLabel: tabBarTitle,
  tabBarIcon: ({ focused }) => (
    focused ?
      <Image
        source={selectedImage}
        resizeMode="contain"
        style={{ height: 26, width: 26 }}
      />
      :
      <Image
        source={normalImage}
        resizeMode="contain"
        style={{ height: 26, width: 26 }}
      />
  ),
});
export default TabOptions;
