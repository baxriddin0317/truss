import Btn from "../../components/buttons/Btn"
import Demo from "../../components/demo"
import AppLayout from "../../components/layout/AppLayout"

const hero = {
    title: "Schedule a Live Demo with Your Data",
    description: "We’ll show you how Truss works by inputting your data into the automations you need most.",
    childComponent: <Btn />  
}

const index = () => {
    return (
        <AppLayout heroChild={hero}>
            <Demo />
        </AppLayout>
    )
}

export default index
