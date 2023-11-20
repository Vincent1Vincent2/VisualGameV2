const gameBox = document.getElementById(".gameBox");
const displayText = document.getElementById("displayText");
const startOverBtn = document.getElementById("startOverBtn");
const startRoomBg = document.getElementById("startRoomBg");
const otherRoomBg = document.getElementById("otherRoomBg"); //SCENE
const brownRoomBack = document.getElementById("brownRoomBack"); //CLICK (BACK ARROW)

const brownRoomBackBookshelfFirst = document.getElementById(
  "brownRoomBackBookshelfFirst"
);
const brownRoomBackDeskAfterBookshelf = document.getElementById(
  "brownRoomBackDeskAfterBookshelf"
);
const brownRoomBackDeskFirst = document.getElementById(
  "brownRoomBackDeskFirst"
);
const brownRoomBackBookshelfAfterDesk = document.getElementById(
  "brownRoomBackBookshelfAfterDesk"
);

const brownRoomBackBookshelfDesk = document.getElementById(
  "brownRoomBackBookshelfDesk"
);
const brownRoomBackDeskBookshelf = document.getElementById(
  "brownRoomBackDeskBookshelf"
);
const brownRoomBackPiano = document.getElementById("brownRoomBackPiano"); //CLICK (BACK ARROW)
const brownRoomBackAllUsed = document.getElementById("brownRoomBackAllUsed"); //CLICK (BACK ARROW)
const brownRoomBackAllUsedBack = document.getElementById(
  "brownRoomBackAllUsedBack"
);
const blueRoomBack = document.getElementById("blueRoomBack"); //CLICK (BACK ARROW)
const ipodBackArrow = document.getElementById("ipodBackArrow");
const redRoomBack = document.getElementById("redRoomBack"); //CLICK (BACK ARROW)
const inventoryContainer = document.getElementById("inventoryContainer"); //BACKGROUND
const inventorySlot = document.getElementsByClassName("inventorySlot");
const slotOne = document.getElementById("slotOne");
const slotTwo = document.getElementById("slotTwo");
const slotThree = document.getElementById("slotThree");
const slotFour = document.getElementById("slotFour");
const slotFive = document.getElementById("slotFive");
const blueKey = document.getElementById("blueKey"); //Click (ITEM)
const blueKeyDeskFirst = document.getElementById("blueKeyDeskFirst");
const useBlueKey = document.getElementById("useBlueKey"); //Click (ITEM)
const redKey = document.getElementById("redKey"); //Click (ITEM)
const useRedKey = document.getElementById("useRedKey"); //Click (ITEM)
const greenKey = document.getElementById("greenKey"); //Click (ITEM)
const useGreenKey = document.getElementById("useGreenKey"); //Click (ITEM)
const lockPick = document.getElementById("lockPick"); //Click (ITEM
const lockPickDeskFirst = document.getElementById("lockPickDeskFirst");
const useLockPick = document.getElementById("useLockPick"); //Click (ITEM)
const noteSheet = document.getElementById("noteSheet"); //Click (ITEM)
const useNoteSheet = document.getElementById("useNoteSheet"); //Click (ITEM)
const useLockPickBlue = document.getElementById("useLockPickBlue"); //CLICK CLICK (ITEM USE)
const useLockPickRed = document.getElementById("useLockPickRed"); //CLICK CLICK (ITEM USE)
const useLockPickGreen = document.getElementById("useLockPickGreen"); //CLICK CLICK (ITEM USE)
const lockedDoorText = document.getElementById("lockedTitle"); //TEXT
const usedDoorTitle = document.getElementById("usedDoorTitle"); //TEXT
const blueDoor = document.getElementById("blueDoor"); // Click
const blueDoorBg = document.getElementById("blueDoorOpen"); //BACKGROUND
const openBlueDoor = document.getElementById("openBlueDoor"); //Click / hover
const redDoor = document.getElementById("redDoor"); // Click
const redDoorBg = document.getElementById("redDoorOpen"); //BACKGROUND
const openRedDoor = document.getElementById("openRedDoor"); //Click / hover
const brownDoor = document.getElementById("brownDoor"); // Click
const brownDoorBg = document.getElementById("brownDoorOpen"); //BACKGROUND
const brownDoorOnlyPiano = document.getElementById("brownDoorOnlyPiano"); //Click / hover
const brownDoorPianoTime = document.getElementById("brownDoorPianoTime");
const greenDoor = document.getElementById("greenDoor"); // Click
const greenDoorBg = document.getElementById("greenDoorOpen"); //BACKGROUND
const openGreenDoor = document.getElementById("openGreenDoor"); //Click / hover
const usedBlueDoor = document.getElementById("usedBlueDoor");
const usedRedDoor = document.getElementById("usedRedDoor");
const usedBrownDoor = document.getElementById("usedBrownDoor");
const bookshelf = document.getElementById("bookshelf"); //Click //Click (FURNITURE)
const bookshelfDeskFirst = document.getElementById("bookshelfDeskFirst");
const exploreBookshelf = document.getElementById("exploreBookshelf"); // (FURNITURE)
const usedBookshelf = document.getElementById("usedBookshelf"); // (FURNITURE)
const desk = document.getElementById("desk"); //Click (FURNITURE)
const deskBookshelfFirst = document.getElementById("deskBookshelfFirst");
const deskOpen = document.getElementById("deskOpen"); // (FURNITURE)
const usedDesk = document.getElementById("usedDesk"); //(FURNITURE)
const piano = document.getElementById("piano"); //Click
const usePiano = document.getElementById("usePiano");
const playPiano = document.getElementById("playPiano");
const usedPiano = document.getElementById("usedPiano");
const bed = document.getElementById("bed");
const bedSideTable = document.getElementById("bedSideTable");

//LockPick MiniGame
const lockPickGameContainer = document.getElementById("lockPickGameContainer");
const gameInfo = document.getElementById("gameInfo");
const startBtn = document.getElementById("startBtn");
const backBtnBlue = document.getElementById("backBtnBlue");
const backBtnRed = document.getElementById("backBtnRed");
const backBtnGreen = document.getElementById("backBtnGreen");
const enterRoom = document.getElementById("enterRoom");
const failText = document.getElementById("failText");
const successText = document.getElementById("successText");

const countDownNumber = document.getElementById("countDownNumber");
const lockBodyBg = document.getElementById("lockBodyBg");
const lockContainer = document.getElementById("lockContainer");
const lockPickArm = document.getElementById("lockContainer");
const dot = document.getElementById("dot");
const outerCircle = document.getElementById("outerCircle");
const innerCircle = document.getElementById("innerCircle");
const pinContainer = document.getElementById("pinContainer");
let pin = document.querySelector(".pin.current");
let unlockTimer = null;
let setUnlockTimer = false;

//Intractable iPod
const ipodContainer = document.getElementById("ipodContainer");
const ipodSvg = document.getElementById("ipodSvg");
const ipodScreen = document.getElementById("ipodScreen");
const aboutScreen = document.getElementById("aboutScreen");
const ipodInstruction = document.getElementById("ipodInstruction");
const menuBackBtn = document.getElementById("menuBackBtn");
const playPauseBtn = document.getElementById("playPauseBtn");
const settingsScreen = document.getElementById("settingsScreen");
const darkModeButton = document.getElementById("deviceInfoButton");
const deviceInfoButton = document.getElementById("darkModeButton");
const menuButtons = document.getElementById("menuButtons");
const settingsButton = document.getElementById("settingsButton");
const photoButton = document.getElementById("photoButton");
const videoButton = document.getElementById("videoButton");
const musicButton = document.getElementById("musicButton");
const ipodMusicPlayer = document.getElementById("ipodPlayer");
const videoContainer = document.getElementById("videoContainer");
const ipodVideo = document.getElementById("ipodVideo");
const photoContainer = document.getElementById("photoContainer");

//Piano Keyboard MiniGame
const pianoBody = document.getElementById("pianoBody");

//WHITE KEYS
const noteFR = document.getElementById("keyFR"); //KEY01
const noteGR = document.getElementById("keyGR"); //KEY03
const noteAR = document.getElementById("keyAR"); //KEY05
const noteBR = document.getElementById("keyBR"); //KEY07
const noteCR = document.getElementById("keyCR"); //KEY08
const noteDR = document.getElementById("keyDR"); //KEY10
const noteER = document.getElementById("keyER"); //KEY12
const noteFL = document.getElementById("keyFL"); //KEY13
const noteGL = document.getElementById("keyGL"); //KEY15
const noteAL = document.getElementById("keyAL"); //KEY17
const noteBL = document.getElementById("keyBL"); //KEY19
const noteCL = document.getElementById("keyCL"); //KEY20
const noteDL = document.getElementById("keyDL"); //KEY22
const noteEL = document.getElementById("keyEL"); //KEY24

//BLACK KEYS
const blackNoteFR = document.getElementById("blackFR"); //KEY02
const blackNoteGR = document.getElementById("blackGR"); //KEY04
const blackNoteAR = document.getElementById("blackAR"); //KEY06
const blackNoteCR = document.getElementById("blackCR"); //KEY09
const blackNoteDR = document.getElementById("blackDR"); //KEY11
const blackNoteFL = document.getElementById("blackFL"); //KEY14
const blackNoteGL = document.getElementById("blackGL"); //KEY16
const blackNoteAL = document.getElementById("blackAL"); //KEY18
const blackNoteCL = document.getElementById("blackCL"); //KEY21
const blackNoteDL = document.getElementById("blackDL"); //KEY23

//NOTES
const note01 = document.getElementById("note01");
const note02 = document.getElementById("note02");
const note03 = document.getElementById("note03");
const note04 = document.getElementById("note04");
const note05 = document.getElementById("note05");
const note06 = document.getElementById("note06");
const note07 = document.getElementById("note07");
const note08 = document.getElementById("note08");
const note09 = document.getElementById("note09");
const note10 = document.getElementById("note10");
const note11 = document.getElementById("note11");
const note12 = document.getElementById("note12");
const note13 = document.getElementById("note13");
const note14 = document.getElementById("note14");
const note15 = document.getElementById("note15");
const note16 = document.getElementById("note16");
const note17 = document.getElementById("note17");
const note18 = document.getElementById("note18");
const note19 = document.getElementById("note19");
const note20 = document.getElementById("note20");
const note21 = document.getElementById("note21");
const note22 = document.getElementById("note22");
const note23 = document.getElementById("note23");
const note24 = document.getElementById("note24");

let currentId = 1;

function startGame() {
  document.addEventListener("DOMContentLoaded", function () {
    const storedId = localStorage.getItem("currentId");
    currentId = storedId ? parseInt(storedId) : 1;
    updateText(currentId);
    applyStyling(currentId);
  });
}

function updateText(id) {
  const textData = optionTexts.find((item) => item.id === id);

  if (textData) {
    displayText.textContent = textData.text;
  }
}

const optionTexts = [
  {
    id: 1,
    text: "You've been locked inside a house and need to find the right keys to make it out!",
  },
  {
    id: 2,
    text: "What is this then...",
  },
  {
    id: 3,
    text: "Look in the bookshelf, a lock pick!",
  },
  {
    id: 4,
    text: "This will come in handy!",
  },
  {
    id: 5,
    text: "I wonder what to check next?",
  },
  {
    id: 6,
    text: "There in the drawer a blue key!",
  },
  {
    id: 7,
    text: "Nice a blue key",
  },
  {
    id: 8,
    text: "Only the piano left now",
  },
  {
    id: 9,
    text: "So a blue key and a lock pick... witch do i use first",
  },
  {
    id: 10,
    text: "It worked, let's check out the room",
  },
  {
    id: 11,
    text: "There in the drawer a blue key!",
  },
  {
    id: 12,
    text: "Nice, this will be useful",
  },
  {
    id: 13,
    text: "Let's see what more i can find...",
  },
  {
    id: 14,
    text: "Look there, a lock pick on the shelf!",
  },
  {
    id: 15,
    text: "Nice, this will come in handy",
  },
  {
    id: 16,
    text: "Only the piano left now",
  },
  {
    id: 17,
    text: "On the bed.. a red key",
  },
  {
    id: 18,
    text: "Nice, oh and whats that on the bed side table?",
  },
  {
    id: 19,
    text: "",
  },
  {
    id: 20,
    text: "Let's see whats next!",
  },
  {
    id: 21,
    text: "Let's see whats next!",
  },
  {
    id: 22,
    text: "",
  },
  {
    id: 23,
    text: "",
  },
  {
    id: 24,
    text: "Nice it worked, let's see what in there",
  },
  {
    id: 25,
    text: "Ok let's see.. A green key on the floor!",
  },
  {
    id: 26,
    text: "And there in the corner, a note sheet!",
  },
  {
    id: 27,
    text: "Maybe i can play the piano now",
  },
  {
    id: 28,
    text: "What to do now?",
  },
  {
    id: 29,
    text: "Is this the end?",
  },
  {
    id: 30,
    text: "You made it!",
  },
  {
    id: 31,
    text: "Too back, i could still use the blue key",
  },
  {
    id: 32,
    text: "Good thing i still had the key, the door is open now",
  },
  {
    id: 33,
    text: "On the bed.. a red key",
  },
  {
    id: 34,
    text: "Nice, oh and whats that on the bed side table?",
  },
  {
    id: 35,
    text: "",
  },
  {
    id: 36,
    text: "That was cool, let's go back",
  },
  {
    id: 37,
    text: "I wonder whats behind the red door...",
  },
  {
    id: 38,
    text: "Let's find out!",
  },
  {
    id: 39,
    text: "Look on the floor, a green key!",
  },
  {
    id: 40,
    text: "And there in the corner, a note sheet",
  },
  {
    id: 41,
    text: "I could probably use the piano now",
  },
  {
    id: 42,
    text: "Piano or green door...",
  },
  {
    id: 43,
    text: "",
  },
  {
    id: 44,
    text: "",
  },
  {
    id: 45,
    text: "",
  },
  {
    id: 46,
    text: "",
  },
  {
    id: 47,
    text: "",
  },
  {
    id: 48,
    text: "",
  },
  {
    id: 49,
    text: "",
  },
  {
    id: 50,
    text: "",
  },
  {
    id: 51,
    text: "",
  },
  {
    id: 52,
    text: "",
  },
  {
    id: 53,
    text: "",
  },
];

function applyStyling(id) {
  switch (id) {
    case 1:
      startRoomBg.classList.remove("hide");
      blueDoor.classList.remove("hide");
      redDoor.classList.remove("hide");
      brownDoor.classList.remove("hide");
      brownDoorBg.classList.remove("hide");
      greenDoor.classList.remove("hide");
      break;
    case 2:
      startRoomBg.classList.add("hide");
      blueDoor.classList.add("hide");
      redDoor.classList.add("hide");
      brownDoor.classList.add("hide");
      brownDoorBg.classList.add("hide");
      greenDoor.classList.add("hide");
      otherRoomBg.classList.remove("hide");
      bookshelf.classList.remove("hide");
      desk.classList.remove("hide");
      piano.classList.remove("hide");
      break;
    case 3:
      bookshelf.classList.add("hide");
      desk.classList.add("hide");
      piano.classList.add("hide");
      otherRoomBg.classList.remove("hide");
      exploreBookshelf.classList.remove("hide");
      slotFour.classList.add("showFlex");
      lockPick.classList.remove("hide");
      break;
    case 4:
      otherRoomBg.classList.remove("hide");
      lockPick.classList.remove("lockPickBookshelf");
      brownRoomBackBookshelfFirst.classList.remove("hide");
      exploreBookshelf.classList.remove("hide");
      slotFour.classList.add("showFlex");
      lockPick.classList.remove("hide");
      lockPick.style.pointerEvents = "none";
      break;
    case 5:
      otherRoomBg.classList.remove("hide");
      usedBookshelf.classList.remove("hide");
      deskBookshelfFirst.classList.remove("hide");
      piano.classList.remove("hide");
      exploreBookshelf.classList.add("hide");
      brownRoomBackBookshelfFirst.classList.add("hide");
      lockPick.classList.remove("lockPickBookshelf");
      slotFour.classList.add("showFlex");
      lockPick.classList.remove("hide");
      lockPick.style.pointerEvents = "none";
      break;
    case 6:
      otherRoomBg.classList.remove("hide");
      deskOpen.classList.remove("hide");
      slotOne.classList.add("showFlex");
      blueKey.classList.remove("hide");
      usedBookshelf.classList.add("hide");
      deskBookshelfFirst.classList.add("hide");
      piano.classList.add("hide");
      lockPick.classList.remove("lockPickBookshelf");
      slotFour.classList.add("showFlex");
      lockPick.classList.remove("hide");
      lockPick.style.pointerEvents = "none";
      break;
    case 7:
      otherRoomBg.classList.remove("hide");
      deskOpen.classList.remove("hide");
      blueKey.classList.remove("blueKeyDesk");
      brownRoomBackDeskAfterBookshelf.classList.remove("hide");
      slotOne.classList.add("showFlex");
      blueKey.classList.remove("hide");
      lockPick.classList.remove("lockPickBookshelf");
      slotFour.classList.add("showFlex");
      lockPick.classList.remove("hide");
      blueKey.style.pointerEvents = "none";
      lockPick.style.pointerEvents = "none";
      break;
    case 8:
      brownRoomBackBookshelfDesk.classList.remove("hide");
      otherRoomBg.classList.remove("hide");
      deskOpen.classList.add("hide");
      usedBookshelf.classList.remove("hide");
      usedDesk.classList.remove("hide");
      piano.classList.remove("hide");
      blueKey.classList.remove("blueKeyDesk");
      slotOne.classList.add("showFlex");
      blueKey.classList.remove("hide");
      lockPick.classList.remove("lockPickBookshelf");
      slotFour.classList.add("showFlex");
      lockPick.classList.remove("hide");
      blueKey.style.pointerEvents = "none";
      lockPick.style.pointerEvents = "none";
      break;
    case 9:
      brownRoomBackBookshelfDesk.classList.add("hide");
      startRoomBg.classList.remove("hide");
      otherRoomBg.classList.add("hide");
      blueDoor.classList.remove("hide");
      redDoor.classList.remove("hide");
      brownDoorOnlyPiano.classList.remove("hide");
      usedBookshelf.classList.add("hide");
      usedDesk.classList.add("hide");
      piano.classList.add("hide");
      greenDoor.classList.remove("hide");
      blueKey.classList.add("hide");
      slotOne.classList.add("showFlex");
      useBlueKey.classList.remove("hide");
      lockPick.classList.remove("lockPickBookshelf");
      lockPick.classList.add("hide");
      slotFour.classList.add("showFlex");
      useLockPick.classList.remove("hide");
      lockPickDeskFirst.classList.add("hide");
      blueKeyDeskFirst.classList.add("hide");
      brownRoomBackDeskBookshelf.classList.add("hide");
      break;
    case 10:
      startRoomBg.classList.remove("hide");
      otherRoomBg.classList.add("hide");
      blueDoor.classList.add("hide");
      openBlueDoor.classList.remove("hide");
      blueDoorBg.classList.remove("hide");
      redDoor.classList.remove("hide");
      brownDoorOnlyPiano.classList.remove("hide");
      greenDoor.classList.remove("hide");
      slotOne.classList.add("hide");
      useBlueKey.classList.add("hide");
      lockPick.classList.remove("lockPickBookshelf");
      lockPick.classList.add("hide");
      slotFour.classList.add("showFlex");
      useLockPick.classList.remove("hide");
      useLockPick.style.pointerEvents = "none";
      break;
    case 11:
      otherRoomBg.classList.remove("hide");
      deskOpen.classList.remove("hide");
      slotOne.classList.add("showFlex");
      blueKeyDeskFirst.classList.remove("hide");
      desk.classList.add("hide");
      bookshelf.classList.add("hide");
      piano.classList.add("hide");
      break;
    case 12:
      otherRoomBg.classList.remove("hide");
      deskOpen.classList.remove("hide");
      blueKeyDeskFirst.classList.remove("blueKeyDeskFirst");
      brownRoomBackDeskFirst.classList.remove("hide");
      slotOne.classList.add("showFlex");
      blueKeyDeskFirst.classList.remove("hide");
      break;
    case 13:
      otherRoomBg.classList.remove("hide");
      deskOpen.classList.add("hide");
      usedDesk.classList.remove("hide");
      slotOne.classList.add("showFlex");
      blueKeyDeskFirst.classList.remove("hide");
      blueKeyDeskFirst.classList.remove("blueKeyDeskFirst");
      bookshelfDeskFirst.classList.remove("hide");
      piano.classList.remove("hide");
      brownRoomBackDeskFirst.classList.add("hide");
      blueKeyDeskFirst.style.pointerEvents = "none";
      break;
    case 14:
      otherRoomBg.classList.remove("hide");
      usedDesk.classList.add("hide");
      bookshelfDeskFirst.classList.add("hide");
      piano.classList.add("hide");
      slotOne.classList.add("showFlex");
      blueKeyDeskFirst.classList.remove("hide");
      blueKeyDeskFirst.classList.remove("blueKeyDeskFirst");
      slotFour.classList.add("showFlex");
      lockPickDeskFirst.classList.remove("hide");
      exploreBookshelf.classList.remove("hide");
      break;
    case 15:
      otherRoomBg.classList.remove("hide");
      slotOne.classList.add("showFlex");
      blueKeyDeskFirst.classList.remove("hide");
      blueKeyDeskFirst.classList.remove("blueKeyDeskFirst");
      slotFour.classList.add("showFlex");
      lockPickDeskFirst.classList.remove("hide");
      lockPickDeskFirst.classList.remove("lockPickDeskFirst");
      exploreBookshelf.classList.remove("hide");
      brownRoomBackBookshelfAfterDesk.classList.remove("hide");
      break;
    case 16:
      otherRoomBg.classList.remove("hide");
      slotOne.classList.add("showFlex");
      blueKeyDeskFirst.classList.remove("hide");
      blueKeyDeskFirst.classList.remove("blueKeyDeskFirst");
      slotFour.classList.add("showFlex");
      lockPickDeskFirst.classList.remove("hide");
      lockPickDeskFirst.classList.remove("lockPickDeskFirst");
      usedBookshelf.classList.remove("hide");
      usedDesk.classList.remove("hide");
      piano.classList.remove("hide");
      exploreBookshelf.classList.add("hide");
      brownRoomBackBookshelfAfterDesk.classList.add("hide");
      brownRoomBackDeskBookshelf.classList.remove("hide");
      break;
    case 17:
      startRoomBg.classList.add("hide");
      otherRoomBg.classList.remove("hide");
      openBlueDoor.classList.add("hide");
      blueDoorBg.classList.add("hide");
      redDoor.classList.add("hide");
      brownDoorOnlyPiano.classList.add("hide");
      greenDoor.classList.add("hide");
      bed.classList.remove("hide");
      bedSideTable.classList.remove("hide");
      slotOne.classList.add("hide");
      slotOne.classList.remove("showFlex");
      useLockPick.classList.remove("hide");
      useLockPick.style.pointerEvents = "none";
      slotFour.classList.add("showFlex");
      slotTwo.classList.add("showFlex");
      redKey.classList.remove("hide");
      break;
    case 18:
      otherRoomBg.classList.remove("hide");
      bed.classList.remove("hide");
      bedSideTable.classList.remove("hide");
      ipodContainer.classList.remove("hide");
      useLockPick.classList.remove("hide");
      useLockPick.style.pointerEvents = "none";
      slotFour.classList.add("showFlex");
      slotTwo.classList.add("showFlex");
      redKey.classList.remove("hide");
      redKey.classList.remove("redKeyBed");
      redKey.style.pointerEvents = "none";
      break;
    case 19:
      otherRoomBg.classList.add("hide");
      bed.classList.add("hide");
      bedSideTable.classList.add("hide");
      useLockPick.classList.add("hide");
      slotFour.classList.remove("showFlex");
      slotTwo.classList.remove("showFlex");
      redKey.classList.add("hide");
      redKey.style.pointerEvents = "none";
      ipodSvg.style.width = "600px";
      ipodContainer.classList.add("showFlex");
      ipodContainer.classList.add("ipodContainer");
      ipodContainer.classList.remove("hide");
      ipodContainer.classList.remove("ipodContainerTable");
      ipodBackArrow.classList.remove("hide");
      ipodInstruction.classList.remove("hide");
      ipodVideo.classList.add("hide");
      slotFour.classList.add("showFlex");
      slotFour.style.opacity = "0";
      break;
    case 20:
      ipodSvg.classList.add("hide");
      ipodContainer.classList.add("hide");
      ipodInstruction.classList.add("hide");
      ipodContainer.classList.remove("ipodContainer");
      ipodBackArrow.classList.add("hide");
      otherRoomBg.classList.remove("hide");
      bed.classList.remove("hide");
      bedSideTable.classList.remove("hide");
      blueRoomBack.classList.remove("hide");
      useLockPick.classList.remove("hide");
      useLockPick.style.pointerEvents = "none";
      slotFour.classList.add("showFlex");
      slotTwo.classList.add("showFlex");
      redKey.classList.remove("hide");
      redKey.classList.remove("redKeyBed");
      redKey.style.pointerEvents = "none";
      slotFour.style.opacity = "1";
      break;
    case 21:
      otherRoomBg.classList.add("hide");
      startRoomBg.classList.remove("hide");
      usedBlueDoor.classList.remove("hide");
      redDoor.classList.remove("hide");
      brownDoorOnlyPiano.classList.remove("hide");
      greenDoor.classList.remove("hide");
      bed.classList.add("hide");
      bedSideTable.classList.add("hide");
      blueRoomBack.classList.add("hide");
      useLockPick.classList.remove("hide");
      useLockPick.style.pointerEvents = "auto";
      slotFour.classList.add("showFlex");
      slotTwo.classList.add("showFlex");
      redKey.classList.add("hide");
      redKey.classList.remove("redKeyBed");
      useRedKey.classList.remove("hide");
      blueDoorBg.classList.add("hide");
      break;
    case 22:
      useLockPickBlue.classList.add("hide");
      useLockPickRed.classList.add("hide");
      useLockPickGreen.classList.add("hide");
      lockPickGameContainer.classList.add("showFlex");
      gameInfo.classList.remove("hide");
      startBtn.classList.remove("hide");
      document.body.classList.add("blueRoom");
      lockBodyBg.classList.add("blueRoom");
      blueDoor.classList.add("hide");
      redDoor.classList.add("hide");
      brownDoorOnlyPiano.classList.add("hide");
      greenDoor.classList.add("hide");
      startRoomBg.classList.add("hide");
      slotOne.classList.add("hide");
      slotOne.classList.remove("showFlex");
      slotFour.classList.add("hide");
      slotFour.classList.remove("showFlex");
      break;
    case 23:
      useLockPickBlue.classList.add("hide");
      useLockPickRed.classList.add("hide");
      useLockPickGreen.classList.add("hide");
      lockPickGameContainer.classList.add("showFlex");
      gameInfo.classList.remove("hide");
      startBtn.classList.remove("hide");
      document.body.classList.add("redRoom");
      lockBodyBg.classList.add("redRoom");
      blueDoor.classList.add("hide");
      usedBlueDoor.classList.add("hide");
      redDoor.classList.add("hide");
      brownDoorOnlyPiano.classList.add("hide");
      greenDoor.classList.add("hide");
      startRoomBg.classList.add("hide");
      slotTwo.classList.add("hide");
      slotTwo.classList.remove("showFlex");
      slotFour.classList.add("hide");
      slotFour.classList.remove("showFlex");
      break;
    case 24:
      slotFour.classList.remove("hide");
      slotFour.classList.add("showFlex");
      useLockPick.classList.remove("hide");
      useLockPick.style.pointerEvents = "none";
      redDoorBg.classList.remove("hide");
      startRoomBg.classList.remove("hide");
      usedBlueDoor.classList.remove("hide");
      redDoor.classList.add("hide");
      openRedDoor.classList.remove("hide");
      brownDoorOnlyPiano.classList.remove("hide");
      greenDoor.classList.remove("hide");
      slotTwo.classList.add("hide");
      slotTwo.classList.remove("showFlex");
      break;
    case 25:
      otherRoomBg.classList.remove("hide");
      redDoorBg.classList.add("hide");
      startRoomBg.classList.add("hide");
      usedBlueDoor.classList.add("hide");
      openRedDoor.classList.add("hide");
      brownDoorOnlyPiano.classList.add("hide");
      greenDoor.classList.add("hide");
      slotFour.classList.remove("hide");
      slotFour.classList.add("showFlex");
      useLockPick.classList.remove("hide");
      useLockPick.style.pointerEvents = "none";
      slotThree.classList.remove("hide");
      slotThree.classList.add("showFlex");
      greenKey.classList.remove("hide");
      break;
    case 26:
      otherRoomBg.classList.remove("hide");
      redDoorBg.classList.add("hide");
      startRoomBg.classList.add("hide");
      usedBlueDoor.classList.add("hide");
      openRedDoor.classList.add("hide");
      brownDoorOnlyPiano.classList.add("hide");
      greenDoor.classList.add("hide");
      slotFour.classList.remove("hide");
      slotFour.classList.add("showFlex");
      useLockPick.classList.remove("hide");
      useLockPick.style.pointerEvents = "none";
      slotThree.classList.remove("hide");
      slotThree.classList.add("showFlex");
      greenKey.classList.remove("hide");
      greenKey.classList.remove("greenKeyFloor");
      greenKey.style.pointerEvents = "none";
      slotFive.classList.add("showFlex");
      noteSheet.classList.remove("hide");

      break;
    case 27:
      otherRoomBg.classList.remove("hide");
      redDoorBg.classList.add("hide");
      startRoomBg.classList.add("hide");
      usedBlueDoor.classList.add("hide");
      openRedDoor.classList.add("hide");
      brownDoorOnlyPiano.classList.add("hide");
      greenDoor.classList.add("hide");
      slotFour.classList.remove("hide");
      slotFour.classList.add("showFlex");
      useLockPick.classList.remove("hide");
      useLockPick.style.pointerEvents = "none";
      slotThree.classList.remove("hide");
      slotThree.classList.add("showFlex");
      greenKey.classList.remove("hide");
      greenKey.classList.remove("greenKeyFloor");
      greenKey.style.pointerEvents = "none";
      slotFive.classList.add("showFlex");
      noteSheet.classList.remove("hide");
      noteSheet.classList.remove("noteSheetFloor");
      noteSheet.style.pointerEvents = "none";
      redRoomBack.classList.remove("hide");
      break;
    case 28:
      otherRoomBg.classList.add("hide");
      usedRedDoor.classList.remove("hide");
      startRoomBg.classList.remove("hide");
      usedBlueDoor.classList.remove("hide");
      brownDoorOnlyPiano.classList.add("hide");
      brownDoorBg.classList.remove("hide");
      brownDoorPianoTime.classList.remove("hide");
      greenDoor.classList.remove("hide");
      slotFour.classList.remove("hide");
      slotFour.classList.add("showFlex");
      useLockPick.classList.remove("hide");
      useLockPick.style.pointerEvents = "auto";
      slotThree.classList.remove("hide");
      slotThree.classList.add("showFlex");
      greenKey.classList.add("hide");
      useGreenKey.classList.remove("hide");
      slotFive.classList.add("showFlex");
      noteSheet.classList.remove("hide");
      noteSheet.classList.remove("noteSheetFloor");
      noteSheet.style.pointerEvents = "none";
      redRoomBack.classList.add("hide");
      break;
    case 29:
      otherRoomBg.classList.add("hide");
      usedRedDoor.classList.remove("hide");
      startRoomBg.classList.remove("hide");
      usedBlueDoor.classList.remove("hide");
      brownDoorOnlyPiano.classList.remove("hide");
      greenDoor.classList.add("hide");
      openGreenDoor.classList.remove("hide");
      greenDoorBg.classList.remove("hide");
      slotFour.classList.remove("hide");
      slotFour.classList.add("showFlex");
      useLockPick.classList.remove("hide");
      useLockPick.style.pointerEvents = "none";
      slotThree.classList.add("hide");
      slotThree.classList.remove("showFlex");
      useGreenKey.classList.add("hide");
      slotFive.classList.add("showFlex");
      useNoteSheet.classList.remove("hide");
      useNoteSheet.style.pointerEvents = "none";
      break;
    case 30:
      startRoomBg.classList.add("hide");
      usedBlueDoor.classList.add("hide");
      usedRedDoor.classList.add("hide");
      brownDoorOnlyPiano.classList.add("hide");
      openGreenDoor.classList.add("hide");
      greenDoorBg.classList.add("hide");
      slotFour.classList.add("hide");
      slotFour.classList.remove("showFlex");
      slotFive.classList.add("hide");
      slotFive.classList.remove("showFlex");
      startOverBtn.classList.remove("hide");
      brownDoor.classList.add("hide");
      usedBrownDoor.classList.add("hide");
      break;
    case 31:
      lockPickGameContainer.classList.remove("showFlex");
      lockPickGameContainer.classList.add("hide");
      lockPickGameContainer.style.display = "none";
      gameInfo.classList.add("hide");
      startBtn.classList.add("hide");
      document.body.classList.remove("blueRoom");
      failText.style.display = "none";
      backBtnBlue.classList.add("hide");
      brownRoomBackBookshelfDesk.classList.add("hide");
      startRoomBg.classList.remove("hide");
      otherRoomBg.classList.add("hide");
      blueDoor.classList.remove("hide");
      redDoor.classList.remove("hide");
      brownDoorOnlyPiano.classList.remove("hide");
      usedBookshelf.classList.add("hide");
      usedDesk.classList.add("hide");
      piano.classList.add("hide");
      greenDoor.classList.remove("hide");
      blueKey.classList.add("hide");
      slotOne.classList.add("showFlex");
      useBlueKey.classList.remove("hide");
      slotFour.classList.remove("showFlex");
      blueKeyDeskFirst.classList.add("hide");
      brownRoomBackDeskBookshelf.classList.add("hide");
      break;
    case 32:
      startRoomBg.classList.remove("hide");
      otherRoomBg.classList.add("hide");
      blueDoor.classList.add("hide");
      openBlueDoor.classList.remove("hide");
      blueDoorBg.classList.remove("hide");
      redDoor.classList.remove("hide");
      brownDoorOnlyPiano.classList.remove("hide");
      greenDoor.classList.remove("hide");
      slotOne.classList.add("hide");
      slotOne.classList.remove("showFlex");
      useBlueKey.classList.add("hide");
      break;
    case 33:
      startRoomBg.classList.add("hide");
      otherRoomBg.classList.remove("hide");
      openBlueDoor.classList.add("hide");
      blueDoorBg.classList.add("hide");
      redDoor.classList.add("hide");
      brownDoorOnlyPiano.classList.add("hide");
      greenDoor.classList.add("hide");
      bed.classList.remove("hide");
      bedSideTable.classList.remove("hide");
      slotOne.classList.add("hide");
      slotOne.classList.remove("showFlex");
      slotTwo.classList.add("showFlex");
      redKey.classList.remove("hide");
      redKey.classList.remove("redKeyBed");
      redKey.classList.add("redKeyBedNoLockPick");
      break;
    case 34:
      otherRoomBg.classList.remove("hide");
      bed.classList.remove("hide");
      bedSideTable.classList.remove("hide");
      ipodContainer.classList.remove("hide");
      slotTwo.classList.add("showFlex");
      redKey.classList.remove("hide");
      redKey.classList.remove("redKeyBed");
      redKey.classList.remove("redKeyBedNoLockPick");
      redKey.style.pointerEvents = "none";
      break;
    case 35:
      otherRoomBg.classList.add("hide");
      bed.classList.add("hide");
      bedSideTable.classList.add("hide");
      useLockPick.classList.add("hide");
      slotFour.classList.remove("showFlex");
      slotTwo.classList.remove("showFlex");
      redKey.classList.add("hide");
      redKey.style.pointerEvents = "none";
      ipodSvg.style.width = "600px";
      ipodContainer.classList.add("showFlex");
      ipodContainer.classList.add("ipodContainer");
      ipodContainer.classList.remove("hide");
      ipodContainer.classList.remove("ipodContainerTable");
      ipodBackArrow.classList.remove("hide");
      ipodInstruction.classList.remove("hide");
      break;
    case 36:
      ipodSvg.classList.add("hide");
      ipodContainer.classList.add("hide");
      ipodInstruction.classList.add("hide");
      ipodContainer.classList.remove("ipodContainer");
      ipodBackArrow.classList.add("hide");
      otherRoomBg.classList.remove("hide");
      bed.classList.remove("hide");
      bedSideTable.classList.remove("hide");
      blueRoomBack.classList.remove("hide");
      slotTwo.classList.add("showFlex");
      redKey.classList.remove("hide");
      redKey.classList.remove("redKeyBed");
      redKey.style.pointerEvents = "none";
      break;
    case 37:
      blueRoomBack.classList.add("hide");
      otherRoomBg.classList.add("hide");
      startRoomBg.classList.remove("hide");
      bed.classList.add("hide");
      bedSideTable.classList.add("hide");
      redKey.classList.add("hide");
      useRedKey.classList.remove("hide");
      slotTwo.classList.add("showFlex");
      usedBlueDoor.classList.remove("hide");
      redDoor.classList.remove("hide");
      brownDoorOnlyPiano.classList.remove("hide");
      greenDoor.classList.remove("hide");
      break;
    case 38:
      redDoorBg.classList.remove("hide");
      startRoomBg.classList.remove("hide");
      usedBlueDoor.classList.remove("hide");
      redDoor.classList.add("hide");
      openRedDoor.classList.remove("hide");
      brownDoorOnlyPiano.classList.remove("hide");
      greenDoor.classList.remove("hide");
      slotTwo.classList.add("hide");
      slotTwo.classList.remove("showFlex");
      break;
    case 39:
      otherRoomBg.classList.remove("hide");
      redDoorBg.classList.add("hide");
      startRoomBg.classList.add("hide");
      usedBlueDoor.classList.add("hide");
      openRedDoor.classList.add("hide");
      brownDoorOnlyPiano.classList.add("hide");
      greenDoor.classList.add("hide");
      slotThree.classList.remove("hide");
      slotThree.classList.add("showFlex");
      greenKey.classList.remove("hide");
      greenKey.classList.remove("greenKeyFloor");
      greenKey.classList.add("greenKeyFloorNoLockPick");
      break;
    case 40:
      otherRoomBg.classList.remove("hide");
      redDoorBg.classList.add("hide");
      startRoomBg.classList.add("hide");
      usedBlueDoor.classList.add("hide");
      openRedDoor.classList.add("hide");
      brownDoorOnlyPiano.classList.add("hide");
      greenDoor.classList.add("hide");
      slotThree.classList.remove("hide");
      slotThree.classList.add("showFlex");
      greenKey.classList.remove("hide");
      greenKey.classList.remove("greenKeyFloor");
      greenKey.style.pointerEvents = "none";
      slotFive.classList.add("showFlex");
      noteSheet.classList.remove("hide");
      noteSheet.classList.remove("hide");
      noteSheet.classList.remove("noteSheetFloor");
      noteSheet.classList.add("noteSheetFloorNoLockPick");
      greenKey.classList.remove("greenKeyFloor");
      greenKey.classList.remove("greenKeyFloorNoLockPick");
      break;
    case 41:
      redRoomBack.classList.remove("hide");
      otherRoomBg.classList.remove("hide");
      redDoorBg.classList.add("hide");
      startRoomBg.classList.add("hide");
      usedBlueDoor.classList.add("hide");
      openRedDoor.classList.add("hide");
      brownDoorOnlyPiano.classList.add("hide");
      greenDoor.classList.add("hide");
      slotThree.classList.remove("hide");
      slotThree.classList.add("showFlex");
      greenKey.classList.remove("hide");
      greenKey.classList.remove("greenKeyFloor");
      greenKey.style.pointerEvents = "none";
      slotFive.classList.add("showFlex");
      noteSheet.classList.remove("hide");
      noteSheet.classList.remove("noteSheetFloor");
      noteSheet.classList.remove("noteSheetFloorNoLockPick");
      break;
    case 42:
      otherRoomBg.classList.add("hide");
      usedRedDoor.classList.remove("hide");
      startRoomBg.classList.remove("hide");
      usedBlueDoor.classList.remove("hide");
      brownDoorOnlyPiano.classList.remove("hide");
      greenDoor.classList.remove("hide");
      slotThree.classList.remove("hide");
      slotThree.classList.add("showFlex");
      greenKey.classList.add("hide");
      useGreenKey.classList.remove("hide");
      slotFive.classList.add("showFlex");
      noteSheet.classList.remove("hide");
      noteSheet.classList.remove("noteSheetFloor");
      noteSheet.style.pointerEvents = "none";
      redRoomBack.classList.add("hide");
      break;
    case 43:
      otherRoomBg.classList.add("hide");
      usedRedDoor.classList.remove("hide");
      startRoomBg.classList.remove("hide");
      usedBlueDoor.classList.remove("hide");
      brownDoorOnlyPiano.classList.remove("hide");
      greenDoor.classList.add("hide");
      openGreenDoor.classList.remove("hide");
      greenDoorBg.classList.remove("hide");
      slotThree.classList.add("hide");
      slotThree.classList.remove("showFlex");
      useGreenKey.classList.add("hide");
      slotFive.classList.add("showFlex");
      noteSheet.classList.add("hide");
      useNoteSheet.classList.remove("hide");
      useNoteSheet.style.pointerEvents = "none";
      break;
    case 44:
      lockPickGameContainer.classList.remove("showFlex");
      lockPickGameContainer.classList.add("hide");
      lockPickGameContainer.style.display = "none";
      gameInfo.classList.add("hide");
      startBtn.classList.add("hide");
      document.body.classList.remove("redRoom");
      failText.style.display = "none";
      backBtnRed.classList.add("hide");
      otherRoomBg.classList.add("hide");
      startRoomBg.classList.remove("hide");
      usedBlueDoor.classList.remove("hide");
      redDoor.classList.remove("hide");
      brownDoorOnlyPiano.classList.remove("hide");
      greenDoor.classList.remove("hide");
      bed.classList.add("hide");
      bedSideTable.classList.add("hide");
      blueRoomBack.classList.add("hide");
      slotTwo.classList.add("showFlex");
      redKey.classList.add("hide");
      redKey.classList.remove("redKeyBed");
      useRedKey.classList.remove("hide");
      blueDoorBg.classList.add("hide");
      break;
    case 45:
      otherRoomBg.classList.remove("hide");
      usedBookshelf.classList.remove("hide");
      usedDesk.classList.remove("hide");
      usePiano.classList.remove("hide");
      usedRedDoor.classList.add("hide");
      startRoomBg.classList.add("hide");
      usedBlueDoor.classList.add("hide");
      brownDoorPianoTime.classList.add("hide");
      brownDoorBg.classList.add("hide");
      greenDoor.classList.add("hide");
      slotFour.classList.remove("hide");
      slotFour.classList.add("showFlex");
      useLockPick.classList.remove("hide");
      useLockPick.style.pointerEvents = "none";
      slotThree.classList.remove("hide");
      slotThree.classList.add("showFlex");
      greenKey.classList.add("hide");
      useGreenKey.classList.remove("hide");
      useGreenKey.style.pointerEvents = "none";
      slotFive.classList.add("showFlex");
      noteSheet.classList.remove("hide");
      noteSheet.classList.remove("noteSheetFloor");
      noteSheet.style.pointerEvents = "none";
      redRoomBack.classList.add("hide");
      break;
    case 46:
      otherRoomBg.classList.remove("hide");
      usedBookshelf.classList.add("hide");
      usedDesk.classList.add("hide");
      usePiano.classList.add("hide");
      slotFour.classList.remove("hide");
      slotFour.classList.add("showFlex");
      useLockPick.classList.remove("hide");
      useLockPick.style.pointerEvents = "none";
      slotThree.classList.remove("hide");
      slotThree.classList.add("showFlex");
      greenKey.classList.add("hide");
      useGreenKey.style.pointerEvents = "none";
      useGreenKey.classList.remove("hide");
      slotFive.classList.add("showFlex");
      useNoteSheet.classList.remove("hide");
      noteSheet.classList.add("hide");
      noteSheet.classList.remove("noteSheetFloor");
      noteSheet.style.pointerEvents = "auto";
      playPiano.classList.remove("hide");
      break;
    case 47:
      otherRoomBg.classList.add("hide");
      usedBookshelf.classList.add("hide");
      usedDesk.classList.add("hide");
      usePiano.classList.add("hide");
      slotFour.classList.add("hide");
      slotFour.classList.remove("showFlex");
      useLockPick.classList.add("hide");
      useLockPick.style.pointerEvents = "none";
      slotThree.classList.add("hide");
      slotThree.classList.remove("showFlex");
      greenKey.classList.add("hide");
      useGreenKey.style.pointerEvents = "none";
      useGreenKey.classList.add("hide");
      slotFive.classList.remove("showFlex");
      useNoteSheet.classList.add("hide");
      playPiano.classList.add("hide");
      pianoBody.classList.remove("hide");
      pianoBody.classList.add("showFlex");
      break;
    case 48:
      brownRoomBackAllUsedBack.classList.remove("hide");
      otherRoomBg.classList.remove("hide");
      usedBookshelf.classList.remove("hide");
      usedDesk.classList.remove("hide");
      usedPiano.classList.remove("hide");
      slotFour.classList.remove("hide");
      slotFour.classList.add("showFlex");
      useLockPick.classList.remove("hide");
      useLockPick.style.pointerEvents = "none";
      slotThree.classList.remove("hide");
      slotThree.classList.add("showFlex");
      useGreenKey.style.pointerEvents = "none";
      useGreenKey.classList.remove("hide");
      pianoBody.classList.add("hide");
      pianoBody.classList.remove("showFlex");
      break;
    case 49:
      startRoomBg.classList.remove("hide");
      usedBlueDoor.classList.remove("hide");
      usedRedDoor.classList.remove("hide");
      usedBrownDoor.classList.remove("hide");
      usedBrownDoor.style.pointerEvents = "none";
      greenDoor.classList.remove("hide");
      brownRoomBackAllUsedBack.classList.add("hide");
      otherRoomBg.classList.add("hide");
      usedBookshelf.classList.add("hide");
      usedDesk.classList.add("hide");
      usedPiano.classList.add("hide");
      slotFour.classList.remove("hide");
      slotFour.classList.add("showFlex");
      useLockPick.classList.remove("hide");
      useLockPick.style.pointerEvents = "auto";
      slotThree.classList.remove("hide");
      slotThree.classList.add("showFlex");
      useGreenKey.classList.remove("hide");
      useGreenKey.style.pointerEvents = "auto";

      break;
    case 50:
      startRoomBg.classList.remove("hide");
      usedBlueDoor.classList.remove("hide");
      usedRedDoor.classList.remove("hide");
      usedBrownDoor.classList.remove("hide");
      usedBrownDoor.style.pointerEvents = "none";
      greenDoor.classList.add("hide");
      openGreenDoor.classList.remove("hide");
      greenDoorBg.classList.remove("hide");
      brownRoomBackAllUsedBack.classList.add("hide");
      otherRoomBg.classList.add("hide");
      usedBookshelf.classList.add("hide");
      usedDesk.classList.add("hide");
      usedPiano.classList.add("hide");
      slotFour.classList.remove("hide");
      slotFour.classList.add("showFlex");
      useLockPick.classList.remove("hide");
      useLockPick.style.pointerEvents = "none";
      slotThree.classList.add("hide");
      slotThree.classList.remove("showFlex");
      useGreenKey.classList.add("hide");
      break;
    case 51:
      useLockPickBlue.classList.add("hide");
      useLockPickRed.classList.add("hide");
      useLockPickGreen.classList.add("hide");
      lockPickGameContainer.classList.add("showFlex");
      gameInfo.classList.remove("hide");
      startBtn.classList.remove("hide");
      document.body.classList.add("greenRoom");
      lockBodyBg.classList.add("greenRoom");
      blueDoor.classList.add("hide");
      usedBlueDoor.classList.add("hide");
      usedRedDoor.classList.add("hide");
      usedBrownDoor.classList.add("hide");
      redDoor.classList.add("hide");
      brownDoorOnlyPiano.classList.add("hide");
      greenDoor.classList.add("hide");
      startRoomBg.classList.add("hide");
      slotTwo.classList.add("hide");
      slotTwo.classList.remove("showFlex");
      slotFour.classList.add("hide");
      slotFour.classList.remove("showFlex");
      slotThree.classList.add("hide");
      slotThree.classList.remove("showFlex");
      break;
    case 52:
      lockPickGameContainer.classList.remove("showFlex");
      lockPickGameContainer.classList.add("hide");
      lockPickGameContainer.style.display = "none";
      gameInfo.classList.add("hide");
      startBtn.classList.add("hide");
      document.body.classList.remove("greenRoom");
      lockBodyBg.classList.remove("greenRoom");
      failText.style.display = "none";
      backBtnGreen.classList.add("hide");
      usedBlueDoor.classList.remove("hide");
      usedRedDoor.classList.remove("hide");
      usedBrownDoor.classList.remove("hide");
      greenDoor.classList.remove("hide");
      startRoomBg.classList.remove("hide");
      slotThree.classList.remove("hide");
      slotThree.classList.add("showFlex");
      useGreenKey.classList.remove("hide");
      break;
    case 53:
      startRoomBg.classList.remove("hide");
      usedBlueDoor.classList.remove("hide");
      usedRedDoor.classList.remove("hide");
      usedBrownDoor.classList.remove("hide");
      greenDoor.classList.add("hide");
      openGreenDoor.classList.remove("hide");
      greenDoorBg.classList.remove("hide");
      slotThree.classList.add("hide");
      slotThree.classList.remove("showFlex");
      useGreenKey.classList.add("hide");
      break;
  }
}

brownDoor.addEventListener("click", function () {
  currentId = 2;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

bookshelf.addEventListener("click", function () {
  currentId = 3;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

lockPick.addEventListener("click", function () {
  currentId = 4;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

brownRoomBackBookshelfFirst.addEventListener("click", function () {
  currentId = 5;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

deskBookshelfFirst.addEventListener("click", function () {
  currentId = 6;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

blueKey.addEventListener("click", function () {
  currentId = 7;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

brownRoomBackDeskAfterBookshelf.addEventListener("click", function () {
  currentId = 8;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

brownRoomBackBookshelfDesk.addEventListener("click", function () {
  currentId = 9;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

useBlueKey.addEventListener("click", function () {
  if (slotFour.classList.contains("showFlex")) {
    currentId = 10;
    localStorage.setItem("currentId", currentId);
    updateText(currentId);
    applyStyling(currentId);
  } else currentId = 32;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

desk.addEventListener("click", function () {
  currentId = 11;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});
blueKeyDeskFirst.addEventListener("click", function () {
  currentId = 12;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

brownRoomBackDeskFirst.addEventListener("click", function () {
  currentId = 13;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

bookshelfDeskFirst.addEventListener("click", function () {
  currentId = 14;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

lockPickDeskFirst.addEventListener("click", function () {
  currentId = 15;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});
brownRoomBackBookshelfAfterDesk.addEventListener("click", function () {
  currentId = 16;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

brownRoomBackDeskBookshelf.addEventListener("click", function () {
  currentId = 9;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

openBlueDoor.addEventListener("click", function () {
  if (slotFour.classList.contains("showFlex")) {
    currentId = 17;
    localStorage.setItem("currentId", currentId);
    updateText(currentId);
    applyStyling(currentId);
  } else currentId = 33;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

redKey.addEventListener("click", function () {
  if (slotFour.classList.contains("showFlex")) {
    currentId = 18;
    localStorage.setItem("currentId", currentId);
    updateText(currentId);
    applyStyling(currentId);
  } else currentId = 34;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

ipodContainer.addEventListener("click", function () {
  if (slotFour.classList.contains("showFlex")) {
    currentId = 19;
    localStorage.setItem("currentId", currentId);
    updateText(currentId);
    applyStyling(currentId);
  } else currentId = 35;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

ipodBackArrow.addEventListener("click", function () {
  if (slotFour.classList.contains("showFlex")) {
    currentId = 20;
    localStorage.setItem("currentId", currentId);
    updateText(currentId);
    applyStyling(currentId);
  } else currentId = 36;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

blueRoomBack.addEventListener("click", function () {
  if (slotFour.classList.contains("showFlex")) {
    currentId = 21;
    localStorage.setItem("currentId", currentId);
    updateText(currentId);
    applyStyling(currentId);
  } else currentId = 37;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

useLockPick.addEventListener("click", function () {
  useLockPickBlue.classList.remove("hide");
  useLockPickRed.classList.remove("hide");
  useLockPickGreen.classList.remove("hide");
  checkBlueUsedDoor();
  checkRedUsedDoor();
});

useLockPickBlue.addEventListener("click", function () {
  currentId = 22;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

useLockPickRed.addEventListener("click", function () {
  currentId = 23;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

useLockPickGreen.addEventListener("click", function () {
  currentId = 51;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

useRedKey.addEventListener("click", function () {
  if (slotFour.classList.contains("showFlex")) {
    currentId = 24;
    localStorage.setItem("currentId", currentId);
    updateText(currentId);
    applyStyling(currentId);
  } else currentId = 38;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

openRedDoor.addEventListener("click", function () {
  if (slotFour.classList.contains("showFlex")) {
    currentId = 25;
    localStorage.setItem("currentId", currentId);
    updateText(currentId);
    applyStyling(currentId);
  } else currentId = 39;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

greenKey.addEventListener("click", function () {
  if (slotFour.classList.contains("showFlex")) {
    currentId = 26;
    localStorage.setItem("currentId", currentId);
    updateText(currentId);
    applyStyling(currentId);
  } else currentId = 40;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

noteSheet.addEventListener("click", function () {
  if (slotFour.classList.contains("showFlex")) {
    currentId = 27;
    localStorage.setItem("currentId", currentId);
    updateText(currentId);
    applyStyling(currentId);
  } else currentId = 41;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

redRoomBack.addEventListener("click", function () {
  if (slotFour.classList.contains("showFlex")) {
    currentId = 28;
    localStorage.setItem("currentId", currentId);
    updateText(currentId);
    applyStyling(currentId);
  } else currentId = 42;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

useGreenKey.addEventListener("click", function () {
  if (
    slotFour.classList.contains("showFlex") &&
    slotThree.classList.contains("showFlex")
  ) {
    currentId = 50;
    localStorage.setItem("currentId", currentId);
    updateText(currentId);
    applyStyling(currentId);
    return;
  } else if (slotThree.classList.contains("showFlex")) {
    currentId = 53;
    localStorage.setItem("currentId", currentId);
    updateText(currentId);
    applyStyling(currentId);
  } else if (slotFour.classList.contains("showFlex")) {
    currentId = 29;
    localStorage.setItem("currentId", currentId);
    updateText(currentId);
    applyStyling(currentId);
  } else {
    currentId = 43;
    localStorage.setItem("currentId", currentId);
    updateText(currentId);
    applyStyling(currentId);
  }
});

openGreenDoor.addEventListener("click", function () {
  currentId = 30;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

startOverBtn.addEventListener("click", function () {
  currentId = 1;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
  startOverBtn.classList.add("hide");
  localStorage.clear();
});

backBtnBlue.addEventListener("click", function () {
  currentId = 31;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
  startOverBtn.classList.add("hide");
});

backBtnRed.addEventListener("click", function () {
  currentId = 44;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
  startOverBtn.classList.add("hide");
});

backBtnGreen.addEventListener("click", function () {
  currentId = 52;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
  startOverBtn.classList.add("hide");
});

brownDoorPianoTime.addEventListener("click", function () {
  currentId = 45;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
  startOverBtn.classList.add("hide");
});

usePiano.addEventListener("click", function () {
  currentId = 46;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
  startOverBtn.classList.add("hide");
});

useNoteSheet.addEventListener("click", function () {
  currentId = 47;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
  startOverBtn.classList.add("hide");
});

brownRoomBackAllUsed.addEventListener("click", function () {
  currentId = 48;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
  startOverBtn.classList.add("hide");
});

brownRoomBackAllUsedBack.addEventListener("click", function () {
  currentId = 49;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
  startOverBtn.classList.add("hide");
});

function checkBlueUsedDoor() {
  if (
    openBlueDoor.classList.contains("hide") &&
    blueDoor.classList.contains("hide")
  ) {
    useLockPickBlue.classList.add("hide");
  } else {
    useLockPickBlue.classList.remove("hide");
  }
}
function checkRedUsedDoor() {
  if (
    openRedDoor.classList.contains("hide") &&
    redDoor.classList.contains("hide")
  ) {
    useLockPickRed.classList.add("hide");
  } else {
    useLockPickRed.classList.remove("hide");
  }
}

//Lock Pick Mini game
startBtn.addEventListener("click", function () {
  lockPickGameContainer.style.display = "none";
  countDownNumber.classList.remove("hide");
  lockBodyBg.classList.add("showFlex");

  gameTimerCountDown();

  count = 13;
  const countDownTimer = setInterval(function () {
    count--;
    countDownNumber.innerText = count;
    if (count === 0) {
      clearInterval(countDownTimer);
    }
  }, 1000);

  document.addEventListener("mousemove", function (e) {
    const threshold = 5;
    const lockPosition = lockContainer.getBoundingClientRect();
    const deg = mouseAngle(
      lockPosition.left + lockPosition.width / 2,
      lockPosition.top + lockPosition.height / 2,
      e.pageX,
      e.pageY
    );
    lockPickArm.style.transform = `rotate(${deg + 90}deg)`;

    const activeLockPosition = pin ? pin.dataset.deg : 0;
    if (
      deg <= Number(activeLockPosition) + threshold &&
      deg >= Number(activeLockPosition) - threshold
    ) {
      lockContainer.querySelector("#outerCircle").classList.add("shakeCircle");
      if (!setUnlockTimer) {
        unlockTimer = setTimeout(function () {
          if (pin) {
            pin.classList.add("done");
            pin.classList.remove("current");
            pin = pin.nextElementSibling;

            if (pin) {
              pin.classList.add("current");
              lockContainer
                .querySelector("#outerCircle")
                .classList.add("success");
              setTimeout(function () {
                lockContainer
                  .querySelector("#outerCircle")
                  .classList.remove("success");
              }, 200);
            }
            lockContainer
              .querySelector("#outerCircle")
              .classList.remove("shakeCircle");
          }
        }, 3000);
        setUnlockTimer = true;
      }
    } else {
      lockContainer
        .querySelector("#outerCircle")
        .classList.remove("shakeCircle");
      clearTimeout(unlockTimer);
      setUnlockTimer = false;
    }
    if (pin.classList.contains("win")) {
      wonGame();
      clearTimeout(gameTimer);
    }

    if (
      deg <= Number(activeLockPosition) + threshold &&
      deg >= Number(activeLockPosition) - threshold
    ) {
      lockPickArm.querySelector("#dot").style.display = "block";
    } else {
      lockPickArm.querySelector("#dot").style.display = "none";
    }
  });
});

function mouseAngle(cx, cy, ex, ey) {
  return ((Math.atan2(ey - cy, ex - cx) * 180) / Math.PI + 360) % 360;
}

function checkBackBtnBlue() {
  if (document.body.classList.contains("blueRoom")) {
    backBtnBlue.classList.remove("hide");
  }
}

function checkBackBtnRed() {
  if (document.body.classList.contains("redRoom")) {
    backBtnRed.classList.remove("hide");
  }
}

function checkBackBtnGreen() {
  if (document.body.classList.contains("greenRoom")) {
    backBtnGreen.classList.remove("hide");
  }
}

function wonGame() {
  lockPickGameContainer.style.display = "flex";
  gameDescription.style.display = "none";
  successText.style.display = "block";
  startBtn.style.display = "none";
  enterRoom.style.display = "block";
  lockBodyBg.style.display = "none";
  lockContainer.style.display = "none";
  countDownNumber.style.display = "none";
}

function gameTimerCountDown() {
  gameTimer = setTimeout(function () {
    lockPickGameContainer.style.display = "flex";
    gameDescription.style.display = "none";
    failText.style.display = "block";
    startBtn.style.display = "none";
    checkBackBtnBlue();
    checkBackBtnRed();
    checkBackBtnGreen();
    lockBodyBg.style.display = "none";
    lockContainer.style.display = "none";
    countDownNumber.style.display = "none";
    const loseSpan = document.getElementById("lose");
    loseSpan.classList.remove("win");
  }, 13000);
}

//iPod
menuBackBtn.addEventListener("click", function () {
  showMenuBtns();
  photoContainer.classList.add("hide");
  menuBackBtn.classList.add("hide");
  aboutScreen.classList.add("hide");
  ipodMusicPlayer.classList.add("hide");
  ipodVideo.style.display = "none";
  playPauseBtn.style.display = "none";
  ipodContainer.style.width = "95%";
  ipodVideo.pause();
  ipodVideo.currentTime = 0;
  trackOne.pause();
  trackOne.currentTime = 0;
});

playPauseBtn.addEventListener("click", function () {
  playPauseVideo();
});

settingsButton.addEventListener("click", function () {
  hideMenuBtns();
  settingsScreen.classList.remove("hide");
  menuBackBtn.classList.remove("hide");
});

photoButton.addEventListener("click", function () {
  hideMenuBtns();
  settingsScreen.classList.add("hide");
  photoContainer.classList.remove("hide");
  menuBackBtn.classList.remove("hide");
});

videoButton.addEventListener("click", function () {
  hideMenuBtns();
  settingsScreen.classList.add("hide");
  playPauseBtn.style.display = "block";
  menuBackBtn.classList.remove("hide");
  ipodVideo.style.display = "block";
  ipodContainer.style.width = "97.8%";
});

musicButton.addEventListener("click", function () {
  hideMenuBtns();
  menuBackBtn.classList.remove("hide");
  settingsScreen.classList.add("hide");
  ipodMusicPlayer.classList.remove("hide");
});

darkModeButton.addEventListener("click", function () {});

deviceInfoButton.addEventListener("click", function () {
  aboutScreen.classList.remove("hide");
  settingsScreen.classList.add("hide");
});

function hideMenuBtns() {
  menuButtons.classList.add("hide");
}

function showMenuBtns() {
  menuButtons.classList.remove("hide");
}

function playPauseVideo() {
  if (ipodVideo.paused) {
    ipodVideo.play();
  } else {
    ipodVideo.pause();

    ipodVideo.currentTime = 0;
  }
}

let slideIndex = 0;

function plusSlides(slideNumber) {
  showSlides((slideIndex += slideNumber));
}

function currentSlide(slideNumber) {
  showSlides((slideIndex = slideNumber));
}

function showSlides(slideNumber) {
  let slides = document.getElementsByClassName("ipodPhoto");
  if (slideNumber > slides.length) {
    slideIndex = 1;
  }
  if (slideNumber < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

const playMusicBtn = document.getElementById("playMusicBtn");
const trackOne = document.getElementById("trackOne");
const currentTimeCont = document.getElementById("currentTime");
const durationCont = document.getElementById("duration");
const playTimeBar = document.getElementById("playTimeBar");

let rAF = null;

const whilePlaying = () => {
  playTimeBar.value = Math.floor(trackOne.currentTime);
  currentTimeCont.textContent = calculateTime(playTimeBar.value);
  rAF = requestAnimationFrame(whilePlaying);
};

function playTrackOne() {
  if (trackOne.paused) {
    trackOne.play();
    requestAnimationFrame(whilePlaying);
  } else {
    trackOne.pause();
    cancelAnimationFrame(rAF);
    trackOne.currentTime = 0;
  }
}

playMusicBtn.addEventListener("click", function () {
  playTrackOne();
});

trackOne.addEventListener("loadedmetadata", function () {
  displayTrackOneDuration(trackOne.duration);
});

playTimeBar.addEventListener("change", () => {
  trackOne.currentTime = playTimeBar.value;
});

trackOne.addEventListener("timeupdate", () => {
  playTimeBar.value = Math.floor(trackOne.currentTime);
});

const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
};

const displayTrackOneDuration = () => {
  durationCont.textContent = calculateTime(trackOne.duration);
};

const setPlayTimeBarMax = () => {
  playTimeBar.max = Math.floor(trackOne.duration);
};

if (trackOne.readyState > 0) {
  displayTrackOneDuration();
  setPlayTimeBarMax();
} else {
  trackOne.addEventListener("loadedmetadata", function () {
    displayTrackOneDuration();
    setPlayTimeBarMax();
  });
}

//Piano
function playNote01() {
  if (note01.paused) {
    note01.play();
  }
}

function playNote02() {
  if (note02.paused) {
    note02.play();
  }
}

function playNote03() {
  if (note03.paused) {
    note03.play();
  }
}
function playNote04() {
  if (note04.paused) {
    note04.play();
  }
}
function playNote05() {
  if (note05.paused) {
    note05.play();
  }
}
function playNote06() {
  if (note06.paused) {
    note06.play();
  }
}
function playNote07() {
  if (note07.paused) {
    note07.play();
  }
}
function playNote08() {
  if (note08.paused) {
    note08.play();
  }
}
function playNote09() {
  if (note09.paused) {
    note09.play();
  }
}
function playNote10() {
  if (note10.paused) {
    note10.play();
  }
}
function playNote11() {
  if (note11.paused) {
    note11.play();
  }
}
function playNote12() {
  if (note12.paused) {
    note12.play();
  }
}
function playNote13() {
  if (note13.paused) {
    note13.play();
  }
}
function playNote14() {
  if (note14.paused) {
    note14.play();
  }
}
function playNote15() {
  if (note15.paused) {
    note15.play();
  }
}
function playNote16() {
  if (note16.paused) {
    note16.play();
  }
}
function playNote17() {
  if (note17.paused) {
    note17.play();
  }
}
function playNote18() {
  if (note18.paused) {
    note18.play();
  }
}
function playNote19() {
  if (note19.paused) {
    note19.play();
  }
}
function playNote20() {
  if (note20.paused) {
    note20.play();
  }
}
function playNote21() {
  if (note21.paused) {
    note21.play();
  }
}
function playNote22() {
  if (note22.paused) {
    note22.play();
  }
}
function playNote23() {
  if (note23.paused) {
    note23.play();
  }
}
function playNote24() {
  if (note24.paused) {
    note24.play();
  }
}

noteFR.addEventListener("click", function () {
  playNote01();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    playNote01();
    noteFR.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "a") {
    note01.pause();
    note01.currentTime = 0;
    noteFR.classList.remove("whiteHover");
  }
});
noteGR.addEventListener("click", function () {
  playNote03();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "s") {
    playNote03();
    noteGR.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "s") {
    note03.pause();
    note03.currentTime = 0;
    noteGR.classList.remove("whiteHover");
  }
});

noteAR.addEventListener("click", function () {
  playNote05();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "d") {
    playNote05();
    noteAR.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "d") {
    note05.pause();
    note05.currentTime = 0;
    noteAR.classList.remove("whiteHover");
  }
});

noteBR.addEventListener("click", function () {
  playNote07();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "f") {
    playNote07();
    noteBR.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "f") {
    note07.pause();
    note07.currentTime = 0;
    noteBR.classList.remove("whiteHover");
  }
});
noteCR.addEventListener("click", function () {
  playNote08();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "g") {
    playNote08();
    noteCR.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "g") {
    note08.pause();
    note08.currentTime = 0;
    noteCR.classList.remove("whiteHover");
  }
});
noteDR.addEventListener("click", function () {
  playNote10();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "h") {
    playNote10();
    noteDR.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "h") {
    note10.pause();
    note10.currentTime = 0;
    noteDR.classList.remove("whiteHover");
  }
});
noteER.addEventListener("click", function () {
  playNote12();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "j") {
    playNote12();
    noteER.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "j") {
    note12.pause();
    note12.currentTime = 0;
    noteER.classList.remove("whiteHover");
  }
});
noteFL.addEventListener("click", function () {
  playNote13();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "z") {
    playNote13();
    noteFL.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "z") {
    note13.pause();
    note13.currentTime = 0;
    noteFL.classList.remove("whiteHover");
  }
});
noteGL.addEventListener("click", function () {
  playNote15();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "x") {
    playNote15();
    noteGL.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "x") {
    note15.pause();
    note15.currentTime = 0;
    noteGL.classList.remove("whiteHover");
  }
});
noteAL.addEventListener("click", function () {
  playNote17();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "c") {
    playNote17();
    noteGL.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "c") {
    note17.pause();
    note17.currentTime = 0;
    noteGL.classList.remove("whiteHover");
  }
});
noteBL.addEventListener("click", function () {
  playNote19();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "v") {
    playNote19();
    noteBL.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "v") {
    note19.pause();
    note19.currentTime = 0;
    noteBL.classList.remove("whiteHover");
  }
});
noteCL.addEventListener("click", function () {
  playNote20();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "b") {
    playNote20();
    noteCL.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "b") {
    note20.pause();
    note20.currentTime = 0;
    noteCL.classList.remove("whiteHover");
  }
});
noteDL.addEventListener("click", function () {
  playNote22();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "n") {
    playNote22();
    noteDL.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "n") {
    note22.pause();
    note22.currentTime = 0;
    noteDL.classList.remove("whiteHover");
  }
});
noteEL.addEventListener("click", function () {
  playNote24();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "m") {
    playNote24();
    noteEL.classList.add("whiteHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "m") {
    note24.pause();
    note24.currentTime = 0;
    noteEL.classList.remove("whiteHover");
  }
});

blackNoteFR.addEventListener("click", function () {
  playNote02();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "q") {
    playNote02();
    blackNoteFR.classList.add("blackHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "q") {
    note02.pause();
    note02.currentTime = 0;
    blackNoteFR.classList.remove("blackHover");
  }
});
blackNoteGR.addEventListener("click", function () {
  playNote04();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "w") {
    playNote04();
    blackNoteGR.classList.add("blackHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "w") {
    note04.pause();
    note04.currentTime = 0;
    blackNoteGR.classList.remove("blackHover");
  }
});
blackNoteAR.addEventListener("click", function () {
  playNote06();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "e") {
    playNote06();
    blackNoteAR.classList.add("blackHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "e") {
    note06.pause();
    note06.currentTime = 0;
    blackNoteAR.classList.remove("blackHover");
  }
});
blackNoteCR.addEventListener("click", function () {
  playNote09();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "r") {
    playNote09();
    blackNoteCR.classList.add("blackHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "r") {
    note09.pause();
    note09.currentTime = 0;
    blackNoteCR.classList.remove("blackHover");
  }
});
blackNoteDR.addEventListener("click", function () {
  playNote11();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "t") {
    playNote11();
    blackNoteDR.classList.add("blackHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "t") {
    note11.pause();
    note11.currentTime = 0;
    blackNoteDR.classList.remove("blackHover");
  }
});
blackNoteFL.addEventListener("click", function () {
  playNote14();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "y") {
    playNote14();
    blackNoteFL.classList.add("blackHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "y") {
    note14.pause();
    note14.currentTime = 0;
    blackNoteFL.classList.remove("blackHover");
  }
});
blackNoteGL.addEventListener("click", function () {
  playNote16();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "u") {
    playNote16();
    blackNoteGL.classList.add("blackHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "u") {
    note16.pause();
    note16.currentTime = 0;
    blackNoteGL.classList.remove("blackHover");
  }
});
blackNoteAL.addEventListener("click", function () {
  playNote18();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "i") {
    playNote18();
    blackNoteAL.classList.add("blackHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "i") {
    note18.pause();
    note18.currentTime = 0;
    blackNoteAL.classList.remove("blackHover");
  }
});
blackNoteCL.addEventListener("click", function () {
  playNote21();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "o") {
    playNote21();
    blackNoteCL.classList.add("blackHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "o") {
    note21.pause();
    note21.currentTime = 0;
    blackNoteCL.classList.remove("blackHover");
  }
});
blackNoteDL.addEventListener("click", function () {
  playNote23();
});
window.addEventListener("keydown", function (event) {
  if (event.key === "p") {
    playNote23();
    blackNoteDL.classList.add("blackHover");
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key === "p") {
    note23.pause();
    note23.currentTime = 0;
    blackNoteDL.classList.remove("blackHover");
  }
});

startGame();
