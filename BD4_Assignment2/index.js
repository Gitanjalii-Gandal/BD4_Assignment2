const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3000;

// Connect to SQLite database
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// 1. GET All Games
app.get('/games', (req, res) => {
  db.all('SELECT * FROM games', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ games: rows });
    }
  });
});

// 2. GET Game by ID
app.get('/games/details/:id', (req, res) => {
  db.get('SELECT * FROM games WHERE id = ?', [req.params.id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ game: row });
    }
  });
});

// 3. GET Games by Genre
app.get('/games/genre/:genre', (req, res) => {
  db.all(
    'SELECT * FROM games WHERE genre = ?',
    [req.params.genre],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ games: rows });
      }
    }
  );
});

// 4. GET Games by Platform
app.get('/games/platform/:platform', (req, res) => {
  db.all(
    'SELECT * FROM games WHERE platform = ?',
    [req.params.platform],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ games: rows });
      }
    }
  );
});

// 5. GET Games Sorted by Rating
app.get('/games/sort-by-rating', (req, res) => {
  db.all('SELECT * FROM games ORDER BY rating DESC', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ games: rows });
    }
  });
});



// 6. GET All Players
app.get('/players', (req, res) => {
  db.all('SELECT * FROM players', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ players: rows });
    }
  });
});

// 7. GET Player by ID
app.get('/players/details/:id', (req, res) => {
  db.get('SELECT * FROM players WHERE id = ?', [req.params.id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ player: row });
    }
  });
});

// 8. GET Players by Platform
app.get('/players/platform/:platform', (req, res) => {
  db.all(
    'SELECT * FROM players WHERE platform = ?',
    [req.params.platform],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ players: rows });
      }
    }
  );
});

// 9. GET Players Sorted by Rating
app.get('/players/sort-by-rating', (req, res) => {
  db.all('SELECT * FROM players ORDER BY rating DESC', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ players: rows });
    }
  });
});



// 10. GET All Tournaments
app.get('/tournaments', (req, res) => {
  db.all('SELECT * FROM tournaments', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ tournaments: rows });
    }
  });
});

// 11. GET Tournament by ID
app.get('/tournaments/details/:id', (req, res) => {
  db.get(
    'SELECT * FROM tournaments WHERE id = ?',
    [req.params.id],
    (err, row) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ tournament: row });
      }
    }
  );
});

// 12. GET Tournaments by Game ID
app.get('/tournaments/game/:gameId', (req, res) => {
  db.all(
    'SELECT * FROM tournaments WHERE gameId = ?',
    [req.params.gameId],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ tournaments: rows });
      }
    }
  );
});

// 13. GET Tournaments Sorted by Prize Pool
app.get('/tournaments/sort-by-prize-pool', (req, res) => {
  db.all('SELECT * FROM tournaments ORDER BY prizePool DESC', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ tournaments: rows });
    }
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
