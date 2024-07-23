// script.js
const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const coverImage = document.getElementById('cover-image');

const songs = [
    {
        title: "Ajeev Dastan",
        artist: "Tala Mangesker",
        src: "Ajib Dastan Hai Yeh.mp3",
        cover: "ajeev dastan.jpeg"
    },
    {
        title: "Kahani Suno",
        artist: "Album",
        src: "Kahani Suno(PagalWorld.com.se).mp3",
        cover: "kahani suno.jpeg"
    },
    {
        title: "O Bedardeya",
        artist: "Tu Jhuthi Mai Makkar",
        src: "O Bedardeya(PagalWorld.com.se).mp3",
        cover: "bedardiya.jpeg"
    },
    {
        title: "Kesariya",
        artist: "Bhramast",
        src: "Kesariya(PagalWorld.com.se).mp3",
        cover: "keshariya.jpeg"
    }
];

let currentSongIndex = 0;

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
    coverImage.src = song.cover;
}

function playSong() {
    audio.play();
    playButton.textContent = 'Pause';
}

function pauseSong() {
    audio.pause();
    playButton.textContent = 'Play';
}

function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(songs[currentSongIndex]);
    playSong();
}

function nextSong() {
    currentSongIndex++;
    if (currentSongIndex > songs.length - 1) {
        currentSongIndex = 0;
    }
    loadSong(songs[currentSongIndex]);
    playSong();
}

playButton.addEventListener('click', () => {
    const isPlaying = audio.paused;
    if (isPlaying) {
        playSong();
    } else {
        pauseSong();
    }
});

prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);

// Load the first song initially
loadSong(songs[currentSongIndex]);
