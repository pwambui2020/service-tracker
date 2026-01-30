import {getServiceList } from "/api/index";

Page({
  data: {
    userInput: '',
    active: 'about',
  },
  goToAbout(e) {
    this.setData({ active: e.currentTarget.dataset.page });

    my.navigateTo({
      url: '/pages/about/about'
    });
  },
  

  onInputChange(e) {
    console.log('onInputChange:', e.detail.value);
    this.setData({ userInput: e.detail.value });
  },

  onSubmit() {
    console.log('onSubmit called; userInput=', this.data.userInput);

    if (!this.data.userInput) {
      console.log('No input → showing Missing Input dialog');
      my.alert({
        title: 'Input Required',
        content: 'Please enter a number between 1 and 6.',
        confirmText: 'OK'
      });
      return;
    }

    console.log('Calling mock API…');
    getServiceList()
      .then(services => {
        console.log('API returned:', services);
        const found = services.find(s => s.id === this.data.userInput);
        console.log('Service found:', found);

        if (found) {
          console.log('Showing service dialog for:', found);
          my.alert({
            title: 'Service Found',
            content: `Name: ${found.name}\nUptime: ${found.uptime}`,
            confirmText: 'OK'
          });
        } else {
          console.log('No service matched—showing not found dialog');
          Dialog.alert({
            title: 'Not Found',
            content: 'No service matches that ID.',
            confirmText: 'Try Again'
          });
        }
      })
      .catch(err => {
        console.error('API error:', err);
        my.alert({
          title: 'Error',
          content: 'Failed to fetch services.',
          confirmText: 'OK'
        });
      });
  }
  
});
