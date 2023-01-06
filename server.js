const { response } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

const albumsData = [
    {
      albumId: "10",
      artistName: "Beyoncé",
      collectionName: "Lemonade",
      artworkUrl100:
        "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
      releaseDate: "2016-04-25T07:00:00Z",
      primaryGenreName: "Pop",
      url:
        "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
    },
    {
      albumId: "11",
      artistName: "Beyoncé",
      collectionName: "Dangerously In Love",
      artworkUrl100:
        "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
      releaseDate: "2003-06-24T07:00:00Z",
      primaryGenreName: "Pop",
      url:
        "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
    },
  ];
  
  // to get all the albums
  app.get("/albums", function (req, res) {
    res.send(albumsData);
  });

  // get albums by id
  app.get("/albums/:albumId", (req, res) => {
    const albumId = req.params.albumId;
    const result = albumsData.find(album => album.albumId == albumId);
    res.status(200).send(result);
   })

   // add a new album
   // notice .post (not .get)
app.post("/albums", function (req, res) {
    const newAlbum = {
        albumId: req.params.albumId,
        ...req.body
    };
    albumsData.push(newAlbum);
    res.status(200).json(newAlbum);

  });

  // delete an album
  // notice .delete
app.delete("/albums/:albumID", function (req, res) {
    const albumID = req.params.albumID;
    const albumIndex = albumsData.findIndex(album => album.id == albumID);
    albumsData.splice(albumIndex, 1);
    res.status(201).send(`This album with ${albumID} has been deleted.`)
});

app.listen(3000, () => console.log("Listening on port 3000"));
