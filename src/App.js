import React, { useState } from "react";
import "./App.css";
import { Meter } from "./components/Meter";
import { Action } from "./components/Action";
import { Alert } from "./components/Alert";
import { Container} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faFaceLaughBeam, faBolt, faGraduationCap, faNairaSign, faFaceTired } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const maxGrades = "Your grades are at the max. You deserve to chill or treat yourself."
  const lowGrades = "You are failing. You may have to leave school soon."
  const minGrades = "You have failed, and you have been asked to withdraw. Start over?"
  const maxHappy = "You are very happy. You should be studying or working."
  const lowHappy = "You are unhappy. Eat or chill, to avoid depression."
  const minHappy = "You are depressed, and you will have to withdraw. Start over?"
  const lowHealth = "Your health is waning. Try to sleep or get something to eat."
  const minHealth = "You are critically ill and have to leave school. Start over?"
  const lowEnergy = "You are getting tired. Get some sleep or eat."
  const minEnergy = "You are too tired to do anything."
  const lowMoney = "You are running out of money. Wait for your allowance or do some work to earn quickly."
  const minMoney = "You are broke. Maybe you should work."
  const highStress = "You are stressed out. You need to sleep or chill or even treat yourself."
  const maxStress = "You have had a terrible breakdown. Startover?"

  const [happy, setHappy] = useState(100)
  const [health, setHealth] = useState(100)
  const [smart, setSmart] = useState(60)
  const [energy, setEnergy] = useState(100)
  const [money, setMoney] = useState(20000)
  const [moneyval, setMoneyVal] = useState((20000/20000) * 100)
  const [stress, setStress] = useState(15)
  const [alert, setAlert] = useState("Welcome to Uni Life Simulator. Read the Rundown (top left) for more information")
  const [alertButton, setAlertButton] = useState("Okay")
  const [grade, setGrade] = useState("B");

  const okayButton = () => {
    document.getElementById('alert-box').style.display = "none"
  }

  const startOverButton = () => {
    document.getElementById('alert-box').style.display = "none"
    setEnergy(100);
    setHappy(100);
    setHealth(100);
    setMoney(20000);
    setMoneyVal(100)
    setSmart(60);
    setStress(0);
  } 

  const incMoneyVal = (x) => {
    setMoneyVal(moneyval => moneyval + x);
  }

  const decMoneyVal = (y) => {
    setMoneyVal(moneyval => moneyval - y);
  }

  const toDo = () => {
    if(alertButton === "Start Over") {
      startOverButton();
    } else {
      okayButton();
    }
  }

  const changeGrade = () => {
    if(smart > 69) {
      setGrade("A")
    } else if(smart > 59) {
      setGrade("B")
    } else if(smart > 49) {
      setGrade("C")
    } else if(smart > 39) {
      setGrade("D")
    } else if(smart > 29) {
      setGrade("E")
    } else {
      setGrade("F")
    }
  }

  function checkHappy() {
    if(happy < 20 && happy > 0) {
      setAlert(lowHappy);
      setAlertButton("Okay");
      document.getElementById("alert-box").style.display = "block";
    } else if(happy === 0) {
      setAlert(minHappy);
      setAlertButton("Start Over");
      document.getElementById("alert-box").style.display = "block";
    } else if (happy === 100) {
      setAlert(maxHappy);
      setAlertButton("Okay");
      document.getElementById("alert-box").style.display = "block";
    }
  }

  function checkEnergy() {
    if(energy < 20 && energy > 0) {
      if(health > 7) {
        setHealth(health - 7);
        checkHealth();
      } else if(health <= 7) {
        setHealth(0);
        checkHealth();
      }
      setAlert(lowEnergy);
      setAlertButton("Okay");
      document.getElementById("alert-box").style.display = "block";
    } else if(energy === 0) {
      setAlert(minEnergy);
      setAlertButton("Okay");
      document.getElementById("alert-box").style.display = "block";
    }
  }

  function checkSmart() {
    changeGrade();
    if(smart < 30 && smart > 0) {
      if(happy > 10) {
        checkHappy(happy - 10);
        checkHappy();
      } else if(happy <= 10) {
        setHappy(0);
        checkHappy();
      }
      setAlert(lowGrades);
      setAlertButton("Okay");
      document.getElementById("alert-box").style.display = "block";
    } else if (smart === 0) {
      setAlert(minGrades);
      setAlertButton("Start Over");
      document.getElementById("alert-box").style.display = "block";
    } else if (smart === 100) {
      setAlert(maxGrades);
      setAlertButton("Okay");
      document.getElementById("alert-box").style.display = "block";
    }
  }

  function checkHealth() {
    if(health < 40 && health > 0) {
      setAlert(lowHealth);
      setAlertButton("Okay");
      document.getElementById("alert-box").style.display = "block";
    } else if(health === 0) {
      setAlert(minHealth);
      setAlertButton("Start Over");
      document.getElementById("alert-box").style.display = "block";
    }
  }

  function checkStress() {
    if(stress > 50 && stress < 100) {
      if(health > 20) {
        setHealth(health - 20);
        checkHealth();
      } else if(health <= 20) {
        setHealth(0);
        checkHealth();
      }
      setAlert(highStress);
      setAlertButton("Okay");
      document.getElementById("alert-box").style.display = "block";
    } else if(stress === 100) {
      setAlert(maxStress);
      setAlertButton("Start Over");
      document.getElementById("alert-box").style.display = "block";
    }
  }

  function checkMoney() {
    if(money < 3000 && money > 0) {
      if(happy > 5) {
        checkHappy(happy - 5);
        checkHappy();
      } else if(happy <= 5) {
        setHappy(0);
        checkHappy();
      }
      setAlert(lowMoney);
      setAlertButton("Okay");
      document.getElementById("alert-box").style.display = "block";
    } else if(money === 0) {
      setAlert(minMoney);
      setAlertButton("Start Over");
      document.getElementById("alert-box").style.display = "block";
    }
  }

  const showRundown = () => {
    if(document.getElementById("the-rundown").style.display === "none") {
      document.getElementById("the-rundown").style.display = "block";
    } else {
      document.getElementById("the-rundown").style.display = "none";
    }
  }

  const hideRundown = () => {
    document.getElementById("the-rundown").style.display = "none";
  }
  
  const study = () => {
    if(energy >= 20) {
      setEnergy(energy - 20);
      checkEnergy();
      if(stress <= 80) {
        setStress(stress + 20);
        checkStress();
        if(happy >= 10) {
          setHappy(happy - 10);
          if(smart <= 90) {
            setSmart(smart + 10);
            changeGrade();
          }else if(smart > 90) {
            setSmart(100);
            checkSmart();
          }
        } else if(happy < 10) {
          setHappy(0);
          checkHappy();
        }
      } else if(stress > 80){ 
        setStress(100);
        checkStress();
      }
    } else { 
      setEnergy(0);
      checkEnergy();
    }
  }

  const eat = () => {
    if(money >= 1500) {
      setMoney(money - 1500)
      decMoneyVal(7.5);
      checkMoney();
      if(energy < 90) {
        setEnergy(energy + 10);
        checkEnergy();
        if(happy < 93) {
          setHappy(happy + 7);
          checkHappy();
        } else if(happy >= 93) {
          setHappy(100);
          checkHappy();
        }
      } else if(energy >= 100) {
        setEnergy(100);
        checkEnergy();
      }
      if(health < 98) {
        setHealth(health + 2);
        checkHealth()
      } else if(health >= 98) {
        setHealth(100);
        checkHealth();
      }
      if(stress > 3) {
        setStress(stress - 3);
      } else if (stress <= 3) {
        setStress(0);
      }
    } else {
      checkMoney();
    }
  }

  const sleep = () => {
    if(energy < 90) {
      setEnergy(energy + 10);
      checkEnergy();
    } else if(energy >= 90) {
      setEnergy(100);
    }
    if(happy < 90) {
      setHappy(happy + 5);
    } else if (happy >= 90) {
      setHappy(100);
      checkHappy();
    }
    if(health < 95) {
      setHealth(health + 5);
    } else if (health >= 95) {
      setHealth(100);
    }
    if(smart > 10) {
      setSmart((smart) => smart - 10);
      changeGrade();
    } else if(smart <= 10) {
      setSmart(0);
      changeGrade();
    }
    if(stress > 5) {
      setStress(stress - 5);
    } else if(stress <= 5) {
      setStress(0);
    }
    checkSmart();
  }

  const chill = () => {
    if(money >= 2000) {
      setMoney(money - 2000)
      decMoneyVal(10);
      if(happy <= 93) {
        setHappy(happy + 7);
      } else if(happy > 93) {
        setHappy(100);
        checkHappy();
      }
      if(stress >= 10) {
        setStress(stress - 10);
      } else if (stress < 10) {
        setStress(0);
      }
      if(smart >= 10) {
        setSmart(smart - 10);
        changeGrade();
        checkSmart();
      } else if(smart < 0) {
        setSmart(0);
        changeGrade();
        checkSmart();
      }
    } else if (money < 2000) {
      checkMoney();
    }
  }

  const treat = () => {
    if(money >= 5000) {
      setMoney(money - 5000)
      decMoneyVal(25);
      if(happy <= 90) {
        setHappy(happy + 10)
      } else if(happy > 90) {
        setHappy(100);
        checkHappy();
      }
      if(health <= 95) {
        setHealth(health + 5)
      } else if (health > 95) {
        setHealth(100);
      }
      if(stress >= 15) {
        setStress(stress - 15)
      } else if(stress < 15) {
        setStress(0);
      }
    } else if(money < 5000) {
      checkMoney();
    }
  }

  const work = () => {
    if(energy >= 20) {
      setEnergy(energy - 20)
      checkEnergy();
      if(stress <= 85) {
        setStress(stress + 10);
        checkStress();
        if(money <= 18000 && moneyval <= 90) {
          setMoney(money + 2000)
          incMoneyVal(10);
        } else if (money > 18000 && moneyval > 90) {
          setMoney(20000);
          setMoneyVal(100)
        }
        if(smart >= 10) {
          setSmart((smart - 10));
          changeGrade();
          checkSmart();
        } else if(smart < 10) {
          setSmart(0);
          changeGrade();
          checkSmart();
        }
      } else if(stress > 85) {
        setStress(100);
        checkStress();
      }
    } else if(energy < 20) {
      checkEnergy();
    }
  }  

  return (
    <div className="App">
      <Container>
        <div className="header-box">
          <div className="game-title">Uni Life Simulator</div>
          <div className="more-button"><span onClick={() => showRundown()}>The Rundown</span></div>
        </div>
        <div className="instruction">
          <div id="the-rundown">
            <p>Welcome to Uni Life Simualator! Basically, the game simulates the life of a university student. To study or to sleep? To chill or to work? It's up to you, but remember every choice has it's consequences. PLEASE NOTE: Real life university is much tougher than this!
            </p>
            <span>Guide</span>
            <ul>
              <li><FontAwesomeIcon icon={faFaceLaughBeam} /> Happiness</li>
              <li><FontAwesomeIcon icon={faSquarePlus} /> Health</li>
              <li><FontAwesomeIcon icon={faGraduationCap} /> Grade</li>
              <li><FontAwesomeIcon icon={faBolt} /> Energy</li>
              <li><FontAwesomeIcon icon={faNairaSign} /> Money</li>
              <li><FontAwesomeIcon icon={faFaceTired} /> Stress</li>
            </ul>
            <span onClick={hideRundown}>Hide</span>
          </div>
        </div>
      </Container>
      <Container className="meters">
        <Meter barId={"happy-bar"} barName={"Happy"} barCol={"#FDEE00"} barWide={happy + "%"}>
          <span className="bar-icon"><FontAwesomeIcon icon={faFaceLaughBeam} /> {happy} </span>
        </Meter>
        <Meter barId={"health-bar"} barName={"Health"} barCol={"#4CBB17"} barWide={health + "%"}>
          <span className="bar-icon"><FontAwesomeIcon icon={faSquarePlus} /> {health} </span>
        </Meter>
        <Meter barId={"smart-bar"} barName={"Smart"} barCol={"#0047AB"} barWide={smart + "%"}>
          <span className="bar-icon"><FontAwesomeIcon icon={faGraduationCap} /> {grade}</span>
        </Meter>
        <Meter barId={"energy-bar"} barName={"Energy"} barCol={"#FF8C00"} barWide={energy + "%"}>
          <span className="bar-icon"><FontAwesomeIcon icon={faBolt} /> {energy} </span>
        </Meter>
        <Meter barId={"money-bar"} barName={"Money"} barCol={"#702963"} barWide={moneyval + "%"}>
          <span className="bar-icon"><FontAwesomeIcon icon={faNairaSign} /> {money} </span>
        </Meter>
        <Meter barId={"stress-bar"} barName={"Stress"} barCol={"#FF2400"} barWide={stress + "%"}>
          <span className="bar-icon"><FontAwesomeIcon icon={faFaceTired} /> {stress} </span>
        </Meter>
      </Container>
      <Container className="actions">
        <div>
          <Action buttonName={"Study"} buttonId={"study-button"} action={study}>
            <span className="button-tag">Study</span>
          </Action>
          <Action buttonName={"Eat"} buttonId={"eat-button"} action={eat}>
            <span className="button-tag">Eat</span>
          </Action>
          <Action buttonName={"Sleep"} buttonId={"sleep-button"} action={sleep}>
            <span className="button-tag">Sleep</span>
          </Action>
          <Action buttonName={"Chill"} buttonId={"chill-button"} action={chill}>
            <span className="button-tag">Chill</span>
          </Action>
          <Action buttonName={"Treat"} buttonId={"treat-button"} action={treat}>
            <span className="button-tag">Treat</span>
          </Action>
          <Action buttonName={"Work"} buttonId={"work-button"} action={work}>
            <span className="button-tag">Work</span>
          </Action>
        </div>
      </Container>
      <Alert body={alert} button={alertButton} onclick={() => toDo()}>
      </Alert>
      <Container style={{position: "absolute", bottom: "0", padding: "0 2%"}}>
        <div><a href="https://judithyusuf.netlify.app">Judith Yusuf</a>, {new Date().getFullYear()}</div>
      </Container>
    </div>
  );
}
