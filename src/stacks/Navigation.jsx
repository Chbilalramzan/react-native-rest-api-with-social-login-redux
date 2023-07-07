import React from 'react';

// Create a ref to hold the navigation container reference
export const navigationRef = React.createRef();

// Export a function to set the navigation container reference
export function NavigationRef(ref) {
  navigationRef.current = ref;
}

// Export functions to navigate and perform other navigation actions
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function reset(routeName, index, params) {
  navigationRef.current?.reset({
    index: index,
    routes: [{name: routeName, params}],
  });
}

export function replace(routeName, params) {
  navigationRef.current?.dispatch({
    type: 'REPLACE',
    payload: {
      name: routeName,
      params,
    },
  });
}
