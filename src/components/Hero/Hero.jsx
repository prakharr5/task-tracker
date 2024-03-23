import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="main">
        <div className="header">
          <div className="name">TASK BOARD</div>
          <div className="profile">
            <i className="fa-solid fa-user"></i>
          </div>
        </div>
        <div className="content">
          <div className="one">
            <div className="filter">
              <h3>Filter By:</h3>
              <input type="dropdown" />
              <input type="dropdown" />
              <input type="dropdown" />
            </div>
            <div className="newTaskBtn">
              <a className="button">Add New Task</a>
            </div>
          </div>
          <div className="two">
            <h3>Sort By:</h3>
            <input type="dropdown" />
          </div>
          <div className="three">
            <div className="box">
              <div className="category">Pending</div>
              <div className="task">
                <div className="title">
                  <h4>Task 1</h4>
                  <a className="buttonTwo">P0</a>
                </div>
                <div className="line"></div>
                <div className="desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, neque. Ipsam quidem ea molesti
                </div>
                <div className="person">
                  <b>@Person</b>
                  <i className="fa-solid fa-ellipsis-vertical buttonTwo"></i>
                </div>
                <div className="status">
                  <a className="button">Assign</a>
                </div>
              </div>
              <div className="task">
                <div className="title">
                  <h4>Task 1</h4>
                  <a className="buttonTwo">P0</a>
                </div>
                <div className="line"></div>
                <div className="desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, neque. Ipsam quidem ea molesti
                </div>
                <div className="person">
                  <b>@Person</b>
                  <i className="fa-solid fa-ellipsis-vertical buttonTwo"></i>
                </div>
                <div className="status">
                  <a className="button">Assign</a>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="category">In Progress</div>
              <div className="task">
                <div className="title">
                  <h4>Task 1</h4>
                  <a className="buttonTwo">P0</a>
                </div>
                <div className="line"></div>
                <div className="desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, neque. Ipsam quidem ea molesti
                </div>
                <div className="person">
                  <b>@Person</b>
                  <i className="fa-solid fa-ellipsis-vertical buttonTwo"></i>
                </div>
                <div className="status">
                  <a className="button">Assign</a>
                </div>
              </div>
              <div className="task">
                <div className="title">
                  <h4>Task 1</h4>
                  <a className="buttonTwo">P0</a>
                </div>
                <div className="line"></div>
                <div className="desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, neque. Ipsam quidem ea molesti
                </div>
                <div className="person">
                  <b>@Person</b>
                  <i className="fa-solid fa-ellipsis-vertical buttonTwo"></i>
                </div>
                <div className="status">
                  <a className="button">Assign</a>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="category">Completed</div>
              <div className="task">
                <div className="title">
                  <h4>Task 1</h4>
                  <a className="buttonTwo">P0</a>
                </div>
                <div className="line"></div>
                <div className="desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, neque. Ipsam quidem ea molesti
                </div>
                <div className="person">
                  <b>@Person</b>
                  <i className="fa-solid fa-ellipsis-vertical buttonTwo"></i>
                </div>
                <div className="status">
                  <a className="button">Assign</a>
                </div>
              </div>
              <div className="task">
                <div className="title">
                  <h4>Task 1</h4>
                  <a className="buttonTwo">P0</a>
                </div>
                <div className="line"></div>
                <div className="desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, neque. Ipsam quidem ea molesti
                </div>
                <div className="person">
                  <b>@Person</b>
                  <i className="fa-solid fa-ellipsis-vertical buttonTwo"></i>
                </div>
                <div className="status">
                  <a className="button">Assign</a>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="category">Deployed</div>
              <div className="task">
                <div className="title">
                  <h4>Task 1</h4>
                  <a className="buttonTwo">P0</a>
                </div>
                <div className="line"></div>
                <div className="desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, neque. Ipsam quidem ea molesti
                </div>
                <div className="person">
                  <b>@Person</b>
                  <i className="fa-solid fa-ellipsis-vertical buttonTwo"></i>
                </div>
                <div className="status">
                  <a className="button">Assign</a>
                </div>
              </div>
              <div className="task">
                <div className="title">
                  <h4>Task 1</h4>
                  <a className="buttonTwo">P0</a>
                </div>
                <div className="line"></div>
                <div className="desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, neque. Ipsam quidem ea molesti
                </div>
                <div className="person">
                  <b>@Person</b>
                  <i className="fa-solid fa-ellipsis-vertical buttonTwo"></i>
                </div>
                <div className="status">
                  <a className="button">Assign</a>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="category">Deffered</div>
              <div className="task">
                <div className="title">
                  <h4>Task 1</h4>
                  <a className="buttonTwo">P0</a>
                </div>
                <div className="line"></div>
                <div className="desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, neque. Ipsam quidem ea molesti
                </div>
                <div className="person">
                  <b>@Person</b>
                  <i className="fa-solid fa-ellipsis-vertical buttonTwo"></i>
                </div>
                <div className="status">
                  <a className="button">Assign</a>
                </div>
              </div>
              <div className="task">
                <div className="title">
                  <h4>Task 1</h4>
                  <a className="buttonTwo">P0</a>
                </div>
                <div className="line"></div>
                <div className="desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, neque. Ipsam quidem ea molesti
                </div>
                <div className="person">
                  <b>@Person</b>
                  <i className="fa-solid fa-ellipsis-vertical buttonTwo"></i>
                </div>
                <div className="status">
                  <a className="button">Assign</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
