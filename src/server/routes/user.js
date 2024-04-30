const express = require("express");
const router = express.Router();

const users = [
  {
    id: "admin",
    pw: "111",
    nick: "관리자",
  },
  {
    id: "test",
    pw: "111",
    nick: "테스터",
  },
  {
    id: "ddd",
    pw: "ddd",
    nick: "디디디",
  },
];

router.get("/", (req, res) => {
  res.json(
    users.map((user) => {
      return { id: user.id, nick: user.nick };
    })
  );
});

router.post("/login", (req, res) => {
  const { id, pw } = req.body;
  console.log(`Received id: ${id}, pw: ${pw}`);

  const nowUser = users.find((user) => user.id === id && user.pw === pw);
  if (nowUser) {
    res.json({
      ok: true,
      user: {
        id: nowUser.id,
        nick: nowUser.nick,
      },
    });
  } else {
    res.json({
      ok: false,
      msg: "아이디 혹은 비밀번호가 잘못되었습니다.",
    });
  }
});

module.exports = router;
