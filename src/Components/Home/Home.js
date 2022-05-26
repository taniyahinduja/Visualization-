import ScatterPlot from "../Scatter/Scatter";
import BarPlot from "../BarPlot/BarPlot";
import Sidebar from "../Sidebar/Sidebar";
import BarG from "../BarG/BarG";
import './Home.css'
function Home() {
    return (
        // <ScatterPlot/>
        <div class="container">
            <Sidebar />
            <BarPlot />
            {/* <ScatterPlot/> */}
            {/* <BarG/> */}
            
        </div>

    )
}
export default Home;