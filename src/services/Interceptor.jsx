export const fetchWithInterceptor = (url, options = {}) => {
  // Add interceptors here
  return new Promise((resolve, reject) => {
    console.log(url);
    // Call the fetch function with the URL and options
    fetch(url, options)
      .then(response => {
        // Intercept the response here
        if (response.ok) {
          // If the response is OK, return the JSON data
          response
            .json()
            .then(json => {
              console.log('================ RESPONSE ====================');
              console.log(url);
              console.log(`response ::=>  ${JSON.stringify(json)}`);
              console.log('================== RESPONSE ==================');
              //   if (json.status === 402) {
              //     logout();
              //     showToast(
              //       'Session Expired',
              //       'Your Session has been Expired! Please login again.',
              //       'success',
              //     );
              //   } else {
              resolve(json);
              //   }
            })
            .catch(error => {
              console.log(`Response Catch Error if OK: ${error.message}`);
              reject(error);
            });
        } else {
          // If the response is not OK, reject with the error message
          response
            .text()
            .then(errorMessage => {
              console.log(`If Not Ok ErrorMessage: ${errorMessage}`);
              reject(new Error(errorMessage));
            })
            .catch(error => {
              console.log(`Response Catch Error if Not OK: ${error.message}`);
              reject(error);
            });
        }
      })
      .catch(error => {
        // Intercept errors here
        console.log(`Intercept Error: ${error.message}`);
        reject(error);
      });
  });
};
