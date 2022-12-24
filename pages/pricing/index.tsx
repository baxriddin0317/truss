import Btn from "../../components/buttons/Btn"
import AppLayout from "../../components/layout/AppLayout"
import Pricing from "../../components/pricing"

const hero = {
    info: "PRICING DETAILS",
    title: "Start building today and save hours from the process.",
    childComponent: <Btn />  
}


const index = () => {
    return (
        <AppLayout heroChild={hero}>
            <Pricing />
        </AppLayout>
    )
}

export default index
