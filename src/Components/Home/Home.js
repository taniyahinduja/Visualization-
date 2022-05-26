import ScatterPlot from "../Scatter/Scatter";
import BarPlot from "../BarPlot/BarPlot";
import Sidebar from "../Sidebar/Sidebar";
import BarG from "../BarG/BarG";
import Example from "../Example/Example";
import './Home.css'
function Home() {
    return (
        // <ScatterPlot/>
        <div class="container">
            <Sidebar />
            {/* <BarPlot /> */}
            {/* <ScatterPlot/> */}
            {/* <BarG/> */}
            <Example/>
            
        </div>

    )
}
export default Home;