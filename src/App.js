import React, { useState } from "react";

function DateTime(props) {
  return <p className="date">{props.date}</p>;
}

function Wrapper(WrappedComponent) {
  function TimeConvet(props) {
    const now = new Date();
    const videoTime = new Date(props.date);
    const timeDifference = (now - videoTime) / (1000 * 60);
    let date = "";

    if (timeDifference <= 60) {
      date = "12 минут назад";
    } else if ((timeDifference > 60) & (timeDifference <= 1440)) {
      date = "5 часов назад";
    } else if (timeDifference > 1440) {
      const days = Math.floor(timeDifference / 1440);
      date = `${days} дней назад`;
    }
    return <WrappedComponent date={date} />;
  }
  return TimeConvet;
}

const DateTimePretty = Wrapper(DateTime);

function Video(props) {
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <DateTimePretty date={props.date} />
    </div>
  );
}

function VideoList(props) {
  return props.list.map((item, index) => (
    <Video url={item.url} date={item.date} />
  ));
}

export default function App() {
  const [list, setList] = useState([
    {
      url: "https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-01-29 12:44:00",
    },
    {
      url: "https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-01-29 10:10:00",
    },
    {
      url: "https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2023-01-30 11:00:00",
    },
    {
      url: "https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-03 12:10:00",
    },
    {
      url: "https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2018-01-01 16:17:00",
    },
    {
      url: "https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0",
      date: "2017-12-02 05:24:00",
    },
  ]);

  return <VideoList list={list} />;
}
