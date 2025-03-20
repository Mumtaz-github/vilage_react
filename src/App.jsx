import React, { useState, useEffect } from "react";
import axios from "axios";
import Categories from "./assets/Categories";
import SousCategories from "./assets/SousCategories";
import ProduitsParSousCategorie from "./assets/ProduitsParSousCategorie";
import Produits from "./assets/Produits";
import Navbar from "./assets/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);
  const [produits, setProduits] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [showProduits, setShowProduits] = useState(false);

  // Fetch categories and products from Symfony API
  useEffect(() => {
    axios
      .get("https://127.0.0.1:8000/api/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));

    // axios
    // .get("https://127.0.0.1:8000/api/produits/sous_categorie")
    // .then((response) => setProduits(response.data))
    // .catch((error) => console.error("Error fetching products:", error));

    axios
      .get("https://127.0.0.1:8000/api/produits")
      .then((response) => setProduits(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Show selected category and its subcategories
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSubCategory(null);
    setShowProduits(false);
    setSubCategories(categories.filter((sub) => sub.parent && sub.parent.id === category.id));
  };

  // Show products of the selected subcategory
  const handleSubCategorySelect = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setShowProducts(true);
  };

  // Show all products when "Produits" is clicked
  const handleShowProduits = () => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setShowProduits(true);
  };

  // Show categories when "Catalogue" is clicked
  const handleShowCategories = () => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setShowProduits(false);
    const handleShowProduitsDetails = (product) => {
      setSelectedProduct(product);
  };

  return (
    <div>
      <Navbar onShowProduits={handleShowProduits} onShowCategories={handleShowCategories} />

      <div className="container mt-4">
        <h1 className="text-center text-primary">Bienvenue sur Village Green</h1>

        {showProduits ? (
          <Produits produits={produits} />
        ) : selectedSubCategory ? (
          <ProduitsParSousCategorie selectedSubCategory={selectedSubCategory} />
        ) : selectedCategory ? (
          <SousCategories subCategories={subCategories} onSelectSubCategory={handleSubCategorySelect} />
        ) : (
          <Categories categories={categories} onCategorySelect={handleCategorySelect} />
        )}
      </div>
    </div>
  );
}

export default App;
