import React from 'react';


export default function TrafficLightsimulater() {
   
  return (
    <>
      <div>
        <h1>Traffic Light Simulation</h1>
        <div>
            <div className="traffic-light">
                <div className='light red'></div>
                <div className='light yellow'></div>
                <div className='light green'></div>
            </div>
            <style>{`
                .traffic-light {
                display: flex;
                justify-content: self-center;
                flex-direction: column;
                width: 100px;
                height: 300px;
                background-color: black;
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
