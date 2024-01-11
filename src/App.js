const products = [{id:1, name:'product 1'},{id:2, name:'product 2'},{id:3, name:'product 3'}];

function App(){
  return(
    <div>
      {products.map(product => 
        <li key={product.id}>{product.name}</li>)}
    </div>
  );
}

export default App;
