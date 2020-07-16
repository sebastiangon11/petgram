import React from 'react';

import { Layout } from '../components/Layout';
import { FavsWithQuery } from '../container/getFavorites';

export default () => {
  return (
    <Layout
      title="Tus favoritos"
      subtitle="Aquí puedes encontrar tus favoritos"
    >
      <FavsWithQuery />
    </Layout>
  );
};
