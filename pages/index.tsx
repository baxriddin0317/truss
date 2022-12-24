import Btn from "../components/buttons/Btn";
import AppLayout from "../components/layout/AppLayout";
import About from "../components/about/Index"

const hero = {
  info: "about truss",
  title: "“We’re saving thousands of hours.”",
  description: "See how Truss can help you solve data inefficiencies to make better, faster decisions.",
  childComponent: <Btn />  
}

export default function Home() {
  return (
    <AppLayout heroChild={hero}>
      <About />
    </AppLayout>
  )
}
