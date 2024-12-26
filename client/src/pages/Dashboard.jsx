import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";

export default function Dasjboard() {
  const loacation = useLocation();
  const [tab,setTab] = useState('');

  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  },[location.search]);
  return (
    <div className="min-h-screen felx felx-col md:flex-row">
      <div className="md:w-56 ">
        <DashSidebar/>
      </div>
        {tab==='profile' && <DashProfile/>}
    </div>
  )
}
