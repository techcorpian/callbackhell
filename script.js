const print = (num, callback = () => {}) => {
    setTimeout(() => {
      const countdownDiv = document.getElementById('countdown');
      countdownDiv.textContent = num;
      callback();
    }, 1000);
  };

  print(10, () => {
    print(9, () => {
      print(8, () => {
        print(7, () => {
          print(6, () => {
            print(5, () => {
              print(4, () => {
                print(3, () => {
                  print(2, () => {
                    print(1, () => {
                      print(0, () => {
                        setTimeout(() => {
                            const countdownDiv = document.getElementById('countdown');
                            countdownDiv.setAttribute('style','color:red;')
                            countdownDiv.textContent = 'Happy Independence Day!';
                          }, 1000);
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });

  