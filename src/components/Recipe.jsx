const Recipe = ({ recipe }) => {
  return (
    <div className="card col-12 col-md-4 col-lg-3 p-0">
      <img className="card-img-top w-100" src={recipe.imageURL} alt="Title" />
      <div className="card-body">
        <h4 className="card-title">{recipe.title}</h4>
        <p className="card-text">{recipe.description}</p>
        <span className="d-block text-end text-secondary text-bold">
          {recipe.preparationTime}min
        </span>
        <div className="accordion my-4" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id={`heading${recipe.id}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${recipe.id}`}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Ingredients
              </button>
            </h2>
            <div
              id={`collapse${recipe.id}`}
              className="accordion-collapse collapse show"
              aria-labelledby={`heading${recipe.id}`}
              data-bs-parent="#accordionExample"
            >
              {recipe.ingredients.map((ing) => (
                <div key={ing.id} className="accordion-body">
                  {ing.name}: {ing.quantity}
                  {ing.unit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
