import React, { useState } from 'react';

export const MyContext = React.createContext({ name: 'MyContext', updateValues: () => {} });
