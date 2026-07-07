/**
 * Made with Wonder
 * https://app.wonder.so/yna-tura/files/019f269b-6b46-777f-b695-785e0fb4f427/branches/main/pages/019f269b-6b48-73f4-9340-064d58b68665?nodeId=019f2882-13d1-7463-9ebe-5812fbe032fe
 * Jul 7, 2026
 */
export default function PetProfile () {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700;800&display=swap" rel="stylesheet" />
      <style>{"* { box-sizing: border-box; }"}</style>
      <div className="flex w-[393px] h-[852px] flex-col bg-[#0c0e09] overflow-clip">
        <div className="size-full inset-0 flex absolute flex-col overflow-clip">
          <div className="size-full inset-0 flex absolute flex-col shrink-0 bg-[url('https://cdn.wonder.so/images/019f269b-6b46-777f-b695-785e0fb4f427/88085cb88b44c04228faa2fa5c052b8d735476b71c2f33c3d9aac2997e2dd7a9.jpg')] bg-cover bg-center bg-no-repeat"></div>
          <div className="flex absolute h-[380px] flex-col left-0 right-0 bottom-0 bg-[linear-gradient(0deg,_rgba(12,_14,_9,_0.6)_0%,_rgba(0,_0,_0,_0)_100%)]"></div>
        </div>
        <div className="flex absolute justify-between items-center z-[10] left-0 top-4 right-0 px-4 py-0">
          <div className="size-[42px] flex justify-center items-center bg-[#0c0e098c] border-t border-b border-l border-r backdrop-blur-md rounded-full border-[#ffffff1a]">
            <div className="size-5 flex flex-col text-[#fbff12]">
              <svg stroke="rgb(251, 255, 18)" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" color="rgb(251, 255, 18)"><line x1="19" y1="12" x2="5" y2="12" color="rgb(251, 255, 18)" fill="none" stroke="rgb(251, 255, 18)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line><polyline points="12 19 5 12 12 5" color="rgb(251, 255, 18)" fill="none" stroke="rgb(251, 255, 18)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></polyline></svg>
            </div>
          </div>
          <div className="flex h-[38px] justify-center items-center bg-[#fbff12] shadow-[0px_4px_14px_rgba(12,14,9,0.25)] rounded-full px-4 py-0">
            <div className="text-[#0c0e09] font-['Inter'] text-[13px] font-bold leading-normal [display:inline-block] [overflow-wrap:normal]">Edit Profile</div>
          </div>
        </div>
        <div className="flex absolute h-fit flex-col z-[10] left-3.5 right-3.5 bottom-5 bg-[#ffffffd9] border-t border-b border-l border-r shadow-[0px_16px_40px_rgba(12,14,9,0.28)] backdrop-blur-xl rounded-[28px] px-[22px] py-6 gap-[18px] border-[#ffffff99]">
          <div className="flex flex-col gap-[3px]">
            <div className="text-[#0c0e09] font-['Inter'] text-[28px] font-extrabold leading-normal tracking-[-0.7px] [display:inline-block] [overflow-wrap:normal]">Mochi</div>
            <div className="text-[#6b6e66] font-['Inter'] text-[13px] font-medium leading-normal [display:inline-block] [overflow-wrap:normal]">Pet ID: PHB-2024-00125</div>
          </div>
          <div className="flex flex-wrap gap-y-3.5">
            <div className="flex w-1/2 flex-col gap-0.5">
              <div className="text-[#9a9d94] font-['Inter'] text-xs font-medium leading-normal tracking-[0.3px] uppercase [display:inline-block] [overflow-wrap:normal]">Species</div>
              <div className="text-[#0c0e09] font-['Inter'] text-[15px] font-bold leading-normal [display:inline-block] [overflow-wrap:normal]">Cat</div>
            </div>
            <div className="flex w-1/2 flex-col gap-0.5">
              <div className="text-[#9a9d94] font-['Inter'] text-xs font-medium leading-normal tracking-[0.3px] uppercase [display:inline-block] [overflow-wrap:normal]">Breed</div>
              <div className="text-[#0c0e09] font-['Inter'] text-[15px] font-bold leading-normal [display:inline-block] [overflow-wrap:normal]">Siamese</div>
            </div>
            <div className="flex w-1/2 flex-col gap-0.5">
              <div className="text-[#9a9d94] font-['Inter'] text-xs font-medium leading-normal tracking-[0.3px] uppercase [display:inline-block] [overflow-wrap:normal]">Age</div>
              <div className="text-[#0c0e09] font-['Inter'] text-[15px] font-bold leading-normal [display:inline-block] [overflow-wrap:normal]">2 years old</div>
            </div>
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={() => window.location.hash = 'AddReminder'} className="flex h-[50px] justify-center items-center bg-[#0c0e09] flex-1 rounded-2xl gap-2">
              <div className="size-[17px] flex flex-col text-[#fbff12]">
                <svg stroke="rgb(251, 255, 18)" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" color="rgb(251, 255, 18)"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" color="rgb(251, 255, 18)" fill="none" stroke="rgb(251, 255, 18)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path><path d="M13.73 21a2 2 0 0 1-3.46 0" color="rgb(251, 255, 18)" fill="none" stroke="rgb(251, 255, 18)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path></svg>
              </div>
              <div className="text-[#fbff12] font-['Inter'] text-sm font-bold leading-normal [display:inline-block] [overflow-wrap:normal]">Add Reminder</div>
            </button>
            <button type="button" onClick={() => window.location.hash = 'AddSchedule'} className="flex h-[50px] justify-center items-center bg-[#fbff12] flex-1 rounded-2xl gap-2">
              <div className="size-[17px] flex flex-col text-[#0c0e09]">
                <svg stroke="rgb(12, 14, 9)" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" color="rgb(12, 14, 9)"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" color="rgb(12, 14, 9)" fill="none" stroke="rgb(12, 14, 9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></rect><line x1="16" y1="2" x2="16" y2="6" color="rgb(12, 14, 9)" fill="none" stroke="rgb(12, 14, 9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line><line x1="8" y1="2" x2="8" y2="6" color="rgb(12, 14, 9)" fill="none" stroke="rgb(12, 14, 9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line><line x1="3" y1="10" x2="21" y2="10" color="rgb(12, 14, 9)" fill="none" stroke="rgb(12, 14, 9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line></svg>
              </div>
              <div className="text-[#0c0e09] font-['Inter'] text-sm font-bold leading-normal [display:inline-block] [overflow-wrap:normal]">Add Schedule</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
