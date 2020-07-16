import React, { useState, useEffect } from 'react';
import { Category } from '../Category';
import { List, ListItem } from './styles';

// Categories mock
// import { categories as mockCategories } from '../../../api/db.json';

const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3500/categories')
      .then((res) => res.json())
      .then((response) => setCategories(response))
      .then(() => setLoading(false));
  }, []);

  return { categories, loading };
};

const ListOfCategoriesComponent = () => {
  const [showFixed, setShowFixed] = useState(false);

  const { categories, loading } = useCategoriesData();

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200;
      if (showFixed !== newShowFixed) setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <ListItem key={category.id}>
          <Category {...category} path={`/pet/${category.id}`} />
        </ListItem>
      ))}
    </List>
  );

  if (loading) {
    return 'Cargando...';
  }

  return (
    <React.Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </React.Fragment>
  );
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent);
