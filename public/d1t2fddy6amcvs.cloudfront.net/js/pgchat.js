window.onload = loadF();
function loadF() {
  var e = window.location.href,
    t = "https://prestigeconstructions.com/prestige-response/chat/";
  e.search("localhost") > 0 && (t = "http://localhost/chatbotfront/chat/"),
    e.search("devcorporatesite") > 0 &&
      (t = "https://devcorporatesite.preoss.in/prestige-response/chat/"),
    e.search("uatcorporatesite") > 0 &&
      (t = "https://uatcorporatesite.preoss.in/prestige-response/chat/"),
    e.search("prestigeconstructions") > 0 &&
      (t = "https://prestigeconstructions.com/prestige-response/chat/"),
    e.search("prestigeconstructions") > 0 &&
      (t = "https://www.prestigeconstructions.com/prestige-response/chat/");
  var s = document.createElement("div"),
    a = document.createElement("div"),
    r = document.createElement("div"),
    i = document.createElement("div"),
    c = document.createElement("div"),
    o = document.createElement("div"),
    n = document.createElement("strong"),
    l = document.createElement("span"),
    d = document.createElement("iframe"),
    p = document.createElement("div");
  s.classList.add("bot-frame"),
    a.classList.add("livechat-close"),
    r.classList.add("bot-livechat-logo"),
    i.classList.add("chatbot-trigger-message"),
    c.classList.add("chatbot-trigger-user"),
    n.classList.add("chatbot-trigger-name"),
    o.classList.add("chatbot-trigger-body"),
    p.classList.add("bot-init"),
    i.setAttribute("style", "display: none;"),
    (n.innerHTML = "Prestige Genie"),
    (l.innerHTML = "says"),
    (o.innerHTML = "Hi! How can we assist you?"),
    c.appendChild(n),
    c.appendChild(l),
    i.appendChild(c),
    i.appendChild(o),
    p.append(r, i),
    document.body.prepend(s, p),
    d.setAttribute("id", "pg-chat"),
    d.setAttribute("src", t),
    d.setAttribute("frameborder", "0"),
    (a.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="18" viewBox="0 0 24 24" width="18"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>'),
    s.appendChild(a),
    setTimeout(function e() {
      document.querySelector(".chatbot-trigger-message").classList.add("open"),
        (document.querySelector(".chatbot-trigger-message").style.display =
          "block");
    }, 3e3),
    p.addEventListener("click", (e) => {
      document.querySelector("#pg-chat") || s.appendChild(d),
        e.preventDefault(),
        document.querySelector(".bot-frame").classList.toggle("show"),
        document.querySelector(".bot-init").classList.toggle("closed"),
        d.contentWindow.postMessage({ call: "activeChat", value: "1" });
    }),
    a.addEventListener("click", (e) => {
      e.preventDefault(),
        document.querySelector(".bot-init").classList.remove("closed"),
        (document.querySelector(".chatbot-trigger-message").style.display =
          "none"),
        document.querySelector(".bot-frame").classList.toggle("show"),
        d.contentWindow.postMessage({ call: "activeChat", value: "-1" });
    });
}
