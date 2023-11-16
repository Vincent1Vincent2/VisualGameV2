const gameBox = document.getElementById(".gameBox");
const displayText = document.getElementById("displayText");
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
const brownRoomBackPiano = document.getElementById("brownRoomBackPiano"); //CLICK (BACK ARROW)
const brownRoomBackAllUsed = document.getElementById("brownRoomBackAllUsed"); //CLICK (BACK ARROW)
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
const useBlueKey = document.getElementById("useBlueKey"); //Click (ITEM)
const redKey = document.getElementById("redKey"); //Click (ITEM)
const useRedKey = document.getElementById("useRedKey"); //Click (ITEM)
const greenKey = document.getElementById("greenKey"); //Click (ITEM)
const useGreenKey = document.getElementById("useGreenKey"); //Click (ITEM)
const lockPick = document.getElementById("lockPick"); //Click (ITEM
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
const playPiano = document.getElementById("playPiano");
const bed = document.getElementById("bed");
const bedSideTable = document.getElementById("bedSideTable");

//LockPick MiniGame
const lockPickGameContainer = document.getElementById("lockPickGameContainer");
const gameInfo = document.getElementById("gameInfo");
const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
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
const photoContainer = document.getElementById("photoContainer");
const ipodMusicPlayer = document.getElementById("ipodPlayer");

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
    text: "This will come in handy!",
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
      brownRoomBack.classList.remove("hide");
      break;
    case 5:
      brownRoomBack.classList.add("hide");
      exploreBookshelf.classList.add("hide");
      otherRoomBg.classList.remove("hide");
      lockPick.classList.remove("hide");
      usedBookshelf.classList.remove("hide");
      desk.classList.remove("hide");
      piano.classList.remove("hide");
      break;
    case 6:
      otherRoomBg.classList.remove("hide");
      bookshelf.classList.add("hide");
      exploreBookshelf.classList.add("hide");
      usedBookshelf.classList.add("hide");
      desk.classList.add("hide");
      piano.classList.add("hide");
      deskOpen.classList.remove("hide");
      slotOne.classList.add("showFlex");
      blueKey.classList.remove("hide");
      break;
    case 7:
      otherRoomBg.classList.remove("hide");
      brownRoomBack.classList.remove("hide");
      deskOpen.classList.add("hide");
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

brownRoomBack.addEventListener("click", function () {
  currentId = 5;
  localStorage.setItem("currentId", currentId);
  updateText(currentId);
  applyStyling(currentId);
});

desk.addEventListener("click", function () {
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

//LockPickMinigame

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

localStorage.clear();

function gameTimerCountDown() {
  gameTimer = setTimeout(function () {
    lockPickGameContainer.style.display = "flex";
    gameDescription.style.display = "none";
    failText.style.display = "block";
    startBtn.style.display = "none";
    backBtn.style.display = "block";
    lockBodyBg.style.display = "none";
    lockContainer.style.display = "none";
    countDownNumber.style.display = "none";
    const loseSpan = document.getElementById("lose");
    loseSpan.classList.remove("win");
  }, 13000);
}

startGame();
