export default function AddProductForm(props) {
  const {name, description, validation, onNameChange, onDescriptionChange, onFormSubmit} = props;

  return <form onSubmit={onFormSubmit}>
  <div>
    <label htmlFor="product-name">Name: </label>
    <input id ='product-name' type="text" placeholder="Enter a name" value={name} onChange={onNameChange} />
  </div>
  <div>
    <label htmlFor="product-description" >Description: </label>
    <input id ='product-description' type="text" placeholder="Enter a description" value={description} onChange={onDescriptionChange} />
  </div>
  <h3>{validation}</h3>
  <input type="submit" value="Add product" />
</form>
}