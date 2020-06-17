import React from 'react';

import Header from '../../components/Header';
import AuthPageModule from '../../components/AuthPageModule';

import Decoration from '../../components/Decoration';
import Background from '../../components/Background';

const AuthPage = () => {
  return (
    <>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            zIndex: '-1',
            top: 56,
            width: '100%',
          }}
        >
          <Decoration />
        </div>
        <div
          style={{
            position: 'absolute',
            zIndex: '-2',
            top: 56,
            width: '100%',
          }}
        >
          <Background />
        </div>
        <Header />
        <AuthPageModule />
      </div>
    </>
  );
};

export default AuthPage;
