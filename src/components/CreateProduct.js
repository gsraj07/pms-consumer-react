import React,{useState,useEffect} from "react";
import { useNavigate,useParams } from 'react-router-dom';
import ProductService from "../service/ProductService";

function CreateProduct(){

    const navigate = useNavigate();
    const { id } = useParams();
    
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [madein, setMadein] = useState('');
    const [price, setPrice] = useState('');

     // componentDidUpdate usage
    useEffect(() => {
        if (id !== '_add') {
            ProductService.getProductById(id).then((response) => {
                const product = response.data;
                setName(product.name);
                setBrand(product.brand);
                setMadein(product.madein);
                setPrice(product.price);
            });
        }
    }, [id]); // //values -id triggers re render whenever they are updated in your program,
                //you can add multiple values by separating them by commas

    const saveOrUpdateProduct = (event) => {
        event.preventDefault();
        const product = { name, brand, madein, price };

        if (id === '_add') {
            ProductService.createProduct(product).then(() => {
                navigate('/product');
            });
        } else {
            ProductService.updateProduct(product, id).then(() => {
                navigate('/product');
            });
        }
    };

    const changeNameHandler = (event) => {
        setName(event.target.value);
    };

    const changeBrandHandler = (event) => {
        setBrand(event.target.value);
    };

    const changeMadeinHandler = (event) => {
        setMadein(event.target.value);
    };

    const changePriceHandler = (event) => {
        setPrice(event.target.value);
    };

    const cancel = () => {
        navigate('/product');
    };

    const getTitle = () => {
        if (id === '_add') {
            return <h1 className="text-center">Add Product</h1>;
        } else {
            return <h1 className="text-center">Update Product</h1>;
        }
    };

    return(

        <div>
            <br></br>
            <div className = "container">
                    <div className = "row">
                        <div className = "form-outline mb-4">
                            {getTitle()}
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Name: </label>
                                        <input placeholder="Product Name" name="nameame" className="form-control" 
                                            value={name} onChange={changeNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Brand: </label>
                                        <input placeholder="Product Brand" name="brand" className="form-control" 
                                            value={brand} onChange={changeBrandHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Made In: </label>
                                        <input placeholder="Made In" name="madein" className="form-control" 
                                            value={madein} onChange={changeMadeinHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Price: </label>
                                        <input placeholder="Price" name="price" className="form-control" 
                                            value={price} onChange={changePriceHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={saveOrUpdateProduct}>Save</button>
                                    <button className="btn btn-danger" onClick={cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>

    );
}
export default CreateProduct;