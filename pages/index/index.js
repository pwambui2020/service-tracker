// import { Modal } from 'antd-mini';
//  import { Dialog } from 'antd-mini';

import {getServiceList } from "/api/index";

Page({
  data: {
    userInput: '',
    active: 'home',
  },
  goToAbout(e) {
    this.setData({ active: e.currentTarget.dataset.page });

    // navigate to the About page
    my.navigateTo({
      url: '/pages/about/about'
    });
  },
  

  onInputChange(e) {
    console.log('onInputChange:', e.detail.value);
    this.setData({ userInput: e.detail.value });
  },

  // onSubmit() {
  //   console.log('onSubmit called');
  //   const { userInput } = this.data;
  //   console.log('Current userInput:', userInput);

  //   if (!userInput) {
  //     console.log('No input provided—showing missing input modal');
  //     Modal.alert({
  //       title: 'Missing Input',
  //       content: 'Please enter a number ID (1–3).',
  //       confirmText: 'OK'
  //     });
  //     return;
  //   }

  //   console.log('Calling mock API with id:', userInput);
  //   getServiceList()
  //     .then((services) => {
  //       console.log('API response services:', services);
  //       const found = services.find((s) => s.id === userInput);
  //       console.log('Found service:', found);

  //       if (found) {
  //         console.log('Showing service modal for:', found);
  //         Modal.alert({
  //           title: 'Service Found',
  //           content: `Name: ${found.name}\nUptime: ${found.uptime}`,
  //           confirmText: 'OK'
  //         });
  //       } else {
  //         console.log('No service matched—showing not found modal');
  //         Modal.alert({
  //           title: 'Not Found',
  //           content: 'No service matches that ID.',
  //           confirmText: 'Try Again'
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       console.error('Error fetching services:', err);
  //       Modal.alert({
  //         title: 'Error',
  //         content: 'Failed to fetch services.',
  //         confirmText: 'OK'
  //       });
  //     });
  // }
  onSubmit() {
    console.log('onSubmit called; userInput=', this.data.userInput);

    if (!this.data.userInput) {
      console.log('No input → showing Missing Input dialog');
      Dialog.alert({
        title: 'Input Required',
        content: 'Please enter a number between 1 and 3.',
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
          Dialog.alert({
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
        Dialog.alert({
          title: 'Error',
          content: 'Failed to fetch services.',
          confirmText: 'OK'
        });
      });
  }
  
});
