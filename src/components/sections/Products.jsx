import { useState, useEffect } from "react";
import productsData from "../../data/products";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const filtered = productsData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "all" || item.category === category)
  );

  
  if (loading) {
    return (
      <section className="section container text-center">
        <h2>Latest at eGov</h2>
        <p>Loading products...</p>
      </section>
    );
  }

  return (
    <section className="section container">
      <h2>Latest at eGov</h2>

      <input
        className="form-control my-3"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="form-select mb-3"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="article">Article</option>
        <option value="news">News</option>
        <option value="paper">Whitepaper</option>
      </select>

      <div className="row">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card custom-card p-3 shadow-sm">
                <img
                  src={
                    item.image ||
                    "https://via.placeholder.com/300x200?text=No+Image"
                  }
                  alt={item.name}
                  className="card-img-top"
                />
                <h5 className="mt-2">{item.name}</h5>
                <p>₹{item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </section>
  );
}

export default Products;