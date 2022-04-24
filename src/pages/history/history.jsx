import React from "react";
import { Footer, Nav, Sidebar } from "../../components";
import { useHistoryContext } from "../../context/historyContext";

function History() {
  const { historyState, historyDispatch } = useHistoryContext();
  return (
    <div>
      <Nav />
      <div className="flex-row history-videos">
        <Sidebar />
        <div className="history-videos-sec grid-30-70">
          <div className="history-sec-img flex-col">
            <img
              className="img-fluid-resp"
              src="https://res.cloudinary.com/de5it79dw/image/upload/v1650721311/pexels-designecologist-1779487_nseqr8.jpg"
              alt="text"
            />
            <h3 className="main-h3">History</h3>
            <h5 className="main-h5">
              {historyState.historyList.length} Videos
            </h5>
            <button
              className="small-btn history-btn btn-primary"
              onClick={() => historyDispatch({ type: "CLEAR_HISTORY" })}
            >
              CLEAR HISTORY
            </button>
          </div>
          <div className="history-sec-list">
            {historyState.historyList.map((vid) => {
              return (
                <div className="basic-card history-basic-card">
                  <div className="card-header">
                    <img
                      className="card-img-header history-card-img card-img"
                      src={vid.thumbnail}
                    />
                    <div className="header-text">
                      <div className="history-card-head flex-row">
                        <h4 className="card-title">{vid.title}</h4>
                        <i
                          className="fas fa-trash-alt card-icon"
                          onClick={() => {
                            historyDispatch({
                              type: "REMOVE_FROM_HISTORY",
                              payload: vid._id,
                            });
                          }}
                        ></i>
                      </div>
                      <span className="card-subtext">{vid.channelName}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default History;
