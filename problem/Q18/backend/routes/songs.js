const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

// a) Insert 5 songs
router.post('/add', async (req, res) => {
  const song = new Song(req.body);
  await song.save();
  res.send("Song Added");
});

// b) Get all songs & count
router.get('/all', async (req, res) => {
  const songs = await Song.find();
  res.json({ count: songs.length, songs });
});

// c) Filter by music director
router.get('/by-director/:name', async (req, res) => {
  const songs = await Song.find({ music_director: req.params.name });
  res.json(songs);
});

// d) Filter by director and singer
router.get('/by-director-singer', async (req, res) => {
  const { director, singer } = req.query;
  const songs = await Song.find({ music_director: director, singer });
  res.json(songs);
});

// e) Delete by ID
router.delete('/delete/:id', async (req, res) => {
  await Song.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

// f) Update actor/actress
router.put('/update/:id', async (req, res) => {
  await Song.findByIdAndUpdate(req.params.id, req.body);
  res.send("Updated");
});

module.exports = router;
