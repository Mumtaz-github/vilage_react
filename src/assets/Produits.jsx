import React from "react";

function Produits({ produits }) {
  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">Liste des Produits</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {produits.length > 0 ? (
          produits.map((produit) => (
            <div key={produit.id} className="col">
              <div className="card shadow-lg border-0 h-100 d-flex flex-column">
                <img src={`https://127.0.0.1:8000/uploads/produits/${produit.photo}`} alt={produit.nom} className="card-img-top img-fluid" style={{maxHeight: "200px", width: "100%", objectFit: "contain",}}/>
                <div className="card-body text-center d-flex flex-column">
                  <h5 className="card-title">{produit.nom}</h5>
                  <p className="card-text"> {produit.description.slice(0, 100)}... </p>
                  <p>Catégorie : {produit.categorie?.nom || "Non spécifiée"}</p>
                  <p className="fw-bold"> Prix: {(produit.prix / 100).toFixed(2)} € </p>
                  <div className="mt-auto">
                    <a href={`/produit/${produit.slug}`}className="btn btn-primary rounded-pill">Voir les détails</a>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">Aucun produit disponible</p>
        )}
      </div>
    </div>
  );
}
export default Produits;
