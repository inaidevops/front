import { useSelector, useDispatch } from "react-redux/es/exports";
import Button from "../../../components/UI/Button/Button";
import { add, save } from "../../../store/reducers/productsSlice";

export const ProductList = () => {

  const list =useSelector(state=>state.products)
  const dispatch = useDispatch()

  function addProduct() {
      dispatch(add('product'))
  }
  function saveProducts() {
    dispatch(save())
}
  return ( <div>
      
    <Button action={addProduct}>Add</Button>
    <Button action={saveProducts}>Save</Button>
    {list.map((product)=>{
      return(<li key={Math.round(Math.random() * 10000)}>{product}</li>)
    })}
  </div> );
}
 