from flask import Flask, redirect, render_template, request, g
import sqlite3

app = Flask(__name__)

DATABASE = "fromshims.db"

SPORTS = [
    "Dodgeball",
    "Flag Football",
    "Soccer",
    "Volleyball",
    "Ultimate Frisbee"
]

def get_db():
    db = getattr(g, "_database", None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.before_request
def before_request():
    g.db = get_db()
    g.cursor = g.db.cursor()

@app.teardown_request
def teardown_request(exception=None):
    db = getattr(g, "_database", None)
    if db is not None:
        db.commit()
        db.close()

@app.route("/")
def index():
    return render_template("index.html", sports=SPORTS)

@app.route("/register", methods=["POST"])
def register():
    name = request.form.get("name")
    if not name:
        return render_template("error.html", message="Missing name")
    sport = request.form.get("sport")
    if not sport:
        return render_template("error.html", message="Missing sport")
    if sport not in SPORTS:
        return render_template("error.html", message="Invalid sport")

    # Insert data into the registrants table
    g.cursor.execute("INSERT INTO registrants (name, sport) VALUES (?, ?)", (name, sport))

    return redirect("/registrants")

@app.route("/registrants")
def registrants():
    # Fetch all registrants from the database
    g.cursor.execute("SELECT * FROM registrants")
    registrants = g.cursor.fetchall()

    return render_template("registrants.html", registrants=registrants)

if __name__ == "__main__":
    app.run(debug=True)