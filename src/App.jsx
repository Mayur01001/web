import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/services";
import ContactForm from "./pages/contact";

//Projects
import Projects from './pages/projects/AllProjects';
import Commercial from './pages/projects/Commercial';
import Institutional from './pages/projects/Institutional';
import InteriorDesign from './pages/projects/InteriorDesign';
import Recreational from './pages/projects/Recreational';
import Residential from './pages/projects/Residential';
import Villas from './pages/projects/Villas';
import Industrial from "./pages/projects/Industrial";

//data
//Residential
import SaraswatiHeight from "./pages/data/Residential/Saraswati_Height";
import Monik from "./pages/data/Residential/Monik";
import Tripitak from "./pages/data/Residential/Tripitak";
import DreamAspire from "./pages/data/Residential/Dream_aspire";
import RoohiSolitaire from "./pages/data/Residential/Roohi_Solitaire";
import Nepeancy from "./pages/data/Residential/Nepeancy_Road";
import Minnat from "./pages/data/Residential/minnat";
import OrchidAarambh from "./pages/data/Residential/Orchid_Aarambh";
import RakshiGroup from "./pages/data/Residential/rakshi_group";
import MetroCrown from "./pages/data/Residential/metro_crown";
import HiteshHeights from "./pages/data/Residential/hitesh_heights";
import MetroSarvashramik from "./pages/data/Residential/metro_sarvashramik";
import RamTekadi from "./pages/data/Residential/ram_tekadi";
import BayView from "./pages/data/Residential/bay_view";
import SataraVatasala from "./pages/data/Residential/satara_vatsala";
import AnilPandit from "./pages/data/Residential/anil_pandit";
import SaraswatiParadise from "./pages/data/Residential/saraswati_paradise";
import ArihantNivara from "./pages/data/Residential/arihant_nivara";
import ShankeshwarHeights from "./pages/data/Residential/shankeshwar_heights";
import ProposedRedevelopment1 from "./pages/data/Residential/proposed_redevelopment_1";
import SaiSwarop from "./pages/data/Residential/sai_swarop";
import DreamSignature from "./pages/data/Residential/dream_signature";
import FirdousApartment from "./pages/data/Residential/firdous_apartment";
import SaraswatiSkyTerrace from "./pages/data/Residential/saraswati_sky_terrace";
import NeelamGroup from "./pages/data/Residential/neelam_group";
import IraInsignia from "./pages/data/Residential/ira_insignia";
import GraceFludic from "./pages/data/Residential/grace_fludic";

//Commercial
import BalajiVentures from "./pages/data/Commercial/balaji_ventures";

//Institutional
import MazgaonHighCourt from "./pages/data/institutional/mazgaon_high_court";

//Villas
import HouseforDeepakBhai from "./pages/data/villas/house_for_deepak_bhai";
import LadwaHouse from "./pages/data/villas/ladwa_house";
import TanzaniaBunglow from "./pages/data/villas/tanzania_bunglow";
import HouseforMrPatel from "./pages/data/villas/house_for_mr.patel";
import Washivali from "./pages/data/villas/washivali";





export default function App() {
  return (
    <Router>
      {/* Navbar will be visible on all pages */}
      <Navbar />

      {/* Page content */}
      <div className="pt-24"> {/* Add padding so content is below fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactForm />} />

          {/*Projects*/}
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/commercial' element={<Commercial />} />
          <Route path='/projects/institutional' element={<Institutional />} />
          <Route path='/projects/interiordesign' element={<InteriorDesign />} />
          <Route path='/projects/recreational' element={<Recreational />} />
          <Route path='/projects/residential' element={<Residential />} />
          <Route path='/projects/villas' element={<Villas />} />
          <Route path="/projects/industrial" element={<Industrial />} />

          {/*data*/}

          {/*Residential */}
          <Route path="/data/residential/saraswati_height" element={<SaraswatiHeight />} />          
          <Route path="/data/residential/monik" element={<Monik />} />          
          <Route path="/data/residential/tripitak" element={<Tripitak />} />         
          <Route path="/data/residential/dream_aspire" element={<DreamAspire />} />         
          <Route path="/data/residential/roohi_solitaire" element={<RoohiSolitaire />} />         
          <Route path="/data/residential/nepeancy_road" element={<Nepeancy />} />         
          <Route path="/data/residential/minnat" element={<Minnat />} />         
          <Route path="/data/residential/orchid_aarambh" element={<OrchidAarambh />} />         
          <Route path="/data/residential/rakshi_group" element={<RakshiGroup />} />         
          <Route path="/data/residential/metro_crown" element={<MetroCrown />} />         
          <Route path="/data/residential/hitesh_heights" element={<HiteshHeights />} />         
          <Route path="/data/residential/metro_sarvashramik" element={<MetroSarvashramik />} />         
          <Route path="/data/residential/ram_tekadi" element={<RamTekadi />} />         
          <Route path="/data/residential/bay_view" element={<BayView />} />         
          <Route path="/data/residential/satara_vatsala" element={<SataraVatasala />} />         
          <Route path="/data/residential/anil_pandit" element={<AnilPandit />} />         
          <Route path="/data/residential/saraswati_paradise" element={<SaraswatiParadise />} />         
          <Route path="/data/residential/arihant_nivara" element={<ArihantNivara />} />         
          <Route path="/data/residential/shankeshwar_heights" element={<ShankeshwarHeights />} />         
          <Route path="/data/residential/proposed_redevelopment_1" element={<ProposedRedevelopment1 />} />         
          <Route path="/data/residential/sai_swarop" element={<SaiSwarop />} />         
          <Route path="/data/residential/dream_signature" element={<DreamSignature />} />         
          <Route path="/data/residential/firdous_apartment" element={<FirdousApartment />} />         
          <Route path="/data/residential/saraswati_sky_terrace" element={<SaraswatiSkyTerrace />} />         
          <Route path="/data/residential/neelam_group" element={<NeelamGroup />} />         
          <Route path="/data/residential/ira_insignia" element={<IraInsignia />} />         
          <Route path="/data/residential/grace_fludic" element={<GraceFludic />} />         
          <Route path="/data/residential/ira_insignia" element={<IraInsignia />} /> 

          {/*Commercial */}
          <Route path="/data/commercial/balaji_ventures" element={<BalajiVentures />} />

          {/*Institutional */}
           <Route path="/data/institutional/mazgaon_high_court" element={<MazgaonHighCourt />} />

          {/*Villas */}
           <Route path="/data/villas/house_for_deepak_bhai" element={<HouseforDeepakBhai />} />
           <Route path="/data/villas/ladwa_house" element={<LadwaHouse />} />
           <Route path="/data/villas/tanzania_bunglow" element={<TanzaniaBunglow />} />
           <Route path="/data/villas/house_for_mr.patel" element={<HouseforMrPatel />} />
           <Route path="/data/villas/washivali" element={<Washivali />} />
          
          
        </Routes>
      </div>
    </Router>
  );
}
