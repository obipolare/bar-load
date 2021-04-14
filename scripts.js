const loadBar = document.getElementById("load-bar");
const root = document.documentElement;

const loadingBar = () => {
  let scroll = document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  root.style.setProperty(
    "--bar-width",
    Number.parseInt((scroll / height) * 100) + "%"
  );
};

onscroll = loadingBar;
