import Btn from "../../components/buttons/Btn";
import AppLayout from "../../components/layout/AppLayout";
import Product from "../../components/product";

const hero = {
    info: "truss features",
    title: "See How Truss Works",
    description: "Automations For All Your Data Processes",
    childComponent: <Btn />  
}

const index = () => {
    return (
        <AppLayout heroChild={hero}>
            <Product />
        </AppLayout>
    )
}

export default index
