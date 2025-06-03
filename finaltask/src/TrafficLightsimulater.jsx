import React from "react";

export default function TrafficLightsimulater() {
  const [currentLight, setCurrentLight] = React.useState("red");
  const light = ["light red", "light yellow", "light green"];
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLight((prev) => {
        const current = light.indexOf(prev);
        const next = (current + 1) % light.length;
        return light[next];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [light]);

  return (
    <>
      <div className="outter">
        <h1 className="heading">Traffic Light Simulation</h1>
        <div>
          <div className="traffic-light">
            <div
              className={currentLight == "light red" ? currentLight : "light gray"}
            ></div>
            <div
              className={
                currentLight == "light yellow" ? currentLight : "light gray"
              }
            ></div>
            <div
              className={currentLight == "light green" ? currentLight : "light gray"}
            ></div>
          </div>
          <style>{`
            .heading{
                color: white;
            }
            .outter{
                display: flex;
                justify-content: center;
                flex-direction: column;
                padding: 20px;
                margin: 20px;
                border: 1px solid black;
                background: black;
                
            }
                .traffic-light {
                display: flex;
                flex-direction: column;
                width: 100px;
                height: 300px;
                background-color: gray;
                border-radius: 10px;
                padding: 10px;
                }
                .light {
                width: 80px;
                height: 80px;
                margin: 10px auto;
                border-radius: 50%;
                opacity: 0.3;
                }
                .red {
                background-color: darkred;
                opacity: 1;
                }
                .yellow {
                background-color: yellow;
                 opacity: 1;
                }
                .green {
                background-color: green;
                 opacity: 1;
                }
                .gray{
                background-color: darkgray;
                }
            `}</style>
        </div>
      </div>
    </>
  );
}
