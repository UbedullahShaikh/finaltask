import React from 'react';


export default function TrafficLightsimulater() {
    const [currentLight, setCurrentLight] = React.useState('red');
    const lights = ['light red', 'light yellow', 'light green'];
    React.useEffect(() => {
       
    }, [lights]);

  return (
    <>
      <div>
        <h1>Traffic Light Simulation</h1>
        <div>
            <div className="traffic-light">
                <div className={currentLight}></div>
                <div className={currentLight}></div>
                <div className={currentLight}></div>
            </div>
            <style>{`
                .traffic-light {
                display: flex;
                flex-direction: column;
                width: 100px;
                height: 300px;
                background-color: lightgray;
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
                background-color: red;
                }
                .yellow {
                background-color: yellow;
                }
                .green {
                background-color: green;
                }
            `}</style>
        </div>
      </div>
    </>
  );
}
