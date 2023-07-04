// ThemeContext.js

import React from 'react';
import Colors from './Colors';

const ThemeContext = React.createContext(Colors.darkTheme); // Set the initial theme as light theme

export default ThemeContext;
