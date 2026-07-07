import AddReminder from "./pages/AddReminder";
import AddSchedule from "./pages/AddSchedule";
import PetProfileCoco from './pages/PetProfileCoco.jsx';
import Welcome from './pages/Welcome.jsx';
import CreateAccount from './pages/CreateAccount.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import MenuOverlay from './pages/MenuOverlay.jsx';
import MyPets from './pages/MyPets.jsx';
import PetSheet from './pages/PetSheet.jsx';
import PetProfile from './pages/PetProfile.jsx';
import Community from './pages/Community.jsx';
import CreatePost from './pages/CreatePost.jsx';
import Profile from './pages/Profile.jsx';
import { useMemo, useState, useEffect } from 'react';
import './app.css';

const routes = [
  { id: 'Welcome', label: "Welcome", Component: Welcome },
  { id: 'CreateAccount', label: "Create account", Component: CreateAccount },
  { id: 'Login', label: "lOG IN", Component: Login },
  { id: 'Home', label: "home", Component: Home }, 
  { id: 'AddReminder', label: 'add reminder page', Component: AddReminder },
  { id: 'AddSchedule', label: 'add schedule page', Component: AddSchedule },
  { id: 'MenuOverlay', label: "menu overlay home", Component: MenuOverlay },
  { id: 'MyPets', label: "My pets page", Component: MyPets },
  { id: 'PetSheet', label: "pet sheet", Component: PetSheet },
  { id: 'PetProfile', label: "pet profile", Component: PetProfile },
  { id: 'PetProfileCoco', label: 'Coco pet profile', Component: PetProfileCoco },
  { id: 'Community', label: "Community page", Component: Community },
  { id: 'CreatePost', label: "Create post page", Component: CreatePost },
  { id: 'Profile', label: "user profile page", Component: Profile },
];

function Hotspot({ to, setPage, label, className = '', feedback = false }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => setPage(to)}
      className={`absolute z-50 ${className} ${
        feedback
          ? 'bg-transparent active:bg-[#0c0e09]/10 transition-colors duration-150 focus:outline-none'
          : 'bg-transparent'
      }`}
    />
  );
}

const navHotspots = (setPage) => (
  <>
    <Hotspot to="Home" setPage={setPage} label="Go to Home" className="left-[18px] bottom-[18px] w-[72px] h-[66px]" />
    <Hotspot to="MyPets" setPage={setPage} label="Go to My Pets" className="left-[105px] bottom-[18px] w-[72px] h-[66px]" />
    <Hotspot to="Community" setPage={setPage} label="Go to Community" className="left-[195px] bottom-[18px] w-[82px] h-[66px]" />
    <Hotspot to="Profile" setPage={setPage} label="Go to Profile" className="left-[300px] bottom-[18px] w-[72px] h-[66px]" />
  </>
);

function DemoHotspots({ page, setPage }) {
  switch (page) {
    case 'Welcome':
  return <Hotspot to="CreateAccount" setPage={setPage} label="Get Started" className="left-[70px] top-[555px] w-[255px] h-[90px] rounded-[34px]" />;
    case 'CreateAccount':
      return (
        <>
          <Hotspot feedback to="CreateAccount" setPage={setPage} label="Sign up with Google" className="left-[26px] top-[354px] w-[341px] h-[54px] rounded-2xl" />
          <Hotspot to="Home" setPage={setPage} label="Create Account" className="left-[26px] top-[742px] w-[341px] h-[56px] rounded-2xl" />
          <Hotspot to="Login" setPage={setPage} label="Log in" className="left-[205px] top-[812px] w-[70px] h-[30px]" />
        </>
      );
    case 'Login':
      return (
        <>
          <Hotspot feedback to="Login" setPage={setPage} label="Log in with Google" className="left-[26px] top-[310px] w-[341px] h-[54px] rounded-2xl" />
          <Hotspot to="Home" setPage={setPage} label="Log in" className="left-[26px] top-[647px] w-[341px] h-[56px] rounded-2xl" />
          <Hotspot to="CreateAccount" setPage={setPage} label="Sign up" className="left-[215px] top-[724px] w-[70px] h-[30px]" />
        </>
      );
    case 'Home':
  return (
    <>
      <Hotspot to="MenuOverlay" setPage={setPage} label="Open menu" className="left-[20px] top-[20px] w-[64px] h-[64px]" />
      <Hotspot to="MyPets" setPage={setPage} label="View all pets" className="left-[105px] bottom-[18px] w-[72px] h-[66px]" />
      <Hotspot to="PetProfile" setPage={setPage} label="Open Mochi" className="left-[20px] top-[635px] w-[165px] h-[150px]" />
      <Hotspot to="PetProfileCoco" setPage={setPage} label="Open Coco" className="left-[205px] top-[635px] w-[165px] h-[150px]" />
      {navHotspots(setPage)}
    </>
  );
case 'MenuOverlay':
  return (
    <>
      {/* close X */}
      <Hotspot to="Home" setPage={setPage} label="Close menu" className="left-[238px] top-[52px] w-[48px] h-[48px] rounded-full" />

      {/* profile area only */}
      <Hotspot to="Profile" setPage={setPage} label="Open profile" className="left-[20px] top-[112px] w-[250px] h-[68px] rounded-2xl" />

      {/* menu items  */}
      <Hotspot to="Home" setPage={setPage} label="Home" className="left-[20px] top-[198px] w-[250px] h-[50px]" />
      <Hotspot to="MyPets" setPage={setPage} label="My Pets" className="left-[20px] top-[248px] w-[250px] h-[50px]" />
      <Hotspot to="PetProfile" setPage={setPage} label="Vaccination Cards" className="left-[20px] top-[298px] w-[250px] h-[50px]" />
      <Hotspot to="Home" setPage={setPage} label="Reminders" className="left-[20px] top-[348px] w-[250px] h-[50px]" />
      <Hotspot to="Community" setPage={setPage} label="Saved Posts" className="left-[20px] top-[398px] w-[250px] h-[50px]" />
      <Hotspot to="MenuOverlay" setPage={setPage} label="Settings" className="left-[20px] top-[448px] w-[250px] h-[50px]" />
      <Hotspot to="MenuOverlay" setPage={setPage} label="Help and Support" className="left-[20px] top-[498px] w-[250px] h-[50px]" />

      {/* log out */}
      <Hotspot to="Welcome" setPage={setPage} label="Log out" className="left-[20px] top-[778px] w-[250px] h-[52px]" />
    </>
  );
    case 'MyPets':
      return (
        <>
          <Hotspot to="Home" setPage={setPage} label="Back" className="left-[18px] top-[32px] w-[55px] h-[55px]" />
          <Hotspot to="PetSheet" setPage={setPage} label="Add new pet" className="left-[125px] top-[700px] w-[150px] h-[70px]" />
          <Hotspot to="PetProfile" setPage={setPage} label="Open first pet profile" className="left-[18px] top-[120px] w-[355px] h-[90px]" />
          {navHotspots(setPage)}
        </>
      );
    case 'PetSheet':
      return (
        <>
          <Hotspot to="MyPets" setPage={setPage} label="Close add pet" className="right-[18px] top-[26px] w-[55px] h-[55px]" />
          <Hotspot to="MyPets" setPage={setPage} label="Save pet" className="left-[32px] bottom-[38px] w-[330px] h-[58px]" />
        </>
      );
    case 'PetProfile':
  return (
    <>
      <Hotspot to="MyPets" setPage={setPage} label="Back to pets" className="left-[20px] top-[24px] w-[55px] h-[55px]" />

      <Hotspot to="AddReminder" setPage={setPage} label="Open Add Reminder" className="left-[0px] top-[300px] w-[196px] h-[300px] rounded-2xl" />

      <Hotspot to="AddSchedule" setPage={setPage} label="Open Add Schedule" className="left-[196px] top-[300px] w-[197px] h-[300px] rounded-2xl" />

      {navHotspots(setPage)}
    </>
  );
    case 'AddReminder':
  return (
    <>
      <Hotspot to="PetProfile" setPage={setPage} label="Close reminder sheet" className="right-[28px] top-[314px] w-[44px] h-[44px] rounded-full" />
      <Hotspot to="PetProfile" setPage={setPage} label="Cancel reminder" className="left-[28px] bottom-[82px] w-[95px] h-[48px] rounded-full" />
    </>
  );
    case 'AddSchedule':
  return (
    <>
      <Hotspot to="PetProfile" setPage={setPage} label="Close schedule sheet" className="right-[28px] top-[314px] w-[44px] h-[44px] rounded-full" />
      <Hotspot to="PetProfile" setPage={setPage} label="Cancel schedule" className="left-[28px] bottom-[82px] w-[95px] h-[48px] rounded-full" />
    </>
  );
    case 'Community':
      return (
        <>
          <Hotspot to="CreatePost" setPage={setPage} label="Create post" className="right-[14px] bottom-[92px] w-[62px] h-[62px] rounded-full" />
          {navHotspots(setPage)}
        </>
      );
    case 'CreatePost':
      return (
        <>
          <Hotspot to="Community" setPage={setPage} label="Back to community" className="left-[18px] top-[30px] w-[55px] h-[55px]" />
          <Hotspot to="Community" setPage={setPage} label="Post" className="right-[18px] top-[30px] w-[80px] h-[55px]" />
        </>
      );
    case 'Profile':
      return (
        <>
          <Hotspot to="Home" setPage={setPage} label="Back to home" className="left-[18px] top-[20px] w-[55px] h-[55px]" />
          <Hotspot to="MyPets" setPage={setPage} label="My Pets button" className="left-[55px] top-[525px] w-[140px] h-[55px]" />
          {navHotspots(setPage)}
        </>
      );
    default:
      return null;
  }
}

export default function App() {
  const [page, setPage] = useState('Welcome');
  const route = useMemo(() => routes.find((r) => r.id === page) || routes[0], [page]);
  const Current = route.Component;

  return (
    <main className="min-h-screen w-screen bg-neutral-950 text-black flex items-center justify-center p-0 md:p-4 overflow-auto">
      <div className="relative w-[393px] h-[852px] max-w-full overflow-hidden rounded-[32px] shadow-2xl bg-white">
        <Current setPage={setPage} />
        <DemoHotspots page={page} setPage={setPage} />
      </div>
    </main>
  );
}
