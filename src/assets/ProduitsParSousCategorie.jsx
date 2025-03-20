import React from "react";

function ProduitsParSousCategorie({ selectedSubCategory }) {
return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">Produits - {selectedSubCategory.nom}</h2>
      {loading ? (
        <p className="text-center">Chargement des produits...</p>
      ) : produits.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          {produits.map((produit) => (
            <div key={produit.id} className="col">
              <div className="card shadow-lg border-0 h-100">
                <img
                  src={`https://127.0.0.1:8000/uploads/produits/${produit.photo}`}
                  alt={produit.nom}
                  className="card-img-top img-fluid"
                  style={{ maxHeight: "200px", objectFit: "contain" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{produit.nom}</h5>
                  <p className="card-text">{produit.description}</p> {/* ✅ Full description */}
                  <p className="fw-bold">Catégorie: {produit.categories?.nom || "Non spécifié"}</p> {/* ✅ Category */}
                  <p className="fw-bold">Prix: {produit.prix} €</p> {/* ✅ Fixed price format */}
                  <a href={`/produit/${produit.slug}`} className="btn btn-primary rounded-pill">
                    Voir les détails
                  </a>
                  <a href={`/cart/add/${produit.id}`} className="btn btn-success rounded-pill ms-2">
                    Ajouter au panier
                  </a> {/* ✅ Add to Cart button */}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted">Aucun produit disponible pour cette sous-catégorie.</p>
      )}
    </div>
  );
}

export default ProduitsParSousCategorie;

