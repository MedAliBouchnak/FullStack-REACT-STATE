import "./App.css";
import profileImg from "./Photo.jpg";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Mohamed Ali Bouchnak",
      bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur dolorum repellat minima natus! Dicta corporis ad fugit quidem ipsam a vitae aut accusantium provident nulla. Blanditiis eligendi neque sit quam.",

      imgSrc: profileImg,
      profession: "Future FullStack JS Developer",
      shows: false,
      timer: 0,
    };
  }
  show = () => {
    this.setState({ shows: !this.state.shows, timer: 0 });
  };
  componentDidMount = () => {
    setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer + 1
        
      }));
    }, 1000);
  };
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          {this.state.shows ? (
            <div
              style={{
                margin: 20,
                padding: "20 0 20 0",
                borderRadius: 10,
                display: "flex",
                gap: 20,
              }}
            >
              <div>
                <img
                  style={{ width: 500, borderRadius: 500 }}
                  src={this.state.imgSrc}
                  alt="Profile"
                />
              </div>
              <div
                style={{
                  margin: 20,
                  padding: "20 0 20 0",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    fontFamily: "wotfardRegularWebfont",
                    fontWeight: "600",
                    fontSize: "3.4rem",
                    marginBottom: 10,
                  }}
                >
                  {this.state.fullName}
                </h1>
                <h2
                  style={{
                    textAlign: "center",
                    lineHeight: "0.9",
                    fontFamily: "wotfardRegularWebfont",
                    fontWeight: "600",
                    fontSize: "2.4rem",
                  }}
                >
                  {this.state.profession}
                </h2>
                <p
                  style={{
                    marginTop: 50,
                    textAlign: "left",
                    lineHeight: "1.3",
                    fontFamily: "wotfardRegularWebfont",
                    fontSize: 20,
                  }}
                >
                  {this.state.bio}
                </p>
                Timer: {this.state.timer}
              </div>
            </div>
          ) : null}
          <button
            style={{
              backgroundColor: "#e7e7e7",
              color: "black",
              padding: "12px 28px",
            }}
            onClick={this.show}
          >
            SHOW ME
          </button>
        </header>
      </div>
    );
  }
}

export default App;