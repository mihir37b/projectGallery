const PORT = 4000;
const server = require("./server");

server.listen(PORT, () =>
  console.log(`

        Listening on port ${PORT}

        http://localhost:${PORT}/

    `)
);
