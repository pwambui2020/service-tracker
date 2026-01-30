

Page({
  data: {
    uptimeToday: '',
    uptimeWeek: ''
  },

  onLoad() {
    this.fetchUptimeData();
  },

  fetchUptimeData() {
    my.request({
      
      // url: 'https://run.mocky.io/v3/19a197a9-abd7-43e2-b72b-da6c69b19812',
      url: 'https://run.mocky.io/v3/c69cf8b8-d13b-425f-80fb-3c6f1b9a7557',
      method: 'GET',
      success: (res) => {
        const { uptimeToday, uptimeWeek } = res.data;
        this.setData({
          uptimeToday,
          uptimeWeek
        
        });
      },
      fail: (err) => {
        console.error('Request failed:', err);

        my.alert({ title: 'Error', content: 'Failed to fetch uptime' });
      }
    });
  },
  

  viewHistory() {
    my.alert({
      title: 'History',
      content: 'Here you can view uptime history (feature coming soon)'
    });
  }
});

