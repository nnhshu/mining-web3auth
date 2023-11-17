import DashBoard from "../pages/DashBoard";
import AboutUs from "../pages/About";
import MiningEquipment from "../pages/MiningEquipment";
import BuildHashRate from "../pages/BuildHashRate";
import ReferralProgram from "../pages/ReferralProgram";
import Affiliates from "../pages/Affiliates";
import Market from "../pages/Market";
import YourNft from "../pages/YourNft";
import Faqs from "../pages/Faq";
import PrivacyPolicy from "../pages/PrivacyPolicy/Privacy";
import Terms from "../pages/PrivacyPolicy/Terms";
import FourZeroFour from "../components/NotFound/404";
import ProductMine from "../pages/Products/mine";
import BuildHashRateDetail from "../pages/BuildHashRate/detail";
import PoolShare from "../pages/PoolShare";

const userRoutes = [
    { path: "/", component: <DashBoard /> },
    { path: "/about", component: <AboutUs /> },
    { path: "/mining-equipment", component: <MiningEquipment /> },
    { path: "/build-hashrate", component: <BuildHashRate /> },
    { path: "/referral-programs", component: <ReferralProgram /> },
    { path: "/affiliates", component: <Affiliates /> },
    { path: "/faq", component: <Faqs /> },
    { path: "/privacy-policy", component: <PrivacyPolicy /> },
    { path: "/terms-of-use", component: <Terms /> },
    { path: "/market", component: <Market /> },
    { path: "/your-nft", component: <YourNft /> },
    { path: "/product/mine", component: <ProductMine /> },
    { path: "/build-hashrate/detail/:id", component: <BuildHashRateDetail /> },
    { path: "/404", component: <FourZeroFour /> },
    { path: "/pool-share", component: <PoolShare /> },
]  

export { userRoutes }