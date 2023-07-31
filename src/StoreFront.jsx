import { useState, useEffect } from "react";
import AddProductForm from "./AddProductForm";
import ProductList from "./ProductList";

export default function StoreFront() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      return JSON.parse(savedProducts);
    } else {
      return [];
    }
  });
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [validation, setValidation] = useState('');

  useEffect(() => {
    if (products.length === 0) {
      document.title = 'No products';
    } else if (products.length === 1) {
      document.title = `1 product`;
    } else {
      document.title = `${products.length} products`
    }
  }, [products]);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name) {
      setValidation('Please enter a name');
      return ;
    }
    if (!description) {
      setValidation('Please enter a description');
      return ;
    }

    setProducts([...products, {
      id: products.length + 1,
      name: name,
      description: description
    }])
    setName('');
    setDescription('');
    setValidation('');
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleDeleteClick(id) {
    setProducts(products.filter(product => product.id !== id));
  }

  console.log(localStorage)

  return <>
    <AddProductForm name={name} description={description} validation={validation} onNameChange={handleNameChange} onDescriptionChange={handleDescriptionChange} onFormSubmit={handleFormSubmit} />

    <h3>{products.length === 0 && 'Please add your first product'}</h3>

    <ProductList products={products} onDeleteClick={handleDeleteClick} />
  </>
}