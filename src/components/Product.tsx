import React from 'react';

import config from '../config/index.json';
// import Divider from './Divider';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem, thirdItem] = product.items;

  return (
    <section className={`bg-background py-8`} id="product">
      <div
        className={`container max-w-5xl mx-auto m-8`}
        style={{ position: 'relative' }}
      >
        <div
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
            bottom: '0',
            width: '30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '2px',
              height: '100%',
              backgroundColor: 'transparent',
              borderLeft: '2px dashed #ffffff',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          ></div>
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              marginBottom: '275px',
              marginTop: '115px',
            }}
          ></div>
          <div
            style={{
              width: '2px',
              height: '100%',
              backgroundColor: 'transparent',
              borderLeft: '2px dashed #ffffff',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          ></div>
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              marginBottom: '315px',
            }}
          ></div>
          <div
            style={{
              width: '2px',
              height: '100%',
              backgroundColor: 'transparent',
              borderLeft: '2px dashed #ffffff',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          ></div>
          {/* Additional Pointer */}
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              marginBottom: '80px',
            }}
          ></div>
          <div
            style={{
              width: '2px',
              height: '100%',
              backgroundColor: 'transparent',
              borderLeft: '2px dashed #ffffff',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          ></div>
        </div>
        <div className={`flex flex-wrap`} style={{ paddingLeft: '50px' }}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3 className={`text-3xl text-primary font-bold leading-none mb-3`}>
              {firstItem?.title}
            </h3>
            <p className={`text-tertiary`}>{firstItem?.description}</p>
          </div>
        </div>
        <div className={`flex flex-wrap`} style={{ paddingLeft: '50px' }}>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <h3 className={`text-3xl text-primary font-bold leading-none mb-3`}>
              {secondItem?.title}
            </h3>
            <p className={`text-tertiary mb-8`}>{secondItem?.description}</p>
          </div>
        </div>
        <div className={`flex flex-wrap`} style={{ paddingLeft: '50px' }}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3 className={`text-3xl text-primary font-bold leading-none mb-3`}>
              {thirdItem?.title}
            </h3>
            <p className={`text-tertiary`}>{thirdItem?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
