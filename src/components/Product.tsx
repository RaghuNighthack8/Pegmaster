import React from 'react';

import config from '../config/index.json';
// import Divider from './Divider';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem, thirdItem] = product.items;

  return (
    <section className="bg-background py-8" id="product">
      <div className="container max-w-5xl mx-auto m-8 relative justify-center">
        <div className="absolute left-0 top-0 bottom-0 w-px flex flex-col items-center">
          <div className="w-px h-full bg-transparent border-l border-dashed border-white absolute left-1/2 transform -translate-x-1/2"></div>
          <div className="w-5 h-10 bg-white rounded-full mt-20 mb-60"></div>
          <div className="w-px h-275px bg-transparent border-l border-dashed border-white absolute left-1/2 transform -translate-x-1/2"></div>
          <div className="w-5 h-10 bg-white rounded-full mt-5 mb-60"></div>
          <div className="w-px h-100px bg-transparent border-l border-dashed border-white absolute left-1/2 transform -translate-x-1/2"></div>
          <div className="w-5 h-10 bg-white rounded-full mt-15"></div>
          <div className="w-px h-full bg-transparent border-l border-dashed border-white absolute left-1/2 transform -translate-x-1/2"></div>
        </div>
        <div className="flex flex-wrap pl-20">
          <div className="w-5/6 sm:w-1/2 p-6 mt-20">
            <h3 className="text-3xl text-primary font-bold leading-none mb-3">
              {firstItem?.title}
            </h3>
            <p className="text-tertiary">{firstItem?.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap pl-20">
          <div className="w-full sm:w-1/2 p-6 mt-20">
            <h3 className="text-3xl text-primary font-bold leading-none mb-3">
              {secondItem?.title}
            </h3>
            <p className="text-tertiary mb-8">{secondItem?.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap pl-20">
          <div className="w-5/6 sm:w-1/2 p-6 mt-20">
            <h3 className="text-3xl text-primary font-bold leading-none mb-3">
              {thirdItem?.title}
            </h3>
            <p className="text-tertiary">{thirdItem?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
