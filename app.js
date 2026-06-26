/**
 * GLA 6 - INDIVIDUAL ACTIVITY
 *
 * Solve the errors and execute the 4 basic CRUD commands.
 *
 * IMPORTANT:
 * Do NOT rewrite the entire file.
 * Fix the existing errors and make all operations work.
 *
 * Useful Documentation:
 * https://www.sqlite.org/docs.html
 * https://www.npmjs.com/package/sqlite3
 */

// First install sqlite3:
// npm install sqlite3

const sqlite3 = require('sqlite3').verbose();

/*
 * DATABASE CONNECTION
 * Fixed: Corrected filename from themepark.sqllite to themepark.sqlite
 */

const db = new sqlite3.Database('./themepark.sqlite');

function initializeDatabase(callback){
  db.run(
    `
    CREATE TABLE IF NOT EXISTS rides (
      ride_name TEXT PRIMARY KEY,
      description TEXT,
      duration TEXT,
      min_height TEXT
    )
    `,
    (err) => {
      if (err) {
        console.log(err);
        return;
      }

      db.run(
        `
        INSERT OR IGNORE INTO rides (ride_name, description, duration, min_height)
        VALUES
        ('Thunder Coaster', 'High-speed thrill ride', '2 Minutes', '120 cm'),
        ('Haunted Mansion', 'Spooky dark ride', '4 Minutes', '110 cm')
        `,
        (seedErr) => {
          if (seedErr) {
            console.log(seedErr);
            return;
          }

          callback();
        }
      );
    }
  );
}

/*
 * READ OPERATION
 * Expected: Display all rides from the rides table.
 * Fixed: Changed 'FORM' to 'FROM'
 */

function readOperation(callback){
  db.all(
    'SELECT * FROM rides',
    [],
    (err,rows)=>{
      if(err){
        console.log(err);
        if (callback) callback(err);
        return;
      }
      console.log('READ results:', rows);
      if (callback) callback(null, rows);
    }
  );
}

/*
 * CREATE OPERATION
 * Insert a new ride.
 * Ride Name: Galaxy Spinner
 * Description: Family Ride
 * Duration: 5 Minutes
 * Minimum Height: 100 cm
 * Fixed: Changed 'INSERT rides' to 'INSERT INTO rides'
 */

function createOperation(callback){
  db.run(
    `
    INSERT OR REPLACE INTO rides
    (
      ride_name,
      description,
      duration,
      min_height
    )
    VALUES
    (
      ?,
      ?,
      ?,
      ?
    )
    `,
    [
      'Galaxy Spinner',
      'Family Ride',
      '5 Minutes',
      '100 cm'
    ],

    function(err){
      if(err){
        console.log(err);
        if (callback) callback(err);
        return;
      }
      console.log('Ride Added');
      if (callback) callback(null);
    }
  );
}

/*
 * UPDATE OPERATION
 * Update:
 * Thunder Coaster
 * New Duration:
 * 3 Minutes
 * Fixed: Changed 'UPDATE ride' to 'UPDATE rides' (table name)
 */

function updateOperation(callback){
  db.run(
    `
    UPDATE rides
    SET duration = ?
    WHERE ride_name = ?
    `,
    [
      '3 Minutes',
      'Thunder Coaster'
    ],

    function(err){
      if(err){
        console.log(err);
        if (callback) callback(err);
        return;
      }
      console.log('Rows Updated:',this.changes);
      if (callback) callback(null);
    }
  );
}

/*
 * DELETE OPERATION
 * Delete: Haunted Mansion
 * Fixed: Changed 'DELETE rides' to 'DELETE FROM rides'
 */

function deleteOperation(callback){
  db.run(
    `
    DELETE FROM rides
    WHERE ride_name = ?
    `,
    [
      'Haunted Mansion'
    ],
    function(err){
      if(err){
        console.log(err);
        if (callback) callback(err);
        return;
      }
      console.log(
        'Rows Deleted:',
        this.changes
      );
      if (callback) callback(null);
    }
  );
}

/*
 * RUN OPERATIONS
 * Uncomment each operation
 * once you fix the errors.
 */
db.serialize(() => {
  initializeDatabase(() => {
    readOperation((readErr) => {
      if (readErr) return;

      createOperation((createErr) => {
        if (createErr) return;

        updateOperation((updateErr) => {
          if (updateErr) return;

          deleteOperation((deleteErr) => {
            if (deleteErr) return;

            readOperation(() => {
              db.close();
            });
          });
        });
      });
    });
  });
});

/*
 * STUDENT TASKS
 * 1. Fix the database connection.
 * 2. Fix the READ operation.
 * 3. Fix the CREATE operation.
 * 4. Fix the UPDATE operation.
 * 5. Fix the DELETE operation.
 * 6. Execute all operations.
 * 7. Take a screenshot showing:
 *    * READ results
 *    * CREATE results
 *    * UPDATE results
 *    * DELETE results
 =====================================
 */
