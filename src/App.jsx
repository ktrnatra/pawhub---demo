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
import { useMemo, useState } from 'react';
import './app.css';

const routes = [
  { id: 'Welcome', label: "Welcome", Component: Welcome },
  { id: 'CreateAccount', label: "Create account", Component: CreateAccount },
  { id: 'Login', label: "lOG IN", Component: Login },
  { id: 'Home', label: "home", Component: Home },
  { id: 'MenuOverlay', label: "menu overlay home", Component: MenuOverlay },
  { id: 'MyPets', label: "My pets page", Component: MyPets },
  { id: 'PetSheet', label: "pet sheet", Component: PetSheet },
  { id: 'PetProfile', label: "pet profile", Component: PetProfile },
  { id: 'Community', label: "Community page", Component: Community },
  { id: 'CreatePost', label: "Create post page", Component: CreatePost },
  { id: 'Profile', label: "user profile page", Component: Profile },
];

function Hotspot({ className = '', to, setPage, label }) {
  return (
    <button
      type="button"
      aria-label={label || to}
      title={label || to}
      onClick={(e) => { e.stopPropagation(); setPage(to); } }
      className={`absolute z-50 bg-transparent border-0 cursor-pointer ${className}`}
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
          <Hotspot to="CreateAccount" setPage={setPage} label="Sign up with Google" className="left-[26px] top-[354px] w-[341px] h-[54px] rounded-2xl" />
          <Hotspot to="Home" setPage={setPage} label="Create Account" className="left-[26px] top-[742px] w-[341px] h-[56px] rounded-2xl" />
          <Hotspot to="Login" setPage={setPage} label="Log in" className="left-[205px] top-[812px] w-[70px] h-[30px]" />
        </>
      );
    case 'Login':
      return (
        <>
          <Hotspot to="Login" setPage={setPage} label="Log in with Google" className="left-[26px] top-[310px] w-[341px] h-[54px] rounded-2xl" />
          <Hotspot to="Home" setPage={setPage} label="Log in" className="left-[26px] top-[647px] w-[341px] h-[56px] rounded-2xl" />
          <Hotspot to="CreateAccount" setPage={setPage} label="Sign up" className="left-[215px] top-[724px] w-[70px] h-[30px]" />
        </>
      );
    case 'Home':
      return (
        <>
          <Hotspot to="MenuOverlay" setPage={setPage} label="Open menu" className="left-[20px] top-[20px] w-[64px] h-[64px]" />
          <Hotspot to="MyPets" setPage={setPage} label="View all pets" className="left-[280px] top-[595px] w-[95px] h-[40px]" />
          <Hotspot to="MyPets" setPage={setPage} label="Open Mochi" className="left-[20px] top-[635px] w-[165px] h-[150px]" />
          <Hotspot to="MyPets" setPage={setPage} label="Open Coco" className="left-[205px] top-[635px] w-[165px] h-[150px]" />
          {navHotspots(setPage)}
        </>
      );
    case 'MenuOverlay':
      return (
        <>
          <Hotspot to="Home" setPage={setPage} label="Close menu" className="left-[325px] top-[95px] w-[55px] h-[55px]" />
          <Hotspot to="Home" setPage={setPage} label="Home menu item" className="left-[20px] top-[270px] w-[350px] h-[65px]" />
          <Hotspot to="MyPets" setPage={setPage} label="My Pets menu item" className="left-[20px] top-[340px] w-[350px] h-[65px]" />
          <Hotspot to="PetProfile" setPage={setPage} label="Vaccination Cards menu item" className="left-[20px] top-[410px] w-[350px] h-[65px]" />
          <Hotspot to="Home" setPage={setPage} label="Reminders menu item" className="left-[20px] top-[480px] w-[350px] h-[65px]" />
          <Hotspot to="Community" setPage={setPage} label="Saved Posts menu item" className="left-[20px] top-[550px] w-[350px] h-[65px]" />
          <Hotspot to="Profile" setPage={setPage} label="Settings menu item" className="left-[20px] top-[620px] w-[350px] h-[65px]" />
          <Hotspot to="Profile" setPage={setPage} label="Help and Support menu item" className="left-[20px] top-[690px] w-[350px] h-[65px]" />
          <Hotspot to="Welcome" setPage={setPage} label="Log out" className="left-[20px] top-[760px] w-[350px] h-[70px]" />
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
          {navHotspots(setPage)}
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
        <Current />
        <DemoHotspots page={page} setPage={setPage} />
      </div>
    </main>
  );
}
