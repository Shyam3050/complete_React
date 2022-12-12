import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const ProductDetail = () => {
    const params = useParams();
     return <h2>
        product Detail
        
       <p> {params.productId}</p>
     </h2>
};
export default ProductDetail;