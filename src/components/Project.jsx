import React from "react";
// import "./style.css";

function Project(props) {
  return (
    <section>
        <div className="card">
            <h1>Projects</h1>
        </div>
        {/* container */}
        <div> 
            <div> {/* style={{backgroundImage: }} */}
                <div>
                    <h1>
                    {props.title}
                    </h1>
                    <div>

                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}

export default FriendCard;
