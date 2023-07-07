// ThemeContext.js

import React from 'react';
import Colors from './Colors.jsx';

const ThemeContext = React.createContext(Colors.darkTheme); // Set the initial theme as light theme

export default ThemeContext;
