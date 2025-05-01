import enUS from 'antd-mini/es/_locale/en-US';
// import enUS from 'antd-mini/es/locale/en_US';



App({
  globalData: {
    locale: enUS,
  },
  onLaunch(options) {
    // Page opens for the first time
    console.info('App onLaunch');
  },
  onShow(options) {
    // Reopened by scheme from the background
  },
});
