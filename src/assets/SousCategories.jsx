function SousCategories({ subCategories, onSelectSubCategory }) {
  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">Sous-catégories</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
        {subCategories.map((subCategory) => (
          <div key={subCategory.id} className="col">
            <div className="card shadow-lg border-0 h-100 d-flex flex-column">
              <div className="image-container overflow-hidden text-center p-5">
                <img
                  src={`https://127.0.0.1:8000/uploads/categories/sous_categories/${subCategory.photo}`}
                  alt={subCategory.nom}
                  className="card-img-top img-fluid"
                  style={{ maxHeight: "170px", objectFit: "contain" }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{subCategory.nom}</h5>
                <button
                  className="btn btn-primary rounded-pill"
                  onClick={() => onSelectSubCategory(subCategory)}
                >
                  Voir les produits
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SousCategories;

















// import React from "react";

// function SousCategories({ subCategories }) {
//   return (
//     <div className="container mt-4">
//       <h2 className="text-center text-primary">Sous-catégories</h2>
//       <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
//         {subCategories.length > 0 ? (
//           subCategories.map((subCategory) => (
//             <div key={subCategory.id} className="col">
//               <div className="card shadow-lg border-0 h-100 d-flex flex-column">
//                 <div className="image-container overflow-hidden text-center p-5">
//                   <img
//                     src={`https://127.0.0.1:8000/uploads/categories/sous_categories/${subCategory.photo}`} alt={subCategory.nom} className="card-img-top img-fluid"
//                     style={{ maxHeight: "170px", objectFit: "contain" }} //with cover the image is hide from top and bottom, i entered contain
//                   />
//                 </div>
//                 <div className="card-body text-center">
//                   <h5 className="card-title">{subCategory.nom}</h5>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-muted">
//             Aucune sous-catégorie disponible
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SousCategories;
