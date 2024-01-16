const songs = [
    {
        song: "Perfect Night",
        singer: "LE SSERAFIM(르세라핌)",
    },
    {
        song: "사랑이 아닌 단어로 사랑을 말해요",
        singer: "siso(시소)",
    },
    {
        song: "Get A Guitar",
        singer: "RIIZE",
    },
    {
        song: "DIE 4 YOU",
        singer: "DEAN(딘)",
    },
    {
        song: "To.X",
        singer: "태연",
    },
    {
        song: "Melt Away",
        singer: "태연",
    },
    {
        song: "Right Now (Feat.Crush)",
        singer: "쿠기(Coogie)",
    },
];

const song = document.querySelector("#song span:first-child");
const singer = document.querySelector("#song span:last-child");
const todaysSong = songs[Math.floor(Math.random() * songs.length)];

song.innerText = todaysSong.song;
singer.innerText = todaysSong.singer;
