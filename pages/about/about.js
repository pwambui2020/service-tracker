// Page({
//   data: {},
//   onLoad() {},
// });


// Page({
//   viewHistory() {
//     my.alert({
//       title: 'History',
//       content: 'Here you can view uptime history (feature coming soon)'
//     });
//   }
// });

Page({
  data: {
    uptimeToday: '',
    uptimeWeek: ''
  },

  onLoad() {
    this.fetchUptimeData();
  },

  // fetchUptimeData() {
  //   // Simulating a fake API call with timeout
  //   setTimeout(() => {
  //     const mockData = {
  //       uptimeToday: 99.2,
  //       uptimeWeek: 97.5
  //     };
  //     this.setData({
  //       uptimeToday: mockData.uptimeToday,
  //       uptimeWeek: mockData.uptimeWeek
  //     });
  //   }, 1000);
  // },
  fetchUptimeData() {
    my.request({
      // url: 'https://run.mocky.io/v3/b7748431-ed74-4930-8658-1f90ec09e200', 
      // url: 'https://run.mocky.io/v3/2fb2371e-f5b5-4973-92fa-2b8483aefa24',
      url: 'https://run.mocky.io/v3/19a197a9-abd7-43e2-b72b-da6c69b19812',
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
      content: 'Feature coming soon!'
    });
  }
});

